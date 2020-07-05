$( document ).on( "pageinit", "#splash", function( event ) {
	setTimeout(function(){
      	window.location.href = "/#loginpage"
        //$.mobile.changePage("#loginpage", "fade");

    }, 3000);
});

$( document ).on( "pagebeforeshow", "#splash", function( event ) {
    //make ajax calls here
});

$( document ).on( "pageshow", "#splash", function( event ) {
  
});



