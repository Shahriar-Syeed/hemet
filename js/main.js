


"use strict";

class MainNavigation {
  constructor() {
    this.header = document.querySelector(".header");
    this.dom = document.querySelector(".main-navigation");
    this.navToggle = document.querySelector(".menu-toggle");

    if (window.pageYOffset > 0) {
      this.header.classList.add("scrolled");
    }

    window.addEventListener("scroll", (e) => {
      this.header.classList.toggle("scrolled", window.pageYOffset > 0);
    });

    document.body.classList.remove(".mainnav-open");

    if (!this.dom) return;

    this.navItems = Array.from(this.dom.querySelectorAll("[data-dropdown-item='true']"));
    this.resetActiveItems();

    if ("ontouchstart" in document.documentElement) {
      Array.from(this.dom.querySelectorAll(".main-nav-item")).forEach((item) => {
        item.removeAttribute("href");
      });

      document.addEventListener("touchstart", this.navItemClickHandler.bind(this));
    }

    this.navItems.forEach((item) => {
      item.addEventListener("mouseenter", this.navItemMouseEnterHandler.bind(this));
      item.addEventListener("mouseleave", this.navItemMouseLeaveHandler.bind(this));
    });

    this.navToggle.addEventListener("click", (e) => {
      this.dom.classList.toggle("is-open");
      this.header.classList.toggle("menu-open");
      document.body.classList.toggle("menu-open");
    });

    window.addEventListener("resize", this.resizeHandler.bind(this));
  }

  resetActiveItems() {
    this.navItems.forEach((item) => {
      item.classList.remove("is-active");
    });
  }

  resizeHandler() {
    if (window.outerWidth > 767) this.closeNav();
  }

  closeNav() {
    this.dom.classList.remove("is-open");
    this.header.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
  }

  navItemMouseEnterHandler(e) {
    var el = e.target.closest("[data-dropdown-item='true']");
    el.classList.add("is-active");
    document.body.classList.add("mainnav-open");
  }

  navItemMouseLeaveHandler(e) {
    var el = e.target.closest("[data-dropdown-item='true']");
    el.classList.remove("is-active");
    document.body.classList.remove("mainnav-open");
  }

  navItemClickHandler(e) {
    if (e.target.closest("[data-dropdown-item='true']")) {
      var el = e.target.closest("[data-dropdown-item='true']");
      this.resetActiveItems();
      el.classList.add("is-active");
      document.body.classList.add("mainnav-open");
    } else {
      this.resetActiveItems();
      document.body.classList.remove("mainnav-open");
    }
  }
}

  

//   to to[p buttn]
// MobileNavigation
var MobileNavigation = function () {
    var _this = this;
    this.dom = document.querySelector("nav#mobile-nav");
    this.toggle = document.querySelector(".header-toggle-nav");
    this.headerTop = document.querySelector(".header-top");
    this.closeBtn = this.dom.querySelector(".mm-close");
    this.backLinkText = "terug";

    this.toggle.addEventListener("touchstart", function (e) {
        _this.dom.style.visibility = "visible";
    });

    window.addEventListener("scroll", function (e) {
        if (_this.headerTop) {
            _this.headerTop.classList.toggle("scrolled", window.pageYOffset > 0);
        }
    });
};

// ScrollToElement
function ScrollToElement() {
    var _this = this;
    Array.from(document.querySelectorAll("a[href^='#']")).forEach(function (el) {
        el.addEventListener("click", _this.scrollTo.bind(_this));
    });
}

ScrollToElement.prototype.scrollTo = function (e) {
    e.preventDefault();
    var target = e.target.closest("a");
    var id = target.href.split("#")[1];
    var el = document.getElementById(id);

    if (el) {
        window.scrollTo({ top: el.offsetTop - 81, behavior: "smooth" });
    }
};

// BackToTop
function BackToTop() {
    var _this = this;
    var button = document.querySelector(".back-to-top");
    var quotation = document.querySelector(".fab-quotation");

    window.addEventListener("scroll", function () {
        if (button) {
            button.classList.toggle("visible", window.pageYOffset > 500);
        }
        if (quotation) {
            quotation.classList.toggle("offset-bottom", window.pageYOffset > 500);
        }
    });

    if (button) {
        button.addEventListener("click", _this.scrollToTop.bind(_this));
    }
}

BackToTop.prototype.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

//   const sectionHeroEl = document.querySelector(".section-grey");

// const observerOmni = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);
//     if (ent.isIntersecting === false) {
//       document.querySelector(".back-to-top").classList.add("visible");
//     } else {
//       document.querySelector(".back-to-top").classList.remove("visible");
//     }
//   },
//   {
//     //In the viewport
//     root: null,
//     // 1% hero section in viewport
//     threshold: 0,
//     rootMargin: "-500px",
//   }
// );