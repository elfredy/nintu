$(document).ready(function () {
  $(".homeSlider").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: false,
    dots: true,
    items: 1,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });
});

$('.homePartners__slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
        
      },
      1000:{
          items:6,
          
      }
  }
})