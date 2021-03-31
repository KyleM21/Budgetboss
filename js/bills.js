/*
Bills.js page
*/

//function done by Kerry O'Neill
function bill() {
	var arr = $('form[name="cForm"]').serializeArray();

	//input variables for name and bill
	var name = arr[0].value;
	var bill = arr[1].value;

	//input variables for Bill type drop down
	var e = document.getElementById("btype");
	var result = e.value;

	//variable for MA state average of bills
	var avg_elec = 106.94;
	var avg_phone = 114;


	
	// Kerry - I got rid of the if, in favor of a switch
	//nested if statement for electric bill
	/*
	if(result = "electric"){
	alert("MEOW")
	}

	if(result = "phone"){
	alert("phone")
	}
	*/

	switch(result){
		case "electric":
			alert("Electrical!")
			break;
		case "phone":
			alert("Phone!")
			break;
		case "car":
			alert("Car!")
			break;
		case "food":
			alert("Food!")
			break;
		case "house":
			alert("House!")
			break;
		case "debt":
			alert("Debt!")
			break;
		case "school":
			alert("School!")
			break;
		case "subs":
			alert("Subscriptions!")
			break;
	}
	

}
