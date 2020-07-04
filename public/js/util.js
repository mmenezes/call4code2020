var Util = {
    showToast : function(msg) {    
        var notify = humane.create({timeout : 5000});    
        notify.log(msg)
    }
}