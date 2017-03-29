$(function() {
    $('.slider').slick({
        arrows: false,
        fade: true,
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
        asNavFor: '.slick-slider'
    });
    //$('.hexagon').bind('mouseenter',function () {
    $('.switcher').bind('mouseenter',function () {
        $('.slider').slick('slickGoTo', $(this).data("slide"));
    });
});