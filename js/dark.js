$(document).ready(function() {
	$( "#dToggle" ).on("click", function() {
		if( $( "body" ).hasClass( "dark" )) {
		  $( "body" ).removeClass( "dark" );
		  $( "#dToggle" ).text( "Lights out" );
		} else {
		  $( "body" ).addClass( "dark" );
		  $( "#dToggle" ).text( "Lights on" );
		}
	});
});