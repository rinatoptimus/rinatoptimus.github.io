$(function(){
    var waypoint = new Waypoint({
        element: document.getElementById('waypoint-skirt'),
        handler: function() {
            $('.skirt').addClass('skirt-off');

            setTimeout(function(){
                $('.skirt').css('z-index', '-20');
            }, 2000);

        }
    })

    var waypoint = new Waypoint({
        element: document.getElementById('waypoint-underpants'),
        handler: function() {
            $('.underpants').addClass('underpants-off');
        }
    })
});