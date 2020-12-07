$(function () {
    $("img").hover(
        function() {
            $(this).stop().animate({"opacity": "0.5"}, 350);
        },
        function() {
            $(this).stop().animate({"opacity": "1"}, 350);
    });
});

$(function() {
    $('.gallery1 a').lightbox(); 
    $('.gallery2 a').lightbox({ nav : false }); 
    $('.gallery3 a').lightbox(); 
  });
  
$( '.prva' ).click(function() {
    $( ".prva" ).effect( "shake", "slow" );
  });

  $( '.druga' ).click(function() {
    $( ".druga" ).effect( "shake", "slow" );
  });
  
  $( '.treca' ).click(function() {
    $( ".treca" ).effect( "shake", "slow" );
  });
  
  $( '.cetvrta' ).click(function() {
    $( ".cetvrta" ).effect( "shake", "slow" );
  });
  
  $( '.peta' ).click(function() {
    $( ".peta" ).effect( "shake", "slow" );
  });
  
  $( '.sesta' ).click(function() {
    $( ".sesta" ).effect( "shake", "slow" );
  });
  
  $( '.sedma' ).click(function() {
    $( ".sedma" ).effect( "shake", "slow" );
  });
  
  $( '.osma' ).click(function() {
    $( ".osma" ).effect( "shake", "slow" );
  });
  $( '.deveta' ).click(function() {
    $( ".deveta" ).effect( "shake", "slow" );
  });
  
  $( '.deseta' ).click(function() {
    $( ".deseta" ).effect( "shake", "slow" );
  });
  
  $( '.jedanaesta' ).click(function() {
    $( ".jedanaesta" ).effect( "shake", "slow" );
  });
  
  $( '.dvanaesta' ).click(function() {
    $( ".dvanaesta" ).effect( "shake", "slow" );
  });
  

