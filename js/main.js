
window.onload = function() {
  // Check scroll position on page load
  checkScroll();

  // Check scroll position on scroll
  window.addEventListener("scroll", function() {
    checkScroll();
  });
};
function checkScroll() {
  var header = document.querySelector('.header');
  // Check if scroll position is not at the top
  if (window.scrollY > 0) {
    // Add 'scroll' class to the header
    header.classList.add("scroll");
  } else {
    // Remove 'scroll' class from the header
    header.classList.remove("scroll");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var backToTopElement = document.querySelector('[data-back-to-top]');
  var header = this.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY >100) {
      backToTopElement.classList.add('visible');
    }
    else {
      backToTopElement.classList.remove('visible');
    }
    if (window.scrollY > 0){
      header.classList.add('scrolled');
    }
    else{
      header.classList.remove('scrolled');
    }
  });
  backToTopElement.addEventListener('click', function(){
    window.scroll({
      top: 0, 
      left: 0,
      behavior: 'smooth'
     });
  });
  const myHeader = document.querySelector(".header");
  const pageWrapper = document.querySelector(".page-wrapper");

const observerOmni = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === true) {
      myHeader.classList.add("scrolled");
    }
  },
  {
    //In the viewport
    root: null,
    // 1% hero section in viewport
    threshold: 0,
    rootMargin: "-1px",
  }
);
observerOmni.observe(pageWrapper);
 


 
  var accountmenu = document.querySelector('.accountmenu');
  var accountmenuTrig = document.querySelector('.accountmenu-trigger');
  var accountmenuPanel = document.querySelector('.accountmenu-panel');

  accountmenu.addEventListener('mouseenter' , function() {
    accountmenu.classList.add('active');
    accountmenuTrig.classList.add('active');
    accountmenuPanel.classList.add('active');

  });
  accountmenu.addEventListener('mouseleave' , function() {
    accountmenu.classList.remove('active');
    accountmenuTrig.classList.remove('active');
    accountmenuPanel.classList.remove('active');
    
  });
  accountmenu.addEventListener('click' , function() {
    accountmenu.classList.add('active');
    accountmenuTrig.classList.add('active');
    accountmenuPanel.classList.add('active');
    
  });
  document.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BODY') {  
      accountmenu.classList.remove('active');
      accountmenuTrig.classList.remove('active');
      accountmenuPanel.classList.remove('active');
    }
  });


  var menuToggle = document.querySelector('.menu-toggle');
  var mainNav = document.querySelector('.main-navigation');
  menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('is-open');
    header.classList.toggle('menu-open');
    window.scroll({
      top: 0, 
      left: 0
     });
  });
  var element = document.querySelector('.is-open');
  window.addEventListener('resize', (e) => {

    if (window.innerWidth >= 768) {
      mainNav.classList.remove('is-open');
      header.classList.remove('menu-open');
    };
  });
});