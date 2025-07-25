// 1. レスポンシブ 375px未満のviewport画面幅固定
(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) return;
  function switchViewport() {
    const value = window.outerWidth > 375 ? "width=device-width,initial-scale=1" : "width=375";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

document.addEventListener("DOMContentLoaded", () => {
  // トップページかどうか判定
  const isHome = document.body.classList.contains("home");

  // 2. トップページのみスムーススクロール付与
  if (isHome) {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }
});

// GSAP & ScrollTriggerがロード済みの場合の処理
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // トップページ限定処理まとめ
  if (document.body.classList.contains("home")) {
    // 3. ヘッダー状態切り替え ScrollTrigger
    const header = document.querySelector(".l-header");
    const nextContent = document.querySelectorAll(".p-top-works");
    if (header && nextContent.length) {
      nextContent.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top top",
          onEnter: () => header.classList.add("js-active"),
          onLeaveBack: () => header.classList.remove("js-active"),
        });
      });
    }

    // 8. メインビジュアル文字炎アニメ
    const mvTargets = document.querySelectorAll(".p-top-mv__label, .p-top-mv__title, .p-top-mv__lead");
    mvTargets.forEach((el) => {
      const chars = el.textContent.trim().split("");
      el.innerHTML = chars.map((char) => `<span class="is-flame is-glowIn">${char}</span>`).join("");
      el.style.visibility = "visible";
    });
    const lead = document.querySelector(".p-top-mv__lead");
    if (lead) {
      const chars = lead.querySelectorAll(".is-flame");
      setInterval(() => {
        const pick = Array.from(chars)
          .sort(() => 0.5 - Math.random())
          .slice(0, 2);
        pick.forEach((el) => {
          el.classList.add("is-flash");
          setTimeout(() => el.classList.remove("is-flash"), 100);
        });
      }, 100);
    }

    // ナビリンク色アニメ
    const navLinks = Array.from(document.querySelectorAll(".c-global-nav__link, .l-header__logo-link"));
    const pulseAnimations = new Map();
    const contactIndex = navLinks.findIndex((link) => link.dataset.section === "contact");
    navLinks.forEach((link, i) => {
      const sectionId = link.dataset.section;
      const section = document.getElementById(sectionId);
      if (section) {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => animateLink(link, i),
          onEnterBack: () => animateLink(link, i),
          onLeave: () => resetLink(link),
          onLeaveBack: () => resetLink(link),
        });
      }
    });

    function animateLink(link, i) {
      if (pulseAnimations.has(link)) return;
      const base = 0.1;
      const step = 0.2;
      const duration = base + step * Math.abs(contactIndex - i);
      const tween = gsap.to(link, {
        color: "#ff4500",
        textShadow: "0 0 10px #ff6347, 0 0 20px #ffa07a",
        scale: 1.05,
        duration: duration,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
      pulseAnimations.set(link, tween);
    }
    function resetLink(link) {
      const tween = pulseAnimations.get(link);
      if (tween) {
        tween.kill();
        pulseAnimations.delete(link);
      }
      const isActive = header && header.classList.contains("js-active");
      gsap.to(link, {
        scale: 1,
        color: isActive ? "#222" : "#fff",
        textShadow: "0 0 0px transparent",
        duration: 0.3,
        ease: "power1.inOut",
      });
    }

    // ヘッダー色変化関数
    function updateHeaderColors() {
      if (!header) return;
      const isActive = header.classList.contains("js-active");
      gsap.to(header, {
        backgroundColor: isActive ? "#fff" : "#222",
        boxShadow: isActive ? "0 4px 8px rgba(0,0,0,0.2)" : "none",
        duration: 0.3,
        overwrite: "auto",
      });
      gsap.to(".l-header__logo-link", {
        color: isActive ? "#222" : "#fff",
        duration: 0.3,
        overwrite: "auto",
      });
      document.querySelectorAll(".c-global-nav__link").forEach((link) => {
        gsap.to(link, {
          color: isActive ? "#222" : "#fff",
          duration: 0.3,
          overwrite: "auto",
        });
      });
      document.querySelectorAll(".p-header__button").forEach((btn) => {
        gsap.to(btn, {
          color: isActive ? "#222" : "#fff",
          duration: 0.3,
          overwrite: "auto",
        });
      });
      document.querySelectorAll(".c-drawer-icon__bar").forEach((bar) => {
        gsap.to(bar, {
          backgroundColor: isActive ? "#222" : "#fff",
          duration: 0.3,
          overwrite: "auto",
        });
      });
    }

    // .p-top-mv 要素がある場合 ScrollTriggerを作成
    if (document.querySelector(".p-top-mv")) {
      ScrollTrigger.create({
        trigger: ".p-top-mv",
        start: "bottom top",
        onEnter: () => {
          if (header) header.classList.add("js-active");
          updateHeaderColors();
        },
        onLeaveBack: () => {
          if (header) header.classList.remove("js-active");
          updateHeaderColors();
        },
      });
    }
  }

  // 4. l-mainのmargin-block-startをl-headerの高さに合わせる (全ページ共通)
  function setMainMargin() {
    const header = document.querySelector(".l-header");
    const main = document.querySelector(".l-main");
    if (header && main) {
      main.style.marginBlockStart = header.offsetHeight + "px";
    }
  }
  window.addEventListener("DOMContentLoaded", setMainMargin);
  window.addEventListener("resize", setMainMargin);

  // 5. l-mainのmin-height調整 (全ページ共通)
  function setMainHeight() {
    const header = document.querySelector(".l-header");
    const footer = document.querySelector(".l-footer");
    const footerBottom = document.querySelector(".l-footer__bottom");
    const main = document.querySelector(".l-main");

    if (header && footer && main) {
      const winH = window.innerHeight;
      const h = header.offsetHeight;
      const f = footer.offsetHeight + (footerBottom ? footerBottom.offsetHeight : 0);
      main.style.minHeight = winH - h - f + "px";
    }
  }
  window.addEventListener("resize", setMainHeight);
  window.addEventListener("DOMContentLoaded", setMainHeight);
}

