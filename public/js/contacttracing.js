$( document ).on( "pageinit", "#contacttracing", function( event ) {
});

$( document ).on( "pagebeforeshow", "#contacttracing", function( event ) {
    //make ajax calls here
});

$( document ).on( "pageshow", "#contacttracing", function( event ) {
	if (navigator.geolocation)
    {
       navigator.geolocation.getCurrentPosition(loadmalls, errorMallFunction);
       //console.log("data"+data)
    }
    else 
    {
       alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
    } 
});


function loadmalls(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var centre = new L.LatLng(lat, long);

    var map=new MapmyIndia.Map("mall-map",{ center: centre,zoom:10,hybrid:true });
 }

 function errorMallFunction(position) 
 {
        alert('Error!');
 }
