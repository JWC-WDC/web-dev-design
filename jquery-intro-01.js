$( document ).ready(function() {

	// once the page is loaded, print a message to the console:
	console.log( "ready!" );

	// custom JS:



    // run the jQuery UI datepicker method on something with the ID of "datepicker":
    $( function() {
    	$( "#datepicker" ).datepicker();
    } );



    // run the jQuery UI accordion method:
    $( function() {
    	$( "#accordion" ).accordion();
    } );


    //  change the color of an HTML element:
    $("#datepicker").css("color", "blue"); // colors the text blue

}); // ends the "$( document ).ready(function() in line 1"


