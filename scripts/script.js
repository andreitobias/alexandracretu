$( document ).ready(function() {


var addWhite = $( ".page-header, .footer, a" ).addClass( "white" );
var removeWhite = $( ".page-header, .footer, a" ).removeClass( "white" );
  
$('#projects').click(function(sublist) {
    
$('.sublist').slideToggle();

});

    $('#projects').mouseenter(function() {
        $( ".wrapper" ).addClass( "projects" );
        addWhite;
    })    
    .mouseleave(function() {
        $( ".wrapper" ).removeClass( "projects" );
        removeWhite;
});

    $( "#remember" ).mouseenter(function() {
        $( ".wrapper" ).addClass( "projects" );
       addWhite;
    })    
    .mouseleave(function() {
        $( ".wrapper" ).removeClass( "projects" );
        removeWhite;
});

$( "#home" ).mouseenter(function() {
        $( ".wrapper" ).addClass( "home" );
        addWhite; 
    })    
    .mouseleave(function() {
        $( ".wrapper" ).removeClass( "home" );
        removeWhite;
});

$( "#aproximately" ).mouseenter(function() {
        $( ".wrapper" ).addClass( "aproximately" );
    })    
    .mouseleave(function() {
        $( ".wrapper" ).removeClass( "aproximately" );
});

$( "#untitled" ).mouseenter(function() {
        $( ".wrapper" ).addClass( "untitled" );
    })    
    .mouseleave(function() {
        $( ".wrapper" ).removeClass( "untitled" );
});

$( "#snapshots" ).mouseenter(function() {
        $( ".wrapper" ).addClass( "snapshots" );
        addWhite; 
    })    
    .mouseleave(function() {
        $( ".wrapper" ).removeClass( "snapshots" );
        removeWhite;
});

$( "#zines" ).mouseenter(function() {
        $( ".wrapper" ).addClass( "zines" );
    })    
    .mouseleave(function() {
        $( ".wrapper" ).removeClass( "zines" );
});



});

