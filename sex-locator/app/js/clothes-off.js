$(window).scroll(function(){
    if($(this).scrollTop() > 5200){
        $('.skirt').addClass('skirt-off');
    }

    if($(this).scrollTop() > 4300){
        $('.underpants').addClass('underpants-off');
    }

    if($(this).scrollTop() > 4300){
        // $('#bridgeContainer').css('display', 'block');
        //$('#bridgeContainer').css({'height': '205px'});
    }
});