'use strict';

$('document').ready(function () {
   var mySwiper = new Swiper('.swiper-container', {

      direction: 'vertical',
      loop: true,
      speed: 700,
      simulateTouch: true,
      mousewheel: {
         invert: true
      },
      sensitivity: 1,
      invert: true,

      pagination: {
         el: '.swiper-pagination',
         type: 'bullets'
      }
   });

   var menuItem = $('.header__nav-link');

   $(menuItem).click(function () {

      $(menuItem).removeClass('header__nav-link_active');
      $(this).addClass('header__nav-link_active');

      var num = $(this).attr('data-num');
      mySwiper.slideTo(num, 1000, false);

      exchangeText();
   });

   var actSlide = void 0;

   mySwiper.on('slideChange', function () {

      actSlide = mySwiper.activeIndex;

      $(menuItem).removeClass('header__nav-link_active');
      $('.header__nav-link[data-num=' + actSlide + ']').addClass('header__nav-link_active');

      exchangeText();

      if (actSlide == 0) {
         $('.nav .header__nav-link:last').addClass('header__nav-link_active');
      } else if (actSlide == 7) {
         $('.nav .header__nav-link:first').addClass('header__nav-link_active');
      }
   });

   function exchangeText() {
      if ($('.header__nav-link_active').attr('data-num') == 6 || actSlide == 0) {
         $('.footer__text').text('scroll up');
      } else {
         $('.footer__text').text('scroll down');
      }
   }
});