// レスポンシブの375px未満のviewport画面幅を固定;
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value = window.outerWidth > 375 ? "width=device-width,initial-scale=1" : "width=375";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

// ページ内リンクを踏むとスムーススクロール
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start", // 上端に合わせる
      });
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector(".l-header"); // 対象となる要素
const nextContent = document.querySelectorAll(".p-top-works"); // 対象となる要素

nextContent.forEach((item) => {
  ScrollTrigger.create({
    trigger: item, // 発火させるタイミングを測る要素
    start: "top top", // 発火させるタイミング1
    onEnter: () => {
      // スクロール位置が「start」を超えて前方にスクロールしたときに発火
      header.classList.add("js-active");
    },
    onLeaveBack: () => {
      // スクロール位置が「start」を超えて後方にスクロールされたときに発火
      header.classList.remove("js-active");
    },
  });
});

// l-mainのmargin-block-startをl-headerの高さに合わせる
function setMainMargin() {
  const header = document.querySelector(".l-header");
  const main = document.querySelector(".l-main");
  if (header && main) {
    main.style.marginBlockStart = header.offsetHeight + "px";
  }
}
window.addEventListener("DOMContentLoaded", setMainMargin);
window.addEventListener("resize", setMainMargin);

document.addEventListener("DOMContentLoaded", () => {
  // 要素取得
  const drawerIcon = document.querySelector(".c-drawer-icon");
  const drawer = document.querySelector(".c-drawer");
  const drawerOverlay = document.querySelector(".c-drawer-overlay");
  const drawerNavItem = document.querySelectorAll('.c-drawer__content a[href^="#"]');
  const header = document.querySelector(".l-header");
  const headerHeight = header ? header.offsetHeight : 0;
  const breakpoint = 900;
  let isMenuOpen = false;
  let isMenuOpenAtBreakpoint = false;

  // メニューを開く
  const openMenu = () => {
    if (!drawer.classList.contains("js-show")) {
      drawer.classList.add("js-show");
      drawerIcon.classList.add("js-show");
      drawerOverlay.classList.add("js-show");
      document.body.classList.add("is-fixed");
      isMenuOpen = true;
    }
  };

  // メニューを閉じる
  const closeMenu = () => {
    if (drawer.classList.contains("js-show")) {
      drawer.classList.remove("js-show");
      drawerIcon.classList.remove("js-show");
      drawerOverlay.classList.remove("js-show");
      document.body.classList.remove("is-fixed");
      isMenuOpen = false;
    }
  };

  // メニューの開閉を切り替え
  const toggleMenu = () => {
    if (!drawer.classList.contains("js-show")) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  // ウィンドウリサイズ時の処理
  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > breakpoint && isMenuOpenAtBreakpoint) {
      closeMenu();
    } else if (windowWidth <= breakpoint && drawer.classList.contains("js-show")) {
      isMenuOpenAtBreakpoint = true;
    }
  };

  // ドロワー外クリックでメニューを閉じる
  const clickOuter = (event) => {
    // drawerIcon（ハンバーガーアイコン）やdrawerOverlay（オーバーレイ）自体は除外
    if (drawer.classList.contains("js-show") && !drawer.contains(event.target) && !drawerIcon.contains(event.target) && !drawerOverlay.contains(event.target) && isMenuOpen) {
      closeMenu();
    } else if (drawer.classList.contains("js-show") && !drawer.contains(event.target)) {
      isMenuOpen = true;
    }
  };

  // スムーススクロール
  const linkScroll = (target) => {
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // イベント登録
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

const dialogs = document.querySelectorAll("dialog");
const open = document.querySelectorAll(".p-modal__open-btn");
const close = document.querySelectorAll(".p-modal__close-btn");

// モーダルを開く
open.forEach((button) => {
  button.addEventListener("click", () => {
    const dialogId = button.getAttribute("data-dialog");
    const dialog = document.getElementById(dialogId);
    dialog.showModal();
    dialog.classList.add("js-show");
    document.body.style.overflow = "hidden"; // 背景スクロール防止
  });
});

// 閉じるボタンでモーダルを閉じる
document.querySelectorAll(".p-top-modal__close-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = button.closest("dialog");
    if (dialog) {
      dialog.classList.remove("js-show");
      dialog.close();
      document.body.style.overflow = ""; // スクロール復活
    }
  });
});

