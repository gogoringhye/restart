$('.tit .btn').click(function(ev){
    ev.preventDefault();
    //$('.nav').toggle();
    //$('.nav').fadeToggle();
    $('.nav').slideToggle();
    $(this).toggleClass("on");
});


/* 왜 고글에 손을 올려도 on 버튼이 안뜨지 */
