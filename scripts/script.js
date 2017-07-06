$( document ).ready(function() {
    
$div =$('<div>')
$('<img>').addClass('responsive');
$( "#projects" ).click(function(sublist) {
    
$('.sublist').slideToggle();

});

    $( "#projects" ).mouseenter(function(x,y) {
        $( ".wrapper" ).addClass( "projects" );
        $( ".page-header, .footer, a" ).addClass( "white" );
    })    
    .mouseleave(function() {
        $( ".wrapper" ).removeClass( "projects" );
        $( ".page-header, .footer, a" ).removeClass( "white" );
});

    $( "#remember" ).mouseenter(function() {
        $( ".wrapper" ).addClass( "projects" );
        $( ".page-header, .footer,  a" ).addClass( "white" );
    })    
    .mouseleave(function() {
        $( ".wrapper" ).removeClass( "projects" );
        $( ".page-header, .footer, a" ).removeClass( "white" );
});

$( "#home" ).mouseenter(function() {
        $( ".wrapper" ).addClass( "home" );
        $( ".page-header, .footer, a" ).addClass( "white" );
    })    
    .mouseleave(function() {
        $( ".wrapper" ).removeClass( "home" );
        $( ".page-header, .footer, a" ).removeClass( "white" );
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
        $( ".page-header, .footer, a" ).addClass( "white" );
    })    
    .mouseleave(function() {
        $( ".wrapper" ).removeClass( "snapshots" );
        $( ".page-header, .footer, a" ).removeClass( "white" );
});

$( "#zines" ).mouseenter(function() {
        $( ".wrapper" ).addClass( "zines" );
    })    
    .mouseleave(function() {
        $( ".wrapper" ).removeClass( "zines" );
});



});
