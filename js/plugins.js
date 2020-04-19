/* global $ */
$(function () {
    'use strict';
    $('.men').on('click', function() {
        $('.items').fadeToggle(100);
        $('.side-menu').toggleClass('shdw');
    })
//------------------
$(function () {
    $('.nav-item a').not('.active').addClass('disabled');
})
$('input').click(function(){
    if($(this).is(':checked')){
        $(this).parent().parent().find('button.btn-dis-tog').attr("disabled", false);
        $(this).parent().parent().find('button.btn-dis-tog').addClass('btn-act');
        $('.nav-item a.active').parent('li').next().find('a').removeClass('disabled');
    } else{
        $(this).parent().parent().find('button.btn-dis-tog').attr("disabled", true);
        $(this).parent().parent().find('button.btn-dis-tog').removeClass('btn-act');
    }
});
//------------------
    $('.step3 input').keyup(function() {
    if($(this).val() != ''){
        $(this).parent().parent().find('button.btn-dis-tog').attr("disabled", false);
        $(this).parent().parent().find('button.btn-dis-tog').addClass('btn-act');
        $('.nav-item a.active').parent('li').next().find('a').removeClass('disabled');
    } else{
        $(this).parent().parent().find('button.btn-dis-tog').attr("disabled", true);
        $(this).parent().parent().find('button.btn-dis-tog').removeClass('btn-act');
    }
})
//------------------
$('.tab-content').on('click', '.btn-act', function () {
    $('.nav-tabs > .nav-item > .active').parent().next('li').find('a').trigger('click');
    $('.nav-item a.active').parent('li').addClass('nav-act').prevAll('li').removeClass('nav-act').addClass('step-prev');
    $('.nav-tabs > .nav-item > .active').parent().prev('li').find('a').addClass('step-prev');
});

$('.tab-content').on('click', '.btn-prev',function () {
    $('.nav-tabs > .nav-item > .active').parent().prev('li').find('a').trigger('click');
    $('.nav-item a.active').parent('li').next().find('a').addClass('disabled');
    $('.nav-item a.active').parent('li').next().removeClass('step-prev , nav-act');
    $('.nav-tabs > .nav-item > .active').parent().removeClass('step-prev').addClass('nav-act').next('li').find('a').removeClass('step-prev , nav-act');
    
});
//-------------------

})