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

const lead = document.querySelector(".p-top-mv__lead");
const text = lead.textContent.trim().split("");

lead.innerHTML = text.map((char) => `<span class="is-glowIn">${char}</span>`).join("");

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".p-top-mv__label, .p-top-mv__title, .p-top-mv__lead");

  targets.forEach((el) => {
    const chars = el.textContent.trim().split("");

    // アニメーション用のクラス付け
    el.innerHTML = chars.map((char) => `<span class="is-glowIn">${char}</span>`).join("");
  });

  // ブラウザの次の描画タイミングで表示
  requestAnimationFrame(() => {
    targets.forEach((el) => {
      el.style.visibility = "visible";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".p-top-mv__label, .p-top-mv__title, .p-top-mv__lead");

  targets.forEach((el) => {
    const chars = el.textContent.trim().split("");
    el.innerHTML = chars.map((char) => `<span class="is-flame">${char}</span>`).join("");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lead = document.querySelector(".p-top-mv__lead");
  const chars = lead.querySelectorAll(".is-flame");

  setInterval(() => {
    const indexes = Array.from({ length: chars.length }, (_, i) => i);
    const pick = indexes.sort(() => 0.5 - Math.random()).slice(0, 2);

    pick.forEach((i) => {
      const el = chars[i];
      el.classList.add("is-flash");

      setTimeout(() => {
        el.classList.remove("is-flash");
      }, 100); // 点滅時間
    });
  }, 100); // 実行間隔
});

gsap.registerPlugin(ScrollTrigger);

const navLinks = document.querySelectorAll(".c-global-nav__link, .p-header__button");
const pulseAnimations = new Map(); // 各リンクに対応するアニメーションを管理

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
  if (pulseAnimations.has(link)) return; // すでにアニメしてたらスキップ

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
    tween.kill(); // 鼓動アニメ停止
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