// モーダルの背景クリックで閉じる
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (e) => {
    const inner = dialog.querySelector(".p-top-modal__inner");
    const linkBody = dialog.querySelector(".p-top-modal__link-body");
    if (!inner.contains(e.target) && !linkBody.contains(e.target)) {
      dialog.classList.remove("js-show");
      dialog.close();
      document.body.style.overflow = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".js-click-video");

  videos.forEach((video) => {
    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        video.classList.remove("is-paused");
      } else {
        video.pause();
        video.classList.add("is-paused");
      }
    });
  });
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".p-top-mv__label, .p-top-mv__title, .p-top-mv__lead");

  // 文字分割して span を追加（.is-flame & .is-glowIn 両対応）
  targets.forEach((el) => {
    const chars = el.textContent.trim().split("");
    el.innerHTML = chars.map((char) => `<span class="is-flame is-glowIn">${char}</span>`).join("");
    el.style.visibility = "visible"; // 初期非表示を解除
  });

  // 炎っぽい文字ランダム点滅（.p-top-mv__leadだけ）
  const lead = document.querySelector(".p-top-mv__lead");
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
    const base = 0.1; // Contactの速さ
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

    const header = document.querySelector(".l-header");
    const isActive = header && header.classList.contains("js-active");

    gsap.to(link, {
      scale: 1,
      color: isActive ? "#222" : "#fff", // js-active時は黒、通常は白
      textShadow: "0 0 0px transparent",
      duration: 0.3,
      ease: "power1.inOut",
    });
  }
  function updateHeaderColors() {
    const header = document.querySelector(".l-header");
    const isActive = header && header.classList.contains("js-active");

    // 背景色
    gsap.to(header, {
      backgroundColor: isActive ? "#fff" : "#222", // isActiveなら白、通常は#222
      boxShadow: isActive
        ? "0 4px 8px rgba(0,0,0,0.2)" // 例: アクティブ時に影を出す
        : "none",
      duration: 0.3,
      overwrite: "auto",
    });

    // ロゴ
    gsap.to(".l-header__logo-link", {
      color: isActive ? "#222" : "#fff",
      duration: 0.3,
      overwrite: "auto",
    });

    // グローバルナビ
    document.querySelectorAll(".c-global-nav__link").forEach((link) => {
      gsap.to(link, {
        color: isActive ? "#222" : "#fff",
        duration: 0.3,
        overwrite: "auto",
      });
    });

    // ボタン
    document.querySelectorAll(".p-header__button").forEach((btn) => {
      gsap.to(btn, {
        color: isActive ? "#222" : "#fff",
        duration: 0.3,
        overwrite: "auto",
      });
    });

    // ドロワーアイコンバー（追加）
    document.querySelectorAll(".c-drawer-icon__bar").forEach((bar) => {
      gsap.to(bar, {
        backgroundColor: isActive ? "#222" : "#fff",
        duration: 0.3,
        overwrite: "auto",
      });
    });
  }
  // 例: ScrollTriggerでヘッダーの状態を切り替える
  ScrollTrigger.create({
    trigger: ".p-top-mv",
    start: "bottom top",
    onEnter: () => {
      document.querySelector(".l-header").classList.add("js-active");
      updateHeaderColors();
    },
    onLeaveBack: () => {
      document.querySelector(".l-header").classList.remove("js-active");
      updateHeaderColors();
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".l-header__logo-link, .c-global-nav__link");
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { scale: 1.1, duration: 0.3 });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1, duration: 0.3 });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("loadingPlayed")) {
    // 初回のみローディング演出
    startLoadingAnimation();
    sessionStorage.setItem("loadingPlayed", "1");
  } else {
    // 2回目以降はローディングをスキップ
    document.body.classList.remove("loading");
    document.querySelector(".p-top-loading").style.display = "none";
    document.querySelector(".l-header").style.opacity = 1;
    document.querySelector(".l-header").style.transform = "translateY(0)";
    setMainMargin();
  }
});

