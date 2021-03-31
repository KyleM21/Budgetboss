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
      "name": {
        required: true,//it must be a number
				char: true
      },
      "income": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
      "rent": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
      "utilities": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
			"insurance": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
			"food": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
			"savings": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
			"misc": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 10000000]//range can only be from -50 to 50
      },
    },
    messages: {
      name: {
        required: "Error. Please enter in your name.",//error message for required input
				char: "Error. Please enter in a char"
      },
      income: {
        required: "Error. Please enter in your income. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      },
      rent: {
				required: "Error. Please enter in your rent. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      },
      utilities: {
				required: "Error. Please enter in your utilities amount. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      },
			insurance: {
				required: "Error. Please enter in your insurance cost. Can be car insurance, health insurance, etc. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      },
			food: {
				required: "Error. Please enter in your food cost. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      },
			savings: {
				required: "Error. Please enter in how much you want to put in savings. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      },
			misc: {
				required: "Error. Please enter in your miscellaneous costs. Can be anything like subscriptions, going out, etc. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      }
    },
  });
});

//budget function by Kyle Marcoux
function budget() {

	// Grabs income and totals up expenses
	var arr = $('form[name="cForm"]').serializeArray();

	var name = arr[0].value;
	var rent = arr[2].value;
	var utilities = arr[3].value;
	var insurance = arr[4].value;
	var food = arr[5].value;
	var savings = arr[6].value;
	var misc = arr[7].value;
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
