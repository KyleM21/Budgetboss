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

	//nested if statement for electric bill
	if(result = "electric"){
	alert("MEOW")
	}

	if(result = "phone"){
	alert("phone")
	}

	switch(result){
		case "electric":
		alert("MEOW1")
			break;
		case "phone":
			break;
		case "car":
			break;
		case "food":
			break;
		case "house":
			break;
		case "debt":
			break;
		case "school":
			break;
		case "subs":
			break;
	}
	

}
