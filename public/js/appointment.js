$( document ).on( "pageinit", "#appointment", function( event ) {
    //attach event handlers here. eg $('li').on('click', function(){});

		$( document ).ready(function() {
			$('.rcw-widget-container').css("height","80vh");
			$('#hospitals').on('change', function(){
			        var selectedHospital = $(this).children("option:selected").val();
					if(!$('#messages').is(":visible")){
						$('.rcw-launcher').click();
					
					}
					$('#messages').find('.rcw-message').last().remove();
					$('.rcw-new-message').val('Hello ' + selectedHospital + ' Ashish');
					$('.rcw-send').click();
					$('#messages').find('.rcw-message').last().remove();
			});
			$('.rcw-widget-container').on('DOMSubtreeModified', '#messages',function(){
				
				let original_content = $('#messages .rcw-message:last').find('.rcw-message-text p').html();
				if(original_content && original_content.indexOf(';') >=0 ){
					//$('#messages').find('.rcw-message').last().remove()
			       let content_messages = original_content.split(";");
				   let new_content = '<ul>';
				   content_messages.forEach(function (c) { 
						if(c!='')
						new_content = new_content + '<li><a style="cursor:pointer" class="options-list" onclick="sendMessage(\''+c+'\')">'+c+'</a></li>';
					})
					new_content = new_content + '</ul>';
					$('#messages .rcw-message:last').find('.rcw-message-text p').html(new_content)
				}   
			});
		});
		
});

$( document ).on( "pagebeforeshow", "#appointment", function( event ) {
    //make ajax calls here
});

$( document ).on( "pageshow", "#appointment", function( event ) {
    //make ui changes here eg show/hide dom elements
});

function sendMessage(m){
	$('.rcw-new-message').val(m);
	$('.rcw-send').click();
}