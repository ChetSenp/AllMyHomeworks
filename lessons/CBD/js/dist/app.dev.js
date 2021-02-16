"use strict";

$('.products_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500
});
$('.comment_slick_slider').slick({
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1
});
$('.accordion-item .heading').on('click', function (e) {
  e.preventDefault(); // Add the correct active class

  if ($(this).closest('.accordion-item').hasClass('active')) {
    // Remove active classes
    $('.accordion-item').removeClass('active');
  } else {
    // Remove active classes
    $('.accordion-item').removeClass('active'); // Add the active class

    $(this).closest('.accordion-item').addClass('active');
  } // Show the content


  var $content = $(this).next();
  $content.slideToggle(100);
  $('.accordion-item .content').not($content).slideUp('fast');
});