 var mySwiper = new Swiper('.swiper-container', {
   // Optional parameters
   direction: 'vertical',
   loop: true,
   speed: 700,
   simulateTouch: true,
   mousewheel: {
     invert: true,
   },
   sensitivity: 1,
   invert: true,

   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   }
 })