$(function(){
    var src = [
        'app/img/book-images/1.jpg',
        ['app/img/book-images/2.jpg', 'Озеро. 2014 г. август.'],
        ['app/img/book-images/3.jpg', 'Какое-то знаменитое место. 2015 г. сентябрь.'],
        ['app/img/book-images/4.jpg', 'Какое-то выдающееся место. 2015 г. ноябрь.'],
        ['app/img/book-images/5.jpg', 'Название места'],
        ['app/img/book-images/2.jpg', 'Озеро. 2014 г. август.'],
    ];

    $('#mybook').onebook(src,{
        slope: 0,
        pageColor: '#e4e4e4',
        language: 'ru',
        bgLight: 'blue',
        startPage: 2,
        flip: 'basic',
        skin: 'light'
    });
});