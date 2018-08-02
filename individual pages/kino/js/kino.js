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

    // $('.modal-container').modal({
    //     speed: 500
    // });


    $('[data-img1]').click(function() {
        $('.modal-gallery').addClass('active');
        $('#img1').addClass('active');
    });
    $('[data-img2]').click(function() {
        $('.modal-gallery').addClass('active');
        $('#img2').addClass('active');
    });
    $('[data-img3]').click(function() {
        $('.modal-gallery').addClass('active');
        $('#img3').addClass('active');
    });
    $('[data-img4]').click(function() {
        $('.modal-gallery').addClass('active');
        $('#img4').addClass('active');
    });
    $('[data-close]').click(function() {
        $('.modal-gallery').removeClass('active');
        $('.modal-image').removeClass('active');
    });




    $('.slider').slick({
        dots: true,
        vertical: true,
        verticalSwiping: true,
        // appendDots: $(.slide),
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 1
        //         }
        //     },
        //     {
        //         breakpoint: 766,
        //         settings: {
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });
});