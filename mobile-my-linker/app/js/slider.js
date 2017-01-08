/**
 * Created by rinat_y on 12/29/16.
 */
$(document).ready(function(){
    $('.your-class').slick({
        //content: "<",
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,

        //
        prevArrow: ".arrow.l",
        nextArrow: ".arrow.r",
        //

        cssEase: 'linear'
    })
});