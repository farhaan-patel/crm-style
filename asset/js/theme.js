$(document).ready(function(){
   //$('input.cb-value').prop("checked", true);
$('.cb-value').click(function() {
    var mainParent = $(this).parent('.toggle-btn');
    if($(mainParent).find('input.cb-value').is(':checked')) {
      $(mainParent).addClass('active');
      $(':root').css('--pink', 'purple')
      $(':root').css('--mainbb', '#f3f3f9')
      $(':root').css('--black', 'black') 
      $(':root').css('--white', 'white')
      $(':root').css('--txt-aside', 'white')
    } else {
      $(mainParent).removeClass('active');
      $(':root').css('--pink', 'black')
      $(':root').css('--mainbb', '#28282B')
        $(':root').css('--black', 'white')
        $(':root').css('--white', 'white')
        $(':root').css('--white', 'black')
        $(':root').css('--txt-aside', '#656565')
        
    }
  
  })
      




    $('#myonoffswitch').toggle(function(){
        
    });
    $('#light').click(function(){
        $(':root').css('--pink', 'white')
        $(':root').css('--white', 'black')
    });
    $('#pink').click(function(){
        $(':root').css('--pink', '#ef2853')
        $(':root').css('--white', 'black')
    });
    $('.ri-settings-5-line').click(function(){
        $('.setting').toggle()
    })

});