


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
});