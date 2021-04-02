/*
Bills.js page
*/

//function for bill.cs
function bill() {
	var arr = $('form[name="cForm"]').serializeArray();

	//input variables for name and bill
	var name = arr[0].value;
	var bill = arr[1].value;

	//input variables for Bill type drop down
	var e = document.getElementById("btype");
	var result = e.value;

	var f = document.getElementById("sub");
	var result_sub = f.value;

	//variable for MA state average of bills
	var avg_elec = 106.94;
	var avg_phone = 114.00;
	var avg_car = 563.00;
	var avg_food = 349.00;
	var avg_rent = 1696.00;
	var avg_debt = 3913.00;
	var avg_school = 229.02;
	var avg_netflix = 13.99;
	var avg_hulu = 11.99;
	var avg_apple = 9.99;
	var avg_spotify = 9.99;

	switch(result){
		case "electric":
		if(bill>avg_elec){
			alert(name + " your monthly electric bill is greater than MA's average which is: $" + avg_elec + ".");
		}
		else
		if(bill >= 106 && bill <= avg_elec){
			alert(name + " your monthly electric bill is the exact average of MA. which is: $" + avg_elec + ".");
		}
		else{
			alert(name + " your monthly electric bill is below the average in MA which is: $" + avg_elec + ".");
		}
		break;

		case "phone":
		if(bill>avg_phone){
			alert(name + " your monthly phone bill is greater than MA's average which is: $" + avg_phone + ".");
		}
		else
		if(bill >= avg_phone && bill <= 114.99){
			alert(name + " your monthly phone bill is the exact average of MA. which is: $" + avg_phone + ".");
		}
		else{
			alert(name + " your monthly phone bill is below the average in MA which is: $" + avg_phone + ".");
		}
		break;

		case "car":
		if(bill>avg_car){
			alert(name + " your monthly car lease or finance bill is greater than MA's average which is: $" + avg_car + ".");
		}
		else
		if(bill >= avg_car && bill <= 563.99){
			alert(name + " your monthly car lease or finance bill is the exact average of MA. which is: $" + avg_car + ".");
		}
		else{
			alert(name + " your monthly car lease or finance bill is below the average in MA which is: $" + avg_car + ".");
		}
		break;

		case "food":
		if(bill>avg_food){
			alert(name + " your monthly food bill is greater than MA's average which is: $" + avg_food + ".");
		}
		else
		if(bill >= avg_food && bill <= 349.99){
			alert(name + " your monthly food bill is the exact average of MA. which is: $" + avg_food + ".");
		}
		else{
			alert(name + " your monthly food bill is below the average in MA which is: $" + avg_food + ".");
		}
		break;

		case "house":
		if(bill>avg_rent){
			alert(name + " your monthly rent or mortgage bill is greater than MA's average which is: $" + avg_rent + ".");
		}
		else
		if(bill >= avg_rent && bill <= 1696.99){
			alert(name + " your monthly rent or mortgage bill is the exact average of MA. which is: $" + avg_rent + ".");
		}
		else{
			alert(name + " your monthly rent or mortgage bill is below the average in MA which is: $" + avg_rent + ".");
		}
		break;

		case "debt":
		if(bill>avg_debt){
			alert(name + " your monthly credit card bill is greater than MA's average which is: $" + avg_debt + ".");
		}
		else
		if(bill >= avg_debt && bill <= 3913.99){
			alert(name + " your monthly credit card bill is the exact average of MA. which is: $" + avg_debt + ".");
		}
		else{
			alert(name + " your monthly credit card bill is below the average in MA which is: $" + avg_debt + ".");
		}
		break;
		case "school":
		if(bill>avg_school){
			alert(name + " your monthly student loan bill is greater than MA's average which is: $" + avg_school + ".");
		}
		else
		if(bill >= avg_school && bill <= 229.99){
			alert(name + " your monthly student loan bill is the exact average of MA. which is: $" + avg_school + ".");
		}
		else{
			alert(name + " your monthly student loan bill is below the average in MA which is: $" + avg_school + ".");
		}
		break;
		case "subs":
		switch(result_sub){
			case "Netflix":
			if(bill>avg_netflix){
				alert(name + " your monthly Netflix bill is greater than MA's average which is: $" + avg_netflix + ".");
			}
			else
			if(bill >= avg_netflix && bill <= 14){
				alert(name + " your monthly Netflix bill is the exact average of MA. which is: $" + avg_netflix + ".");
			}
			else{
				alert(name + " your monthly Netflix bill is below the average in MA which is: $" + avg_netflix + ".");
			}
			break;

			case "Hulu":
			if(bill>avg_hulu){
				alert(name + " your monthly Hulu bill is greater than MA's average which is: $" + avg_hulu + ".");
			}
			else
			if(bill >= avg_hulu && bill <= 12){
				alert(name + " your monthly Hulu bill is the exact average of MA. which is: $" + avg_hulu + ".");
			}
			else{
				alert(name + " your monthly Hulu bill is below the average in MA which is: $" + avg_hulu + ".");
			}
			break;

			case "Apple Music":
			if(bill>avg_apple){
				alert(name + " your monthly Apple Music bill is greater than MA's average which is: $" + avg_apple + ".");
			}
			else
			if(bill >= avg_apple && bill <= 10){
				alert(name + " your monthly Apple Music bill is the exact average of MA. which is: $" + avg_apple + ".");
			}
			else{
				alert(name + " your monthly Apple Music bill is below the average in MA which is: $" + avg_apple + ".");
			}
			break;

			case "Spotify":
			if(bill>avg_spotify){
				alert(name + " your monthly Spotify bill is greater than MA's average which is: $" + avg_spotify + ".");
			}
			else
			if(bill >= avg_netflix && bill <= 10){
				alert(name + " your monthly Spotify bill is the exact average of MA. which is: $" + avg_spotify + ".");
			}
			else{
				alert(name + " your monthly Spotify bill is below the average in MA which is: $" + avg_spotify + ".");
			}
			break;
		}
		break;
	}

}
