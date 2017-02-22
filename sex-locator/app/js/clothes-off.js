$(window).scroll(function(){
    if($(this).scrollTop() > 5400){
        $('.skirt').addClass('skirt-off');
    }

    if($(this).scrollTop() > 4500){
        $('.underpants').addClass('underpants-off');
    }
});