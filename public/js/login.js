$( document ).on( "pageinit", "#loginpage", function( event ) {
    //attach event handlers here. eg $('li').on('click', function(){});
	$('#login').on('click', function(){
		localStorage.setItem('mobile',$('#mobile').val());
		window.location.href = window.location.href + "#dashboard"
	});
});

$( document ).on( "pagebeforeshow", "#loginpage", function( event ) {
    //make ajax calls here
});

$( document ).on( "pageshow", "#loginpage", function( event ) {
    //make ui changes here eg show/hide dom elements
	
});