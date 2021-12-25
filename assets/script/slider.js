$(document).ready(function() {

    $('.items').slick({
        infinite: true,
        slidesToShow: 3,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.lazy').slick({

    });
});