$(document).ready(function () {
    var menu_link = $('.menu-link');
    var link_active = $('.menu-link_active');
    var menu = $('.menu');


    menu_link.click(function () {
        menu_link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
    });
    link_active.click(function () {
        menu_link.removeClass('menu-link_active');
    });

    $('.slider-photo').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div style="transform: rotate(-180deg)" class="arrow"><img src="img/icons/right-arrow.png"></div>',
        nextArrow: '<div class="arrow"><img src="img/icons/right-arrow.png"></div>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 766,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });

    $('.slider-video').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div style="transform: rotate(-180deg)" class="arrow"><img src="img/icons/right-arrow.png"></div>',
        nextArrow: '<div class="arrow"><img src="img/icons/right-arrow.png"></div>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 766,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });

    $('.add-btn').click(function() {
      $('.form').addClass('active');
    });
    $('.btn-box').click(function() {
      $('.form').addClass('active');
    });
    $('.close-btn').click(function() {
      $('.form').removeClass('active');
    });
});