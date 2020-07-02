$( document ).on( "pageinit", "#comingSoon", function( event ) {
    //attach event handlers here. eg $('li').on('click', function(){});
});

$( document ).on( "pagebeforeshow", "#comingSoon", function( event ) {
    //make ajax calls here
    getComingSoonData();
});

$( document ).on( "pageshow", "#comingSoon", function( event ) {
    //make ui changes here eg show/hide dom elements
});

function getComingSoonData() {
    $.ajax({
        url : "/comingSoon",
        type : "GET",
    }).done(function(data) {
        $("#comingSoon #msg").html(data.msg);
    }).fail(function() {
    });
}