// 5. ドロワーメニュー処理 (全ページ共通)
document.addEventListener("DOMContentLoaded", () => {
  const drawerIcon = document.querySelector(".c-drawer-icon");
  const drawer = document.querySelector(".c-drawer");
  const drawerOverlay = document.querySelector(".c-drawer-overlay");
  const drawerNavItem = document.querySelectorAll('.c-drawer__content a[href^="#"]');
  const header = document.querySelector(".l-header");
  const headerHeight = header ? header.offsetHeight : 0;
  const breakpoint = 900;
  let isMenuOpen = false;
  let isMenuOpenAtBreakpoint = false;

  if (!drawerIcon || !drawer || !drawerOverlay) return;

  const openMenu = () => {
    if (!drawer.classList.contains("js-show")) {
      drawer.classList.add("js-show");
      drawerIcon.classList.add("js-show");
      drawerOverlay.classList.add("js-show");
      document.body.classList.add("is-fixed");
      isMenuOpen = true;
    }
  };
  const closeMenu = () => {
    if (drawer.classList.contains("js-show")) {
      drawer.classList.remove("js-show");
      drawerIcon.classList.remove("js-show");
      drawerOverlay.classList.remove("js-show");
      document.body.classList.remove("is-fixed");
      isMenuOpen = false;
    }
  };
  const toggleMenu = () => (drawer.classList.contains("js-show") ? closeMenu() : openMenu());
  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > breakpoint && isMenuOpenAtBreakpoint) {
      closeMenu();
    } else if (windowWidth <= breakpoint && drawer.classList.contains("js-show")) {
      isMenuOpenAtBreakpoint = true;
    }
  };
  const clickOuter = (event) => {
    if (drawer.classList.contains("js-show") && !drawer.contains(event.target) && !drawerIcon.contains(event.target) && !drawerOverlay.contains(event.target) && isMenuOpen) {
      closeMenu();
    } else if (drawer.classList.contains("js-show") && !drawer.contains(event.target)) {
      isMenuOpen = true;
    }
  };
  const linkScroll = (target) => {
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  drawerIcon.addEventListener("click", toggleMenu);
  drawerOverlay.addEventListener("click", closeMenu);
  window.addEventListener("resize", handleResize);
  document.addEventListener("click", clickOuter);
  drawerNavItem.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      closeMenu();
      const targetItem = document.querySelector(item.getAttribute("href"));
      linkScroll(targetItem);
    });
  });
});

