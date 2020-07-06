$( document ).on( "pageinit", "#otppage", function( event ) {
    //attach event handlers here. eg $('li').on('click', function(){});
	$('#loginotp').on('click', function(){
		localStorage.setItem('mobile',$('#mobileotp').val());
		window.location.href ="/#dashboard"
	});
});

$( document ).on( "pagebeforeshow", "#otppage", function( event ) {
    //make ajax calls here
});

$( document ).on( "pageshow", "#otppage", function( event ) {
    //make ui changes here eg show/hide dom elements
	
});