
    
/* $('#hotspot').load(function(){ */

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
        
  
    /*     var map = new ol.Map({
            target: 'shpwMap',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([37.41, 8.82]),
              zoom: 4
            })
          }); */
    })
    function successFunction(position) 
    {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var centre = new L.LatLng(lat, long);
       
        var map=new MapmyIndia.Map("map",{ center: [28.5628, 77.6856],zoom:10,hybrid:true 
        });
        var LatLng = [
          ["marker1",28.624076, 77.209860],
          ["marker2",28.607198, 77.196299],
          ["marker3",28.619706, 77.197501],
          ["marker4",28.618049, 77.223422],
          ["marker5",28.627391, 77.222907],
          ["marker6",28.632966, 77.206599],
          ["marker7",28.615035, 77.227370],
          ["marker8",28.624076+1, 77.209860],
          ["marker9",28.607198+1, 77.196299],
          ["marker10",28.619706+1, 77.197501],
          ["marker11",28.618049, 77.223422],
          ["marker12",28.627391, 77.222907],
          ["marker13",28.632966, 77.206599],
          ["marker14",28.615035+1, 77.227370]
          ];
          var icon = L.icon({
            iconUrl: 'http://maps.google.com/mapfiles/ms/micons/red.png', // icon
            iconSize: [30, 30], // icon size[w,h]
             });
             var icon1 = L.icon({
              iconUrl: 'http://maps.google.com/mapfiles/ms/micons/green.png', // icon
              iconSize: [30, 30], // icon size[w,h]
               });
               var icon2 = L.icon({
                iconUrl: 'http://maps.google.com/mapfiles/ms/micons/orange.png', // icon
                iconSize: [30, 30], // icon size[w,h]
                 });
              
            // method for plotting marker
           /*  var marker = L.marker(new L.LatLng(28.551738, 77.269022), {icon: icon,
             }).addTo(map); */

          /*iterate on size of latitiude longitude set*/
           for (var i = 0; i < LatLng.length; i++) {
             if(i<5){
         new L.marker(([LatLng[i][1],LatLng[i][2]]), {icon: icon,
             }).addTo(map);}
             else{
              new L.marker(([LatLng[i][1],LatLng[i][2]]), {icon: icon1,
              }).addTo(map);
             }
          /* new L.marker([LatLng[i][1],LatLng[i][2]])
                  .bindPopup(LatLng[i][0])
                  .addTo(map); */
          } 

       // alert(lat+'-'+long)
    }
    
    function errorFunction(position) 
    {
        alert('Error!');
    }