// 6. モーダル処理 (全ページ共通)
document.querySelectorAll(".p-modal__open-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const dialogId = button.getAttribute("data-dialog");
    const dialog = document.getElementById(dialogId);
    if (dialog) {
      dialog.showModal();
      dialog.classList.add("js-show");
      document.body.style.overflow = "hidden";
    }
  });
});
document.querySelectorAll(".p-top-modal__close-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = button.closest("dialog");
    if (dialog) {
      dialog.classList.remove("js-show");
      dialog.close();
      document.body.style.overflow = "";
    }
  });
});
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (e) => {
    const inner = dialog.querySelector(".p-top-modal__inner");
    const linkBody = dialog.querySelector(".p-top-modal__link-body");
    if (inner && linkBody && !inner.contains(e.target) && !linkBody.contains(e.target)) {
      dialog.classList.remove("js-show");
      dialog.close();
      document.body.style.overflow = "";
    }
  });
});

// 7. 動画クリック再生/停止 (全ページ共通)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-click-video").forEach((video) => {
    video.addEventListener("click", () => {
      // videoの親要素を取得（ここでラッパーを想定）
      const wrapper = video.closest(".c-video");
      if (!wrapper) return;

      if (video.paused) {
        video.play();
        // ラッパーからis-pausedクラスを外す
        wrapper.classList.remove("is-paused");
      } else {
        video.pause();
        // ラッパーにis-pausedクラスを付与
        wrapper.classList.add("is-paused");
      }
    });
  });
});

// 9. ナビhoverアニメ
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".l-header__logo-link, .c-global-nav__link").forEach((link) => {
    link.addEventListener("mouseenter", () => gsap.to(link, { scale: 1.1, duration: 0.3 }));
    link.addEventListener("mouseleave", () => gsap.to(link, { scale: 1, duration: 0.3 }));
  });
});

// 10. ローディングアニメーション (全ページ共通)
document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("loadingPlayed")) {
    startLoadingAnimation();
    sessionStorage.setItem("loadingPlayed", "1");
  } else {
    document.body.classList.remove("loading");
    const loading = document.querySelector(".p-top-loading");
    if (loading) loading.style.display = "none";
    const header = document.querySelector(".l-header");
    if (header) {
      header.style.opacity = 1;
      header.style.transform = "translateY(0)";
    }
    setMainMargin();
  }
});
function startLoadingAnimation() {
  const chars = document.querySelectorAll(".p-top-loading__char");
  const portfolio = document.querySelector(".p-top-loading__portfolio");
  if (!portfolio) return;
  gsap.set(portfolio, { opacity: 0 });
  function showPortfolioRipple() {
    if (!portfolio.querySelector(".portfolio-char")) {
      const text = portfolio.textContent || "";
      portfolio.textContent = "";
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        span.className = "portfolio-char";
        span.textContent = text[i];
        portfolio.appendChild(span);
      }
    }
    const rippleChars = portfolio.querySelectorAll(".portfolio-char");
    gsap.set(portfolio, { opacity: 0, scale: 0, filter: "blur(8px)" });
    gsap.set(rippleChars, {
      color: "#fff",
      textShadow: `
        0 0 4px #ff2400,
        0 0 8px #ff4500,
        0 0 12px #ff6347,
        0 0 16px #cc1100,
        0 0 20px rgba(204, 0, 0, 0.3)
      `,
    });
    const tl = gsap.timeline();
    tl.to(portfolio, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0,
      ease: "expo.out",
    });
    tl.fromTo(
      rippleChars,
      { y: 0 },
      {
        y: 0,
        color: "#fff",
        textShadow: `
      0 0 8px #fff,
      0 0 16px #fff,
      0 0 32px #ff2400,
      0 0 64px #ff2400,
      0 0 128px #fff,
      0 0 256px #ff2400
    `,
        filter: "brightness(3)",
        duration: 0.12,
        ease: "power1.in",
        stagger: { amount: 0.08, from: "random" },
      },
      ">"
    );
    tl.to(rippleChars, { filter: "brightness(1)", duration: 0.1, ease: "power1.out" }, ">");
    tl.to(
      rippleChars,
      {
        opacity: 0.3,
        filter: "brightness(3)",
        duration: 0.03,
        delay: 1,
        yoyo: true,
        repeat: 3,
        ease: "steps(1)",
        stagger: { amount: 0.12, from: "random" },
      },
      ">"
    );
    tl.to(".p-top-loading-blackout", { opacity: 1, duration: 1, ease: "power1.in" })
      .to(
        ".p-top-loading",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.in",
          onStart: function () {
            document.body.classList.remove("loading");
            setMainMargin();
          },
        },
        "-=0.1"
      )
      .to(".l-header", { opacity: 1, y: 0, duration: 0, ease: "none" }, ">")
      .to(
        ".p-top-loading",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.in",
          onComplete: function () {
            const loading = document.querySelector(".p-top-loading");
            if (loading) loading.style.display = "none";
          },
        },
        "-=0.1"
      );
  }
  function bounceChar(index) {
    if (index >= chars.length) {
      showPortfolioRipple();
      return;
    }
    const char = chars[index];
    if (!char) {
      showPortfolioRipple();
      return;
    }
    char.style.display = "block";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        gsap.fromTo(
          char,
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            z: 0,
            color: "#fff",
            textShadow: "0 0 4px #ff2400, 0 0 8px #ff4500",
          },
          {
            scale: 8,
            opacity: 0,
            filter: "blur(8px)",
            z: 400,
            color: "#ffeb3b",
            textShadow: "0 0 48px #ffeb3b, 0 0 80px #ff6347",
            duration: 0.2,
            ease: "expo.in",
            onComplete: function () {
              gsap.to(char, {
                color: "#ff4444",
                textShadow: "0 0 64px #ff4444, 0 0 120px #ff9999",
                duration: 0.08,
                ease: "power1.out",
                onComplete: function () {
                  char.style.display = "none";
                  bounceChar(index + 1);
                },
              });
            },
          }
        );
      });
    });
  }
  bounceChar(0);
}

