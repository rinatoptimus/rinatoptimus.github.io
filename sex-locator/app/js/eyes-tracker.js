$(function(){
    var mouseX = 0, mouseY = 0, limitX = 85-20, limitY = 87-35;
    $(window).mousemove(function(e){
        var offset = $('.cont').offset();
        mouseX = Math.min(e.pageX - offset.left, limitX);
        mouseY = Math.min(e.pageY - offset.top, limitY);
        if (mouseX < 0) mouseX = 0;
        if (mouseY < 0) mouseY = 0;
    });

// cache the selector
    var follower = $("#follower");
    var xp = 0, yp = 0;
    var loop = setInterval(function(){
        xp += (mouseX - xp) / 10;
        yp += (mouseY - yp) / 10;
        follower.css({left:xp, top:yp});

    }, 30);
});