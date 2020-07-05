$( document ).on( "pageinit", "#hotspot", function( event ) {
    //attach event handlers here. eg $('li').on('click', function(){});
    let map;
	//if(map) map.remove();
    //   map=new MapmyIndia.Map('map-container',{center:[15.5388,73.8315],zoom:8,zoomControl: true,hybrid:false,search:false });
});

$( document ).on( "pagebeforeshow", "#hotspot", function( event ) {
    //make ajax calls here
});

$( document ).on( "pageshow", "#hotspot", function( event ) {
	if (navigator.geolocation)
    {
       navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
       //console.log("data"+data)
    }
    else 
    {
       alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
    } 
    new MapmyIndia.showSafetyCheck({parentDivId:"safety_div",geolocation:true,shareOptions:false,details:"high"});
});

 function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var centre = new L.LatLng(lat, long);

    var map=new MapmyIndia.Map("map-container",{ center: centre,zoom:10,hybrid:true });
 }

 function errorFunction(position) 
 {
        alert('Error!');
 }