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
       $('.footer_top-arrow').click(function() {
      $("html, body").animate({scrollTop: 0}, "slow")
    });


    $('.schedule').click(function(){
      if($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('#raspisanie-popup').fadeOut();
      }
      else {
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
      
      $('.slider-top').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<div class="arrow" style="transform:rotate(-180deg)"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="47px"> <image opacity="0.569" x="0px" y="0px" width="25px" height="47px" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAvCAQAAAC8w6lYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBwIOOiScRRMQAAAB3ElEQVRIx5XRTUuUURgG4CtnIgsnoyQ1kz5sUyjJiFTUUtqES4cEIYqgPzOJCK3b9StaWzl+zaKgVm1qU1lRaWlai/eMM+N8vMezOu8cLp77fibjIGdGwc6hA4AHrkI8eWgEvM9GgkeugHVPOiIjVUDRVkyw0MG6ol+kT7kXwM8EkNZlWj5MmE9A2sbuG62NlJyOCPCtFrQj0wFsmK0FrUnB9QCKvtc/Ne9y1w3w1bz1/Y/NNjZjPEx47Efjc2Owwh4oNgONpOAm2FT0pXnNejIVwHZrUN9l0q0wYd5nLU91Y1N7oNgOVINVwJ80UCGVSLvm0kBC7pgIYNbHNEDWhNvgk6c+pAM6TIbbszhARtYQGPDWZhx5p8s5dLumbCOG8Ea3QWSNW/Y7hvBar34clrdkK4ZQDuiIvOX2KLN3K4d4nfLK7eJlau6VeJ3GlFpPytR9RcXL7Psu6wuTWqJMwy9rBp0OaMFODGFFvz50GrFiO4awFuLljDX+T80Jawb04qgxL/2NIay6qCfEe2U3hlAKqMuwxSpqRyg5ow85w1Yri2hPWHVBD3JGvUgmpRGWQrxjhpNO6aTaKZcsIoZQctmJ0GkhjrDokpM47nws+WfRkFPoiSVJvLO6PP8P8AKAW5NBfZkAAAAASUVORK5CYII=" /> </svg></div>',
        prevArrow: '<div class="arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="47px"> <image opacity="0.569" x="0px" y="0px" width="25px" height="47px" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAvCAQAAAC8w6lYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBwIOOiScRRMQAAAB3ElEQVRIx5XRTUuUURgG4CtnIgsnoyQ1kz5sUyjJiFTUUtqES4cEIYqgPzOJCK3b9StaWzl+zaKgVm1qU1lRaWlai/eMM+N8vMezOu8cLp77fibjIGdGwc6hA4AHrkI8eWgEvM9GgkeugHVPOiIjVUDRVkyw0MG6ol+kT7kXwM8EkNZlWj5MmE9A2sbuG62NlJyOCPCtFrQj0wFsmK0FrUnB9QCKvtc/Ne9y1w3w1bz1/Y/NNjZjPEx47Efjc2Owwh4oNgONpOAm2FT0pXnNejIVwHZrUN9l0q0wYd5nLU91Y1N7oNgOVINVwJ80UCGVSLvm0kBC7pgIYNbHNEDWhNvgk6c+pAM6TIbbszhARtYQGPDWZhx5p8s5dLumbCOG8Ea3QWSNW/Y7hvBar34clrdkK4ZQDuiIvOX2KLN3K4d4nfLK7eJlau6VeJ3GlFpPytR9RcXL7Psu6wuTWqJMwy9rBp0OaMFODGFFvz50GrFiO4awFuLljDX+T80Jawb04qgxL/2NIay6qCfEe2U3hlAKqMuwxSpqRyg5ow85w1Yri2hPWHVBD3JGvUgmpRGWQrxjhpNO6aTaKZcsIoZQctmJ0GkhjrDokpM47nws+WfRkFPoiSVJvLO6PP8P8AKAW5NBfZkAAAAASUVORK5CYII=" /> </svg></div>',
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

      var position = [46.472508, 30.738488];

 function showGoogleMaps() {

  var latLng = new google.maps.LatLng(position[0], position[1]);

  var mapcenter = {lat: 46.472662, lng: 30.738408};

  var mapOptions = {
   zoom: 17,
   scrollwheel: false,
   disableDefaultUI: true,
   streetViewControl: false,
   scaleControl: true,
   mapTypeId: google.maps.MapTypeId.ROADMAP,
   center: mapcenter,
  };

  map = new google.maps.Map(document.getElementById('googlemaps'),
   mapOptions);

  image = 'img/icons/marker.png',
  marker = new google.maps.Marker({
   position: latLng,
   map: map,
   icon: image,
   draggable: false,
   animation: google.maps.Animation.DROP
  });
  // popupContent = '<form action="" method="POST"><div class="input-wrapper"><span class="fas fa-phone"></span><input type="number" placeholder="Номер телефона"></div><button type="submit">Отправить</button></form >',
  infowindow = new google.maps.InfoWindow({
   content: popupContent
  });

  infowindow.open(map, marker);
  marker.addListener('click', function () {
   infowindow.open(map, marker);
  });
 }

 google.maps.event.addDomListener(window, 'load', showGoogleMaps);
});

