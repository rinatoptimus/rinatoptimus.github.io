$(function(){
    var waypoint = new Waypoint({
        element: document.getElementById('waypoint-skirt'),
        handler: function() {
            $('.skirt').addClass('skirt-off');
        }
    })

    var waypoint = new Waypoint({
        element: document.getElementById('waypoint-underpants'),
        handler: function() {
            $('.underpants').addClass('underpants-off');
        }
    })
});