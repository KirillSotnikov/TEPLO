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


});