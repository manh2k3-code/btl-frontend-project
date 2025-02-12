$(document).ready(function () {
    $('.row').slick({
        slidesToShow: 3,
        infinite: true,
        prevArrow: "<button type='button' class='slick-next pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-prev pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});
