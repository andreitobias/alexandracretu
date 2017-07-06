$(document).ready(function () {
    $a = $('a');
    $pageheader = $('.page-header');
    $footer = $('.snapshots-footer');

    // 1. Initialize fotorama manually.
    var $fotoramaDiv = $('#fotorama').fotorama();

    // 2. Get the API object.
    var fotorama = $fotoramaDiv.data('fotorama');

    // 3. Inspect it in console.
    console.log(fotorama);  
    
    
    $('.fotorama').on('fotorama:show' , function (e, fotorama) {
      if (fotorama.activeFrame.img.length > 27) {
          $a.addClass('white');
          $footer.addClass('white');
          $pageheader.css({ "position": "absolute"}); 
          fotorama.resize({
               width: '100%',
               height: ''
            });
            fotorama.setOptions({
              fit:'contain'
            });
            
      }
      else {
          $a.removeClass('white');
          $footer.removeClass('white');
          $pageheader.css({ "position": "relative"});          
          fotorama.resize({
              width: '100%',
              height: '85%'
            });
           fotorama.setOptions({
              fit:'contain'
            });
           
          
      }
      
      


});

$('.fotorama').on('fotorama:load ' , function (e, fotorama) {
    if (window.matchMedia('(max-width: 767px)').matches ) {
        fotorama.resize({
               width: '100%',
               height: '85%'
            });
        $a.removeClass('white');
          $footer.removeClass('white');    
    } 
});

$('.fotorama').on('fotorama:show ' , function (e, fotorama) {
    if (window.matchMedia('(max-width: 767px)').matches ) {
        fotorama.resize({
               width: '100%',
               height: '85%'
            });
        $a.removeClass('white');
          $footer.removeClass('white');    
    } 
});
})