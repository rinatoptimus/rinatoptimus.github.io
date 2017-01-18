/**
 * Created by rinat_y on 09.12.16.
 */
var $menuIcon = $('.menu-icon'),
    $navigation = $('.navigation'),
    $mainNavigation = $('.main-navigation'),
    $navigationLink = $('.main-navigation a');

$(window).scroll(function() {
    if(window.scrollY > window.outerHeight) {
        $menuIcon.addClass('active');
    } else {
        $menuIcon.removeClass('active');
    }
});

$menuIcon.click(function(e) {
    e.preventDefault();

    $navigation.toggleClass('active');
});

$mainNavigation.singlePageNav({
    filter: ':not(.external)',
    speed: 1000,
    currentClass: 'current',
    easing: 'swing',
    updateHash: false,
    beforeStart: function() {
    },
    onComplete: function() {
        $navigation.removeClass('active');
    }
});