$('.cti-btn').click(function(e){
    ev.preventDefault();
    //$('.cont_menu').toggle();
    //$('.cont_menu').fadeToggle();
    $('.cont_menu').slideToggle();
    $(this).toggleClass('on');
});
/* 왜 고글에 손을 올려도 on 버튼이 안뜨지 */
