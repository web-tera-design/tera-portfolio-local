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
  const isHome = document.body.classList.contains("home");
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

// ==== Intersection Observerに全面書き換え ここから ====
document.addEventListener("DOMContentLoaded", () => {
  // トップページ判定
  const isHome = document.body.classList.contains("home");
  if (!isHome) return;

  const header = document.querySelector(".l-header");
  const worksSections = document.querySelectorAll(".p-top-works");

  if (!header || worksSections.length === 0) return;

  // ヘッダー色切り替え関数（gsap対応）
  function updateHeaderColors(isActive) {
    if (!header) return;
    header.classList.toggle("js-active", isActive);
    if (typeof gsap !== "undefined") {
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
    } else {
      header.style.background = isActive ? "#fff" : "#222";
      header.style.boxShadow = isActive ? "0 4px 8px rgba(0,0,0,0.2)" : "none";
    }
  }

  // 初期は背景黒
  updateHeaderColors(false);

  // 1度白背景に切り替えたら戻らないようにフラグ管理
  let isWhite = false;

  // ScrollTriggerで監視（Worksセクションの最初の要素のみ）
  const firstWorks = worksSections[0];
  ScrollTrigger.create({
    trigger: firstWorks,
    start: "top top", // Worksセクションの先頭が画面トップに達したら
    onEnter: () => {
      if (!isWhite) {
        isWhite = true;
        updateHeaderColors(true);
      }
    },
    onLeaveBack: () => {
      if (isWhite) {
        isWhite = false;
        updateHeaderColors(false);
      }
    },
  });

  // ----- 以下、ナビゲーションのIntersection Observer部分（既存コード流用可能） -----

  const navLinks = Array.from(document.querySelectorAll(".c-global-nav__link, .l-header__logo-link"));
  const sections = navLinks.map((link) => document.getElementById(link.dataset.section));
  const pulseAnimations = new Map();
  const contactIndex = navLinks.findIndex((link) => link.dataset.section === "contact");

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const i = sections.indexOf(entry.target);
        if (i === -1) return;
        const link = navLinks[i];
        if (entry.isIntersecting) {
          if (!pulseAnimations.has(link) && typeof gsap !== "undefined") {
            // 他のリンクの点滅を停止・リセット
            pulseAnimations.forEach((tween, otherLink) => {
              if (otherLink !== link) {
                tween.kill();
                pulseAnimations.delete(otherLink);
                gsap.to(otherLink, {
                  scale: 1,
                  color: header && header.classList.contains("js-active") ? "#222" : "#fff",
                  textShadow: "0 0 0px transparent",
                  duration: 0.3,
                  ease: "power1.inOut",
                });
              }
            });

            // 新しいリンクの点滅アニメ開始
            const base = 0.33;
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
          } else if (!pulseAnimations.has(link)) {
            pulseAnimations.forEach((_, otherLink) => {
              if (otherLink !== link) {
                gsap.to(otherLink, {
                  scale: 1,
                  color: header && header.classList.contains("js-active") ? "#222" : "#fff",
                  textShadow: "0 0 0px transparent",
                  duration: 0.3,
                  ease: "power1.inOut",
                });
              }
            });
            link.style.color = "#ff4500";
            link.style.textShadow = "0 0 10px #ff6347, 0 0 20px #ffa07a";
            link.style.transform = "scale(1.05)";
          }
        } else {
          if (pulseAnimations.has(link) && typeof gsap !== "undefined") {
            pulseAnimations.get(link).kill();
            pulseAnimations.delete(link);
          }
          if (typeof gsap !== "undefined") {
            gsap.to(link, {
              scale: 1,
              color: header && header.classList.contains("js-active") ? "#222" : "#fff",
              textShadow: "0 0 0px transparent",
              duration: 0.3,
              ease: "power1.inOut",
            });
          } else {
            link.style.transform = "";
            link.style.color = header && header.classList.contains("js-active") ? "#222" : "#fff";
            link.style.textShadow = "";
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    if (section) navObserver.observe(section);
  });
});

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

