$(function() {
    $('.slider').slick({
        arrows: false,
        fade: true,
        //asNavFor: '.slider-title'
        asNavFor: '.slick-slider'
    });
    $('.slider-title').slick({
        arrows: false,
        fade: true,
        asNavFor: '.slick-slider'
    });
    $('.slider-description').slick({
        arrows: false,
        fade: true,
        //asNavFor: '.slider'
        asNavFor: '.slick-slider'
    });
    $('.hexagon').bind('click',function () {
        $('.slider').slick('slickGoTo', $(this).data("slide"));
    });
});