function startLoadingAnimation() {
  // ここに今までのローディング演出の処理を入れる
  const chars = document.querySelectorAll(".p-top-loading__char");
  const portfolio = document.querySelector(".p-top-loading__portfolio");

  gsap.set(portfolio, { opacity: 0 });

  function showPortfolioRipple() {
    if (!portfolio.querySelector(".portfolio-char")) {
      const text = portfolio.textContent;
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
        filter: "brightness(3)", // 一瞬だけ明度を上げる
        duration: 0.12, // 短くして瞬間的に
        ease: "power1.in",
        stagger: {
          amount: 0.08,
          from: "random",
        },
      },
      ">"
    );
    // 直後にbrightnessを戻す
    tl.to(
      rippleChars,
      {
        filter: "brightness(1)",
        duration: 0.1,
        ease: "power1.out",
      },
      ">"
    );

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
        stagger: {
          amount: 0.12,
          from: "random",
        },
      },
      ">"
    );

    tl.to(".p-top-loading-blackout", {
      opacity: 1,
      duration: 1,
      ease: "power1.in",
    })
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
      .to(
        ".l-header",
        {
          opacity: 1,
          y: 0,
          duration: 0,
          ease: "none",
        },
        ">"
      )
      .to(
        ".p-top-loading",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.in",
          onComplete: function () {
            document.querySelector(".p-top-loading").style.display = "none";
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

gsap.to(document.querySelector(".l-footer__bg-image img"), {
  filter: "brightness(0.4)",
  duration: 1,
  yoyo: true,
  repeat: -1, // 無限ループ
  ease: "power1.inOut",
});

// 1. 要素取得
const ul = document.querySelector(".p-top-profile__timeline");
const linesContainer = ul.querySelector(".p-top-profile__timeline-lines");
const items = ul.querySelectorAll(".p-top-profile__timeline-item");

let lineTriggers = [];

window.addEventListener("load", () => {
  setTimeout(() => {
    updateTimelineLines();
  }, 100);
});

const resizeObserver = new ResizeObserver(() => {
  updateTimelineLines();
  ScrollTrigger.refresh();
});

window.addEventListener("resize", updateTimelineLines);
resizeObserver.observe(ul);

function updateTimelineLines() {
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
      // 初期は0px
      line.style.height = "0px";
      linesContainer.appendChild(line);
      lines.push({ line, item, i });
    }
  });

  lines.forEach(({ line, item, i }) => {
    // liのmargin-block-end値を取得
    const style = window.getComputedStyle(item);
    const marginEnd = parseFloat(style.marginBlockEnd);

    const trigger = ScrollTrigger.create({
      trigger: item,
      start: () => "bottom 80%",
      end: () => "bottom 60%",
      scrub: true,
      // markers: true,
      onUpdate: (self) => {
        const rect = item.getBoundingClientRect();
        line.style.top = rect.bottom - ul.getBoundingClientRect().top + "px";
        line.style.height = marginEnd * self.progress + "px";
      },
    });
    lineTriggers.push(trigger);
  });

  ScrollTrigger.refresh();
}

// 5. アイテムアニメーション（これはそのままでOK）
items.forEach((item, i) => {
  if (i === items.length - 1) {
    // 最後のliだけ「威厳ある」出現
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
          // markers: true,
        },
      }
    );
  } else {
    // 通常のliの出現
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
          // markers: true,
        },
      }
    );
  }
});

// 6. shineアニメーション（これもそのままでOK）
const shine = document.querySelector(".u-shine");
const shineTarget = document.querySelector(".u-shine-target");
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
    // markers: true,
  },
});
