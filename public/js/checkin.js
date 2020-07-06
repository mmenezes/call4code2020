$( document ).on( "pageinit", "#checkin", function( event ) {
    //attach event handlers here. eg $('li').on('click', function(){});
	$("#checkinuser").click(function(){$.post('/api/checkin',  // url
       $("#checkinform").serialize(), // data to be submit
       function(data, status, xhr) {   // success callback function
	      if (status=='success'){
            
			Util.showToast("Checkin Success Stay Safe!!")
		  }else 
        	Util.showToast("Error checking In. Please try Again");		  
          },
	'json')});
});

$( document ).on( "pagebeforeshow", "#checkin", function( event ) {
    //make ajax calls here
});

$( document ).on( "pageshow", "#checkin", function( event ) {
 let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
  Instascan.Camera.getCameras().then(cameras => {
    scanner.camera = cameras[cameras.length - 1];
    scanner.start();
  }).catch(e => console.error(e));

  scanner.addListener('scan', content => {
    console.log(content);
    
    var obj = JSON.parse(content);
    $('#orgname').val(obj.name);
    $('#address').val(obj.address);   
    
  });
});