// 5. ドロワーメニュー処理 (全ページ共通)
document.addEventListener("DOMContentLoaded", () => {
  const drawerIcon = document.querySelector(".c-drawer-icon");
  const drawer = document.querySelector(".c-drawer");
  const drawerOverlay = document.querySelector(".c-drawer-overlay");
  const drawerLinks = drawer.querySelectorAll(".c-drawer__link");
  const header = document.querySelector(".l-header");
  const headerHeight = header ? header.offsetHeight : 0;
  const breakpoint = 900;

  if (!drawerIcon || !drawer || !drawerOverlay) return;

  let isMenuOpen = false;
  let isMenuOpenAtBreakpoint = false;

  function openMenu() {
    drawer.classList.add("js-show");
    drawerIcon.classList.add("js-show");
    drawerOverlay.classList.add("js-show");
    document.body.classList.add("is-fixed");

    drawer.setAttribute("aria-hidden", "false");
    drawerIcon.setAttribute("aria-expanded", "true");

    // 数ミリ秒遅延でフォーカスを移すと安定しやすい
    setTimeout(() => {
      if (drawerLinks.length > 0) drawerLinks[0].focus();
    }, 50);

    isMenuOpen = true;
    isMenuOpenAtBreakpoint = true;
  }

  function closeMenu() {
    drawer.classList.remove("js-show");
    drawerIcon.classList.remove("js-show");
    drawerOverlay.classList.remove("js-show");
    document.body.classList.remove("is-fixed");

    drawer.setAttribute("aria-hidden", "true");
    drawerIcon.setAttribute("aria-expanded", "false");

    drawerIcon.focus();

    isMenuOpen = false;
    isMenuOpenAtBreakpoint = false;
  }

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // ウィンドウ幅変更時のメニュー閉じる処理
  function handleResize() {
    const windowWidth = window.innerWidth;
    if (windowWidth > breakpoint && isMenuOpenAtBreakpoint) {
      closeMenu();
    }
  }

  // メニュー外クリックで閉じる処理
  function handleClickOutside(event) {
    if (isMenuOpen && !drawer.contains(event.target) && !drawerIcon.contains(event.target) && !drawerOverlay.contains(event.target)) {
      closeMenu();
    }
  }

  // スムーズスクロール対応リンク
  function handleLinkClick(event) {
    event.preventDefault();
    closeMenu();
    const targetSelector = this.getAttribute("href");
    const targetElem = document.querySelector(targetSelector);
    if (targetElem) {
      const pos = targetElem.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  }

  // フォーカストラップ（メニュー内でTabのループ制御）
  function trapFocus(e) {
    if (!isMenuOpen) return;
    const focusableElements = Array.from(drawer.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
    if (focusableElements.length === 0) return;

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (e.key === "Tab") {
      if (e.shiftKey) {
        // Shift+Tab
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }

  // イベント登録
  drawerIcon.addEventListener("click", toggleMenu);
  drawerOverlay.addEventListener("click", closeMenu);
  window.addEventListener("resize", handleResize);
  document.addEventListener("click", handleClickOutside);
  drawerLinks.forEach((link) => link.addEventListener("click", handleLinkClick));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      closeMenu();
    }
    trapFocus(e);
  });

  // 初期はメニューをaria-hiddenで隠す
  drawer.setAttribute("aria-hidden", "true");
  drawerIcon.setAttribute("aria-expanded", "false");
});

// 6. モーダル処理 (全ページ共通)
document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll("dialog.p-top-modal__content");
  let lastFocusedElement = null;

  function openModal(modal) {
    lastFocusedElement = document.activeElement;
    modal.showModal?.() || modal.setAttribute("open", "");
    modal.classList.add("js-show");
    document.body.style.overflow = "hidden";

    // フォーカストラップ用に最初のフォーカス可能要素にフォーカスを移す
    const focusableElements = modal.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length) {
      focusableElements[0].focus();
    }
  }

  function closeModal(modal) {
    modal.classList.remove("js-show");
    modal.close();
    document.body.style.overflow = "";
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  }

  // フォーカストラップ処理
  modals.forEach((modal) => {
    modal.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;

      const focusableElements = modal.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), ' + 'input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])');
      const focusable = Array.prototype.filter.call(focusableElements, (el) => el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement);

      if (focusable.length === 0) return;

      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      } else if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    });

    // モーダルクリック：オーバーレイ部分（内側以外）クリックで閉じる
    modal.addEventListener("click", (e) => {
      const inner = modal.querySelector(".p-top-modal__inner");
      const linkBody = modal.querySelector(".p-top-modal__link-body");
      if (inner && linkBody && !inner.contains(e.target) && !linkBody.contains(e.target)) {
        closeModal(modal);
      }
    });

    // 閉じるボタン
    const closeBtn = modal.querySelector(".p-top-modal__close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        closeModal(modal);
      });
    }
  });

  // 開くボタンのイベント登録
  document.querySelectorAll(".p-modal__open-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const dialogId = button.getAttribute("data-dialog");
      const dialog = document.getElementById(dialogId);
      if (dialog) {
        openModal(dialog);
      }
    });
  });

  // ESCキーで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modals.forEach((modal) => {
        if (modal.open) {
          closeModal(modal);
        }
      });
    }
  });
});

