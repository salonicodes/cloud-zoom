$(document).ready(function () {
	
    //basic pop-up
    $('#open-pop-up-1').click(function(e) {
        e.preventDefault();
        $('#pop-up-1').popUpWindow({action: "open"});
    });
	
	
	 $('#open-pop-up-2').click(function(e) {
        e.preventDefault();
        $('#pop-up-2').popUpWindow({action: "open"});
    });
	
	
	 $('#open-pop-up-3').click(function(e) {
        e.preventDefault();
        $('#pop-up-3').popUpWindow({action: "open"});
    });
	
	
	$('#open-pop-up-4').click(function(e) {
        e.preventDefault();
        $('#pop-up-4').popUpWindow({action: "open"});
    });
	
});