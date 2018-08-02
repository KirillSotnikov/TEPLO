$(document).ready(function() {
    // INDEX.html

    var menuLink = $('.menu-link');
    var linkActive = $('.menu-link_active');
    var menu = $('.menu');
    var menuLinkInner = $('.menu ul li');


    menuLink.click(function() {
        menuLink.toggleClass('menu-link_active menu-link-fixed');
        menu.toggleClass('menu_active');
    });
    linkActive.click(function() {
        menuLink.removeClass('menu-link_active');
    });
    menuLinkInner.click(function() {
        menu.toggleClass('menu_active');
        menuLink.toggleClass('menu-link_active menu-link-fixed');
    });
    $('.footer_top-arrow').click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow")
    });

    var schedule = $('.schedule');

    schedule.click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#raspisanie-popup').fadeOut();
        } else {
            $(this).addClass('active');
            $('#raspisanie-popup').fadeIn();
        }
    });

    $('.slider-team').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<div class="arrow" style="transform:rotate(-180deg)"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="47px"> <image opacity="0.569" x="0px" y="0px" width="25px" height="47px" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAvCAQAAAC8w6lYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBwIOOiScRRMQAAAB3ElEQVRIx5XRTUuUURgG4CtnIgsnoyQ1kz5sUyjJiFTUUtqES4cEIYqgPzOJCK3b9StaWzl+zaKgVm1qU1lRaWlai/eMM+N8vMezOu8cLp77fibjIGdGwc6hA4AHrkI8eWgEvM9GgkeugHVPOiIjVUDRVkyw0MG6ol+kT7kXwM8EkNZlWj5MmE9A2sbuG62NlJyOCPCtFrQj0wFsmK0FrUnB9QCKvtc/Ne9y1w3w1bz1/Y/NNjZjPEx47Efjc2Owwh4oNgONpOAm2FT0pXnNejIVwHZrUN9l0q0wYd5nLU91Y1N7oNgOVINVwJ80UCGVSLvm0kBC7pgIYNbHNEDWhNvgk6c+pAM6TIbbszhARtYQGPDWZhx5p8s5dLumbCOG8Ea3QWSNW/Y7hvBar34clrdkK4ZQDuiIvOX2KLN3K4d4nfLK7eJlau6VeJ3GlFpPytR9RcXL7Psu6wuTWqJMwy9rBp0OaMFODGFFvz50GrFiO4awFuLljDX+T80Jawb04qgxL/2NIay6qCfEe2U3hlAKqMuwxSpqRyg5ow85w1Yri2hPWHVBD3JGvUgmpRGWQrxjhpNO6aTaKZcsIoZQctmJ0GkhjrDokpM47nws+WfRkFPoiSVJvLO6PP8P8AKAW5NBfZkAAAAASUVORK5CYII=" /> </svg></div>',
        prevArrow: '<div class="arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="47px"> <image opacity="0.569" x="0px" y="0px" width="25px" height="47px" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAvCAQAAAC8w6lYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBwIOOiScRRMQAAAB3ElEQVRIx5XRTUuUURgG4CtnIgsnoyQ1kz5sUyjJiFTUUtqES4cEIYqgPzOJCK3b9StaWzl+zaKgVm1qU1lRaWlai/eMM+N8vMezOu8cLp77fibjIGdGwc6hA4AHrkI8eWgEvM9GgkeugHVPOiIjVUDRVkyw0MG6ol+kT7kXwM8EkNZlWj5MmE9A2sbuG62NlJyOCPCtFrQj0wFsmK0FrUnB9QCKvtc/Ne9y1w3w1bz1/Y/NNjZjPEx47Efjc2Owwh4oNgONpOAm2FT0pXnNejIVwHZrUN9l0q0wYd5nLU91Y1N7oNgOVINVwJ80UCGVSLvm0kBC7pgIYNbHNEDWhNvgk6c+pAM6TIbbszhARtYQGPDWZhx5p8s5dLumbCOG8Ea3QWSNW/Y7hvBar34clrdkK4ZQDuiIvOX2KLN3K4d4nfLK7eJlau6VeJ3GlFpPytR9RcXL7Psu6wuTWqJMwy9rBp0OaMFODGFFvz50GrFiO4awFuLljDX+T80Jawb04qgxL/2NIay6qCfEe2U3hlAKqMuwxSpqRyg5ow85w1Yri2hPWHVBD3JGvUgmpRGWQrxjhpNO6aTaKZcsIoZQctmJ0GkhjrDokpM47nws+WfRkFPoiSVJvLO6PP8P8AKAW5NBfZkAAAAASUVORK5CYII=" /> </svg></div>',
        responsive: [{
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

    $('[data-open-courses]').click(function() {
        $('.our-courses .courses-more').addClass('active');
        $('.our-courses .courses_arrow').addClass('active');
    });
    $('[data-open-portfolio]').click(function() {
        $('.portfolio .portfolio-more').addClass('active');
        $('.portfolio .courses_arrow').addClass('active');
    });
    $('[data-open-text]').click(function() {
        $('.bg-studio .studio-text').addClass('active');
        $('.bg-studio .studio_arrow').addClass('active');
    });

    // INDEX.html END

    // COURSES
    $('.slider-photo').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div style="transform: rotate(-180deg)" class="arrow"><img src="img/icons/right-arrow.png"></div>',
        nextArrow: '<div class="arrow"><img src="img/icons/right-arrow.png"></div>',
        responsive: [{
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
        responsive: [{
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

    // COURSES END

    // KINO

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
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // KINO END

    function initMap() {
        var element = document.getElementById('map');

        var options = {
            zoom: 17,
            center: { lat: 46.472478, lng: 30.738517 }
        };

        var InfoWindow = new google.maps.InfoWindow({
            content: '<h2 class="gol_adres">Наш адрес:</h2>' +
                      + '<p class="adres">г.Одесса ул.Большая Арнаутская, 59 <br>' +
                      + 'работаем по будням с 10:00 до 19:00</p>' +
                      + '<p class="namber">Позвонть 063 343 4370</p>'
        });
        
        if (document.documentElement.clientWidth > 768) {
            InfoWindow = null;
            options.center.lat = 46.472585;
            options.center.lng = 30.734644;
        }

        var myMap = new google.maps.Map(element, options);

        var marker = new google.maps.Marker({
            position: { lat: 46.472478, lng: 30.738517 },
            map: myMap
        });

        marker.addListener('click', function() {
            InfoWindow.open(myMap, marker);
        })

    }

    initMap();
});

    var wow = new WOW();

    wow.init();