// 11. フッター画像アニメ (全ページ共通)
const footerImg = document.querySelector(".l-footer__bg-image img");
if (footerImg) {
  gsap.to(footerImg, {
    filter: "brightness(0.4)",
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });
}

// 12. タイムライン（トリガーなど含む） (全ページ共通)
let lineTriggers = [];
function updateTimelineLines() {
  const ul = document.querySelector(".p-top-profile__timeline");
  if (!ul) return;
  const linesContainer = ul.querySelector(".p-top-profile__timeline-lines");
  const items = ul.querySelectorAll(".p-top-profile__timeline-item");
  if (!linesContainer || !items.length) return;

  lineTriggers.forEach((trigger) => trigger.kill());
  lineTriggers = [];
  linesContainer.innerHTML = "";
  const lines = [];
  items.forEach((item, i) => {
    if (i < items.length - 1) {
      const line = document.createElement("div");
      line.className = "p-top-profile__timeline-line";
      line.style.position = "absolute";
      line.style.left = "50%";
      line.style.transform = "translateX(-50%)";
      line.style.height = "0px";
      linesContainer.appendChild(line);
      lines.push({ line, item, i });
    }
  });
  lines.forEach(({ line, item, i }) => {
    const style = window.getComputedStyle(item);
    const marginEnd = parseFloat(style.marginBlockEnd);
    const trigger = ScrollTrigger.create({
      trigger: item,
      start: () => "bottom 80%",
      end: () => "bottom 50%",
      scrub: true,
      onUpdate: (self) => {
        const rect = item.getBoundingClientRect();
        line.style.top = rect.bottom - ul.getBoundingClientRect().top + "px";
        line.style.height = marginEnd * self.progress + "px";
      },
    });
    lineTriggers.push(trigger);
  });
  ScrollTrigger.refresh();

  // アイテムアニメーション
  items.forEach((item, i) => {
    if (i === items.length - 1) {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 60,
          scale: 0.88,
          filter: "blur(8px)",
          textShadow: "0 12px 32px rgba(0,0,0,0.35)",
          color: "#bfa046",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          textShadow: "0 4px 16px rgba(191,160,70,0.4)",
          color: "#222",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "bottom 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );
    } else {
      gsap.fromTo(
        item,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "bottom 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  });
}
window.addEventListener("load", () => setTimeout(updateTimelineLines, 100));
window.addEventListener("resize", updateTimelineLines);
const ulTimeline = document.querySelector(".p-top-profile__timeline");
if (ulTimeline) {
  const resizeObserver = new ResizeObserver(() => {
    updateTimelineLines();
    ScrollTrigger.refresh();
  });
  resizeObserver.observe(ulTimeline);
}

// 13. shineアニメーション (全ページ共通)
const shine = document.querySelector(".u-shine");
const shineTarget = document.querySelector(".u-shine-target");
if (shine && shineTarget) {
  const targetWidth = shineTarget.offsetWidth;
  gsap.set(shine, { x: 0 });
  gsap.to(shine, {
    x: targetWidth * 1.5,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".p-top-profile__timeline-item.is-current",
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });
}

// 例：フォーカス時にis-focusを付ける場合 (全ページ共通)
document.querySelectorAll(".p-top-contact__data").forEach((el) => {
  el.addEventListener("focusin", (e) => {
    // ラジオボタンの親 .p-top-contact__data--radio は除外する
    if (!el.classList.contains("p-top-contact__data--checkbox")) {
      el.classList.add("is-focus");
    }
  });
  el.addEventListener("focusout", (e) => {
    if (!el.classList.contains("p-top-contact__data--checkbox")) {
      el.classList.remove("is-focus");
    }
  });
});

// Contact Form 7 各種イベント (全ページ共通)
document.addEventListener("DOMContentLoaded", function () {
  var wpcf7Forms = document.querySelectorAll(".wpcf7-form");
  wpcf7Forms.forEach(function (form) {
    form.addEventListener("input", function () {
      var responseOutput = form.querySelector(".wpcf7-response-output");
      if (responseOutput) {
        responseOutput.style.display = "none";
      }
    });
    form.addEventListener("wpcf7submit", function () {
      var responseOutput = form.querySelector(".wpcf7-response-output");
      if (responseOutput) {
        responseOutput.style.display = "";
      }
    });
  });
});

// Contact Form 7 送信成功時のリダイレクト
document.addEventListener(
  "wpcf7mailsent",
  function () {
    window.location.href = "/thanks/";
  },
  false
);

// メールリンクのスパム対策
(function () {
  const user = "info";
  const domain = "web-tera-design.com";
  const mailto = "mailto:" + user + "@" + domain;
  const linkText = "メールで連絡する";

  const mailLink = document.createElement("a");
  mailLink.href = mailto;
  mailLink.target = "_blank";
  mailLink.rel = "nofollow noopener";
  mailLink.className = "c-button c-button--mail";

  const wrapper = document.createElement("span");
  wrapper.className = "c-button__wrapper p-top-contact__button-wrapper";

  const textSpan = document.createElement("span");
  textSpan.className = "c-button__link-text";
  textSpan.textContent = linkText;

  wrapper.appendChild(textSpan);
  mailLink.appendChild(wrapper);

  const mailLinkContainer = document.getElementById("mail-link");
  if (mailLinkContainer) {
    mailLinkContainer.appendChild(mailLink);
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  var user = "info";
  var domain = "web-tera-design.com";
  var email = user + "@" + domain;
  var link = document.getElementById("email-link");
  if (link) {
    link.href = "mailto:" + email;
    link.setAttribute("aria-label", "メールを送る： " + email);
  }
});

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  const contactSection = document.getElementById("contact");
  if (contactSection) {
    ScrollTrigger.create({
      trigger: contactSection,
      start: "top 50%", // 入るタイミングは調整可能
      end: "bottom 20%",
      onEnter: () => {
        const firstData = contactSection.querySelector(".p-top-contact__data");
        if (firstData && !firstData.classList.contains("is-focus")) {
          firstData.classList.add("is-focus");

          // その中の入力系要素(input, textarea, select)にフォーカスを当てる
          const inputElement = firstData.querySelector("input, textarea, select");
          if (inputElement) {
            // 一旦タイマーで遅延させると安定して動くことが多い
            setTimeout(() => {
              inputElement.focus();
            }, 100);
          }
        }
      },
      onLeaveBack: () => {
        const firstData = contactSection.querySelector(".p-top-contact__data");
        if (firstData && firstData.classList.contains("is-focus")) {
          firstData.classList.remove("is-focus");

          // フォーカスを外す（必要なら）
          const inputElement = firstData.querySelector("input, textarea, select");
          if (inputElement) {
            inputElement.blur();
          }
        }
      },
    });
  }
}
