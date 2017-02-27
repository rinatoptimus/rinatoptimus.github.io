$(function(){
    var images = ['img-1.jpg', 'img-2.jpg'];
    var random = Math.round(Math.random() * 1);
    $('#bridge').css({
        'background': 'url(app/img/' + images[random] + ')',
        'background-size': 'contain',
        'background-repeat': 'no-repeat',
        'background-position': 'center'
    });
});