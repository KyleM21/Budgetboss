/*	
	DOCTYPE JAVASCRIPT
	File:  calc.js
    This is the javascript for Budget Boss
	
	Revisions:
	
*/


//budget function by Kyle Marcoux
function budget() {
	
	
	// Grabs income and totals up expenses
	var arr = $('form[name="cForm"]').serializeArray();
	
	var name = arr[0].value;
	var income = parseInt(arr[1].value);
	var tot = parseInt(arr[2].value)
				+ parseInt(arr[3].value)
				+ parseInt(arr[4].value)
				+ parseInt(arr[5].value)
				+ parseInt(arr[6].value)
				+ parseInt(arr[7].value);
				
	// Sets the total expenses to the total field
	document.getElementById("total").value = tot;
	
	// Runs a check to tell the user how the income they inputted matches up with their monthly expenses
	if(income > tot){
		alert(name + ", your income is greater then your total bills.");
	}
	else if(income == tot){
		alert(name  + ", your bills equal to your current income, I advise you to use the Bill Analysis Tool"
					+ " to see if any of your bills could be lowered");
	}
	else{
		alert(name + ", your bills are greater then your current income, I STRONGLY advise you to use the Bill Analysis Tool"
					+ " to see if any of your bills could be lowered");
	}
}