// 7. 動画クリック再生/停止 (全ページ共通)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-click-video").forEach((video) => {
    video.addEventListener("click", () => {
      const wrapper = video.closest(".c-video");
      if (!wrapper) return;
      if (video.paused) {
        video.play();
        wrapper.classList.remove("is-paused");
      } else {
        video.pause();
        wrapper.classList.add("is-paused");
      }
    });
  });
});

// 9. ナビhoverアニメ
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".l-header__logo-link, .c-global-nav__link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      if (typeof gsap !== "undefined") gsap.to(link, { scale: 1.1, duration: 0.3 });
      else link.style.transform = "scale(1.1)";
    });
    link.addEventListener("mouseleave", () => {
      if (typeof gsap !== "undefined") gsap.to(link, { scale: 1, duration: 0.3 });
      else link.style.transform = "";
    });
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

  // モバイル判定（簡易）
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

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

    // 全体ズームイン＋ぼかし除去（必ず残す）
    tl.to(portfolio, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "expo.out",
    });

    // ここでモバイルならスキップ
    if (!isMobile) {
      tl.to(
        rippleChars,
        {
          color: "#fff", // 色を変えないならこの行は不要
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
          // stagger: なし
        },
        ">"
      );
    }

    // 明度を元に戻す
    tl.to(rippleChars, { filter: "brightness(1)", duration: 0.1, ease: "power1.out" }, ">");

    // 黒幕フェードイン
    tl.to(".p-top-loading-blackout", { opacity: 1, duration: 1, ease: "power1.in" })

      // ローディング全体フェードアウト開始
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

      // ヘッダーを即座に表示
      .to(".l-header", { opacity: 1, y: 0, duration: 0, ease: "none" }, ">")

      // 最後にローディング要素を完全に非表示
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

let lineTriggers = [];

