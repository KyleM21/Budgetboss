/*
	DOCTYPE JAVASCRIPT
	File:  calc.js
    This is the javascript for Budget Boss

	Revisions:

*/

//Jquery validation done by Kerry
$(document).ready(function () {//start of function
  $("form").submit(function(v) {
    v.preventDefault();//validation first
    budget();//calls budget function done by Kyle
  }).validate({
    rules: {
	/*
      "name": {
        required: true,//it must be a number
				char: true
      },
	*/
      "income": {
		pattern: [0-9,],
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
      "rent": {
		pattern: [0-9,],
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
      "utilities": {
		pattern: [0-9,],
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
		"insurance": {
		pattern: [0-9,],
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
		"food": {
		pattern: [0-9,],
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
		"savings": {
		pattern: [0-9,],
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
		"misc": {
		pattern: [0-9,],
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
    },
    messages: {
	/*
      name: {
        required: "Error. Please enter in your name.",//error message for required input
				char: "Error. Please enter in a char"
      },
	*/
      income: {
		pattern: "Error. Please only enter numbers and commas",
        required: "Error. Please enter in your income. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      },
      rent: {
		pattern: "Error. Please only enter numbers and commas",
		required: "Error. Please enter in your rent. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      },
      utilities: {
		pattern: "Error. Please only enter numbers and commas",
		required: "Error. Please enter in your utilities amount. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      },
		insurance: {
		pattern: "Error. Please only enter numbers and commas",
		required: "Error. Please enter in your insurance cost. Can be car insurance, health insurance, etc. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      },
		food: {
		pattern: "Error. Please only enter numbers and commas",
		required: "Error. Please enter in your food cost. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      },
		savings: {
		pattern: "Error. Please only enter numbers and commas",
		required: "Error. Please enter in how much you want to put in savings. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      },
		misc: {
		pattern: "Error. Please only enter numbers and commas",
		required: "Error. Please enter in your miscellaneous costs. Can be anything like subscriptions, going out, etc. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      }
    },
  });
});

//budget function by Kyle Marcoux
function budget() {
		
	// This first part just sets up the modal window that will show the results!
	
	// Get the modal
	var modal = document.getElementById("message");
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
	  }
	} 
	
	// Grabs income and totals up expenses
	var arr = $('form[name="cForm"]').serializeArray();
	
	// This loop will remove all commas found in the input fields
	for(i=0; i<=6; i++){
		arr[i].value = (arr[i].value).replace(',', '');
	}

	//var name = arr[0].value;
	var rent = arr[1].value;
	var utilities = arr[2].value;
	var insurance = arr[3].value;
	var food = arr[4].value;
	var savings = arr[5].value;
	var misc = arr[6].value;
	var income = parseFloat(arr[0].value);
	var tot = parseFloat(arr[1].value)
				+ parseFloat(arr[2].value)
				+ parseFloat(arr[3].value)
				+ parseFloat(arr[4].value)
				+ parseFloat(arr[5].value)
				+ parseFloat(arr[6].value);

	// Sets the total expenses to the total field
	// It also uses a regex on the total expenses to add commas
	document.getElementById("total").value = tot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	


	// Runs a check to tell the user how the income they inputted matches up with their monthly expenses
	if(income > tot){
		document.getElementById("mText").innerHTML = "Your income is greater then your total bills.";
		modal.style.display = "block";
	}
	else if(income == tot){
		document.getElementById("mText").innerHTML = ("Your bills equal to your current income, I advise you to use the Bill Analysis Tool"
				+ " to see if any of your bills could be lowered.");
		modal.style.display = "block";
	}
	else{
		document.getElementById("mText").innerHTML = ("Your bills are greater then your current income, I STRONGLY advise you to use the Bill Analysis Tool"
					+ " to see if any of your bills could be lowered.");
		modal.style.display = "block";
	}

}

