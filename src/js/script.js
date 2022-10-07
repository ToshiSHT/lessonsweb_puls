$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/next.svg"></button>'

      });
});