function updateTimelineLines() {
  const ul = document.querySelector(".p-top-profile__timeline");
  if (!ul) return;
  const linesContainer = ul.querySelector(".p-top-profile__timeline-lines");
  const items = ul.querySelectorAll(".p-top-profile__timeline-item");
  if (!linesContainer || !items.length) return;

  // 既存のScrollTriggerを破棄
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
      start: "bottom 80%",
      end: "bottom 50%",
      scrub: true,
      onUpdate: (self) => {
        const ulRect = ul.getBoundingClientRect(); // ←必須
        const rect = item.getBoundingClientRect();
        line.style.top = rect.bottom - ulRect.top + "px";
        line.style.height = marginEnd * self.progress + "px";
      },
    });
    lineTriggers.push(trigger);
  });

  items.forEach((item, i) => {
    if (i === 0) {
      // 最初のitemは常に表示状態にしておく
      gsap.set(item, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        textShadow: "none",
        color: "#222",
      });
    } else if (i === items.length - 1) {
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

  ScrollTrigger.refresh();
}

window.addEventListener("load", () => setTimeout(updateTimelineLines, 1000));
window.addEventListener("resize", () => {
  updateTimelineLines();
  ScrollTrigger.refresh();
});

const ulTimeline = document.querySelector(".p-top-profile__timeline");
if (ulTimeline) {
  const resizeObserver = new ResizeObserver(() => {
    updateTimelineLines();
    ScrollTrigger.refresh();
  });
  resizeObserver.observe(ulTimeline);
}

const shine = document.querySelector(".u-shine");
const shineTarget = document.querySelector(".u-shine-target");
if (shine && shineTarget && typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
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

// Contact section フォーカス (observerでなくscroll判定で。必要に応じてobserver化可)
const contactSection = document.getElementById("contact");
if (contactSection) {
  window.addEventListener("scroll", () => {
    const rect = contactSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.2) {
      const firstData = contactSection.querySelector(".p-top-contact__data");
      if (firstData && !firstData.classList.contains("is-focus")) {
        firstData.classList.add("is-focus");
        const inputElement = firstData.querySelector("input, textarea, select");
        if (inputElement)
          setTimeout(() => {
            inputElement.focus();
          }, 100);
      }
    } else {
      const firstData = contactSection.querySelector(".p-top-contact__data");
      if (firstData && firstData.classList.contains("is-focus")) {
        firstData.classList.remove("is-focus");
        const inputElement = firstData.querySelector("input, textarea, select");
        if (inputElement) inputElement.blur();
      }
    }
  });
}

const modals = document.querySelectorAll("dialog.p-top-modal__content");

modals.forEach((modal) => {
  const modalInner = modal.querySelector(".p-top-modal__inner");
  const btn = modal.querySelector(".p-top-modal__close-btn");
  if (!modalInner || !btn) return;

  function updatePosition() {
    const rect = modalInner.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return;

    btn.style.position = "fixed";
    btn.style.top = rect.top + 10 + "px";
    btn.style.left = rect.right - 20 - btn.offsetWidth + "px";
    btn.style.opacity = "1";
  }

  // モーダルが開いたら位置を更新
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "open") {
        if (modal.hasAttribute("open")) {
          updatePosition();
        }
      }
    });
  });
  observer.observe(modal, { attributes: true });

  // リサイズ・スクロールで位置を再計算
  window.addEventListener("resize", updatePosition);
  window.addEventListener("scroll", updatePosition);
});

// ページ読み込み時にまとめて更新（必要に応じて）
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll("dialog.p-top-modal__content").forEach((modal) => {
      const modalInner = modal.querySelector(".p-top-modal__inner");
      const btn = modal.querySelector(".p-top-modal__close-btn");
      if (!modalInner || !btn) return;

      const rect = modalInner.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) return;

      btn.style.position = "fixed";
      btn.style.top = rect.top + 10 + "px";
      btn.style.left = rect.right - 20 - btn.offsetWidth + "px";
      btn.style.opacity = "1";
    });
  }, 100);
});

document.addEventListener("DOMContentLoaded", () => {
  // トップページなら
  if (location.pathname === "/" || location.pathname === "/index.php") {
    document.querySelectorAll(".l-footer__link").forEach((link) => {
      try {
        const url = new URL(link.href);
        if (url.origin === location.origin && url.hash) {
          // hrefを書き換えて「#ハッシュ」のみをセット
          link.href = url.hash;
        }
      } catch (e) {
        // URL解析失敗時は無視
        console.warn("Invalid URL in footer link:", link.href);
      }
    });
  }
});

document.querySelectorAll(".p-top-works__image").forEach((container) => {
  const video = container.querySelector("video");
  const placeholder = container.querySelector("img.video-placeholder");

  if (!video || !placeholder) return;

  // 動画が再生可能になるイベント
  video.addEventListener("canplay", () => {
    // 画像を非表示にして動画表示
    placeholder.style.display = "none";
    video.style.display = "block";
    // 動画の再生開始（autoplay対応されない場合に備えて）
    video.play().catch(() => {
      // 自動再生が抑制された場合のフォールバック処理（不要なら省略）
    });
  });
});
