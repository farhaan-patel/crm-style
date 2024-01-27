
$(document).ready(function(){
    $('.ri-menu-2-line').click(function(){
        $('aside').toggleClass('w-60');
        $('aside2').toggleClass('w-60');
        $('.mainbody').toggleClass('ml-60');
        $('header').toggleClass('ml-60');
        $('.manu-title').toggleClass('d-non2');
        $('.fa-angle-down').toggleClass('d-non2');
        $('.fa-angle-up').toggleClass('d-non2');
        $('.ans').toggleClass('d-non2');
        $('.ri-speed-up-line , .ri-apps-2-line , .ri-layout-3-line ').toggleClass('font-size-22 ');
    });
    $('.profile-2').click(function(){
         $('.option-setting').slideToggle('100')
    });
    
});

// box 1

