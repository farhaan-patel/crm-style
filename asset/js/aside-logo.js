$(document).ready(function(){
    // LogoChange
    $('.ri-menu-2-line').on('click', function(){
    $('aside').toggleClass('w-70');
    $('.main-banner').toggleClass('ml-70');
    $('.navbar-header').toggleClass('ml-70');

    var img_1=$("img#home-btn");
    var img1_src="asset/images/logo.png";
    var img2_src="asset/images/logo-sm.png";

    if(img_1.attr("src")== img1_src){
        img_1.attr("src", img2_src);
    }
    else{
        img_1.attr("src", img1_src);
    }
    });
});