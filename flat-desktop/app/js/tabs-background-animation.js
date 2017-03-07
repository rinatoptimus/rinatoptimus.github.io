(function($, undefined){
    $('#landing-content').mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 16);
        var amountMovedY = (e.pageY * -1 / 16);
        $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    });
})(jQuery);