/*
	DOCTYPE JAVASCRIPT
	File:  calc.js
    This is the javascript for Budget Boss

	Revisions:

*/
$(document).ready(function () {//start of function
  $("form").submit(function(v) {
    v.preventDefault();//validation first
    budget();//call table and input function
  }).validate({
    rules: {
      "income": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [-100000, 100000]//range can only be from -100000 to 100000
      },
      "rent": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [-100000, 100000]//range can only be from -100000 to 100000
      },
      "utilities": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [-100000, 100000]//range can only be from -100000 to 100000
      },
      "insurance": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [-100000, 100000]//range can only be from -100000 to 100000
      },
      "food":{
        required: true,//it must be a number
        number: true,//it must be a number
        range: [-100000, 100000]//range can only be from -100000 to 100000
      },
      "savings":{
        required: true,//it must be a number
        number: true,//it must be a number
        range: [-100000, 100000]//range can only be from -100000 to 100000
      },
      "misc":{
        required: true,//it must be a number
        number: true,//it must be a number
        range: [-100000, 100000]//range can only be from -100000 to 100000
      }
    },
    messages: {
      income: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number. If you are using a comma, please remove it.",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between -100000 to 100000."//error message for range
      },
      rent: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number. If you are using a comma, please remove it.",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between -100000 to 100000."//error message for range
      },
      utilities: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number. If you are using a comma, please remove it.",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between -100000 to 100000."//error message for range
      },
      insurance: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between -50 to 50."//error message for range
      },
      food: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between -50 to 50."//error message for range
      },
      savings: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between -50 to 50."//error message for range
      },
      misc: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between -50 to 50."//error message for range
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
