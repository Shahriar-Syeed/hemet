


  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavigation", function() { return MainNavigation; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNavigation", function() { return MobileNavigation; });
  var MainNavigation = (function () {
      function MainNavigation() {
          var _this = this;
          this.header = document.querySelector(".header");
          this.dom = document.querySelector(".main-navigation");
          this.navToggle = document.querySelector(".menu-toggle");
          if (window.pageYOffset > 0)
              this.header.classList.add("scrolled");
          window.addEventListener("scroll", function (e) {
              return _this.header.classList.toggle("scrolled", window.pageYOffset > 0);
          });
          document.body.classList.remove(".mainnav-open");
          if (!this.dom)
              return;
          this.navItems = Array.from(this.dom.querySelectorAll("[data-dropdown-item='true']"));
          this.resetActiveItems();
          if ("ontouchstart" in document.documentElement) {
              Array.from(this.dom.querySelectorAll(".main-nav-item"))
                  .forEach(function (item) { return item.removeAttribute("href"); });
              document.addEventListener("touchstart", this.navItemClickHandler.bind(this));
          }
          this.navItems.forEach(function (item) {
              item.addEventListener("mouseenter", _this.navItemMouseEnterHandler.bind(_this));
              item.addEventListener("mouseleave", _this.navItemMouseLeaveHandler.bind(_this));
          });
          this.navToggle.addEventListener("click", function (e) {
              _this.dom.classList.toggle("is-open");
              _this.header.classList.toggle("menu-open");
              document.body.classList.toggle("menu-open");
          });
          window.addEventListener("resize", this.resizeHandler.bind(this)); 
      }
      MainNavigation.prototype.resetActiveItems = function () {
          this.navItems.forEach(function (item) {
              return item.classList.remove("is-active");
          });
      };
      MainNavigation.prototype.resizeHandler = function () {
          if (window.outerWidth > 767)
              this.closeNav();
      };
      MainNavigation.prototype.closeNav = function () {
          this.dom.classList.remove("is-open");
          this.header.classList.remove("menu-open");
          document.body.classList.remove("menu-open");
      };
      MainNavigation.prototype.navItemMouseEnterHandler = function (e) {
          var el = e.target.closest("[data-dropdown-item='true']");
          el.classList.add("is-active");
          document.body.classList.add("mainnav-open");
      };
      MainNavigation.prototype.navItemMouseLeaveHandler = function (e) {
          var el = e.target.closest("[data-dropdown-item='true']");
          el.classList.remove("is-active");
          document.body.classList.remove("mainnav-open");
      };
      MainNavigation.prototype.navItemClickHandler = function (e) {
          if (e.target.closest("[data-dropdown-item='true']")) {
              var el = e.target.closest("[data-dropdown-item='true']");
              this.resetActiveItems();
              el.classList.add("is-active");
              document.body.classList.add("mainnav-open");
          }
          else {
              this.resetActiveItems();
              document.body.classList.remove("mainnav-open");
          }
      };
      return MainNavigation;
  }());
  
  var MobileNavigation = (function () {
      function MobileNavigation() {
          var _this = this;
          this.dom = document.querySelector("nav#mobile-nav");
          this.toggle = document.querySelector(".header-toggle-nav");
          this.headerTop = document.querySelector(".header-top");
          this.closeBtn = this.dom.querySelector(".mm-close");
          this.backLinkText = "terug";
          this.toggle.addEventListener("touchstart", function (e) {
              return _this.dom.style.visibility = "visible";
          });
          window.addEventListener("scroll", function (e) {
              return _this.headerTop.classList.toggle("scrolled", window.pageYOffset > 0);
          });
      }
      return MobileNavigation;
  }());