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

  // スクロール連動ナビエフェクト
  const navLinks = document.querySelectorAll(".c-global-nav__link, .p-header__button");
  const pulseAnimations = new Map();

  navLinks.forEach((link) => {
    const sectionId = link.dataset.section;
    const section = document.getElementById(sectionId);

    if (section) {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => animateLink(link),
        onEnterBack: () => animateLink(link),
        onLeave: () => resetLink(link),
        onLeaveBack: () => resetLink(link),
      });
    }
  });

  function animateLink(link) {
    if (pulseAnimations.has(link)) return;
    const tween = gsap.to(link, {
      color: "#ff4500",
      textShadow: "0 0 10px #ff6347, 0 0 20px #ffa07a",
      duration: 0.6,
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

    gsap.to(link, {
      scale: 1,
      color: "#fff",
      textShadow: "0 0 0px transparent",
      duration: 0.3,
      ease: "power1.inOut",
    });
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const startTime = Date.now();
//   window.addEventListener("load", function () {
//     const minTime = 4000; // 最低表示したい時間（ミリ秒）
//     const elapsed = Date.now() - startTime;
//     const remain = minTime - elapsed;

//     setTimeout(
//       function () {
//         const loading = document.getElementById("js-loading");
//         loading.classList.add("is-hide"); // フェードアウト
//         setTimeout(function () {
//           loading.style.display = "none";
//           document.body.classList.remove("loading");
//         }, 600); // フェードアウトの秒数（CSSと合わせる）
//       },
//       remain > 0 ? remain : 0
//     );
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const chars = document.querySelectorAll(".p-top-loading__char");
  const portfolio = document.querySelector(".p-top-loading__portfolio");

  gsap.set(portfolio, { opacity: 0 });

  function bounceChar(index) {
    if (index >= chars.length) {
      gsap.to(portfolio, { opacity: 1, duration: 0.5, delay: 0.05 });
      return;
    }
    const char = chars[index];
    char.style.display = "block";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        let dur = index === 0 ? 0.2 : 0.3; // 最初だけ短く
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
            color: "#ffeb3b", // 拡大中に炎色で発光
            textShadow: "0 0 48px #ffeb3b, 0 0 80px #ff6347",
            duration: 0.22,
            ease: "expo.in",
            onComplete: function () {
              // フラッシュ色へ一瞬だけ切り替え
              gsap.to(char, {
                color: "#ff4444", // フラッシュ色
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
});
