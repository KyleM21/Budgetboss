/*
	DOCTYPE JAVASCRIPT
	File:  calc.js
	Name: Kyle Marcoux and Kerry O'Neill
    GUI II
    This is the javascript for Budget Boss Budget Calculator
*/

$(document).ready(function () {//start of function
  $("form").submit(function(v) {
    v.preventDefault();//validation first
    budget();//call table and input function
  }).validate({
    rules: {
      "income": {
        required: true,			// it must be a number
		pattern: /^[0-9,.]+$/, 	// it must be numbers and commas
		minlength: 1,			// minimum length of 1
		maxlength: 10			// max length of 10, to support stock values up to 10,000,000, or 100,000.000
      },
      "rent": {
        required: true,			// it must be a number
		pattern: /^[0-9,.]+$/, 	// it must be numbers and commas
		minlength: 1,			// minimum length of 1
		maxlength: 10			// max length of 10, to support stock values up to 10,000,000, or 100,000.000
      },
      "utilities": {
        required: true,			// it must be a number
		pattern: /^[0-9,.]+$/, 	// it must be numbers and commas
		minlength: 1,			// minimum length of 1
		maxlength: 10			// max length of 10, to support stock values up to 10,000,000, or 100,000.000
      },
      "insurance": {
        required: true,			// it must be a number
		pattern: /^[0-9,.]+$/, 	// it must be numbers and commas
		minlength: 1,			// minimum length of 1
		maxlength: 10			// max length of 10, to support stock values up to 10,000,000, or 100,000.000
      },
      "food":{
        required: true,			// it must be a number
		pattern: /^[0-9,.]+$/, 	// it must be numbers and commas
		minlength: 1,			// minimum length of 1
		maxlength: 10			// max length of 10, to support stock values up to 10,000,000, or 100,000.000
      },
      "savings":{
        required: true,			// it must be a number
		pattern: /^[0-9,.]+$/, 	// it must be numbers and commas
		minlength: 1,			// minimum length of 1
		maxlength: 10			// max length of 10, to support stock values up to 10,000,000, or 100,000.000
      },
      "misc":{
        required: true,			// it must be a number
		pattern: /^[0-9,.]+$/,	// it must be numbers and commas
		minlength: 1,			// minimum length of 1
		maxlength: 10			// max length of 10, to support stock values up to 10,000,000, or 100,000.000
      }
    },
    messages: {
      income: {
        required: "Error. Please enter in a value. Must be an integer.",			//error message for required input
		pattern: "Error. Please enter only numbers and commas.", 					//error message for invalid pattern
        minlength: "Error. Please enter an integer between 1 and 10 characters.",	//error message for range
        maxlength: "Error. Please enter an integer between 1 and 10 characters."	//error message for range
      },
      rent: {
        required: "Error. Please enter in a value. Must be an integer.",			//error message for required input
		pattern: "Error. Please enter only numbers and commas.", 					//error message for invalid pattern
        minlength: "Error. Please enter an integer between 1 and 10 characters.",	//error message for range
        maxlength: "Error. Please enter an integer between 1 and 10 characters."	//error message for range
      },
      utilities: {
        required: "Error. Please enter in a value. Must be an integer.",			//error message for required input
		pattern: "Error. Please enter only numbers and commas.", 					//error message for invalid pattern
        minlength: "Error. Please enter an integer between 1 and 10 characters.",	//error message for range
        maxlength: "Error. Please enter an integer between 1 and 10 characters."	//error message for range
      },
      insurance: {
        required: "Error. Please enter in a value. Must be an integer.",			//error message for required input
		pattern: "Error. Please enter only numbers and commas.", 					//error message for invalid pattern
        minlength: "Error. Please enter an integer between 1 and 10 characters.",	//error message for range
        maxlength: "Error. Please enter an integer between 1 and 10 characters."	//error message for range
      },
      food: {
        required: "Error. Please enter in a value. Must be an integer.",			//error message for required input
		pattern: "Error. Please enter only numbers and commas.", 					//error message for invalid pattern
        minlength: "Error. Please enter an integer between 1 and 10 characters.",	//error message for range
        maxlength: "Error. Please enter an integer between 1 and 10 characters."	//error message for range
      },
      savings: {
        required: "Error. Please enter in a value. Must be an integer.",			//error message for required input
		pattern: "Error. Please enter only numbers and commas.", 					//error message for invalid pattern
        minlength: "Error. Please enter an integer between 1 and 10 characters.",	//error message for range
        maxlength: "Error. Please enter an integer between 1 and 10 characters."	//error message for range
      },
      misc: {
        required: "Error. Please enter in a value. Must be an integer.",			//error message for required input
		pattern: "Error. Please enter only numbers and commas.", 					//error message for invalid pattern
        minlength: "Error. Please enter an integer between 1 and 10 characters.",	//error message for range
        maxlength: "Error. Please enter an integer between 1 and 10 characters."	//error message for range
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

        var parent = document.getElementById('myCanvas').parentNode;
        document.getElementById('myCanvas').remove();
        let canvas = document.createElement("canvas");
        canvas.id = 'myCanvas';
        parent.appendChild(canvas);


	// Sets the total expenses to the total field
	// It also uses a regex on the total expenses to add commas
	document.getElementById("total").value = tot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");



	// Runs a check to tell the user how the income they inputted matches up with their monthly expenses
	if(income > tot){
		document.getElementById("mText").innerHTML = "Your income is greater then your total bills.";
		modal.style.display = "block";

    var ctx = document.getElementById('myCanvas').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Rent', 'Insurance', 'Food', 'Savings', 'Misc', 'Income'],
        datasets: [{
          label: 'Comparing your bill to averages',
          data: [rent, utilities, insurance, food, savings, misc, income],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
	}
	else if(income == tot){
		document.getElementById("mText").innerHTML = ("Your bills equal to your current income, I advise you to use the Bill Analysis Tool"
				+ " to see if any of your bills could be lowered.");
		modal.style.display = "block";

    var ctx = document.getElementById('myCanvas').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Rent', 'Insurance', 'Food', 'Savings', 'Misc', 'Income'],
        datasets: [{
          label: 'Comparing your bill to averages',
          data: [rent, utilities, insurance, food, savings, misc, income],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
	}
	else{
		document.getElementById("mText").innerHTML = ("Your bills are greater then your current income, I STRONGLY advise you to use the Bill Analysis Tool"
					+ " to see if any of your bills could be lowered.");
		modal.style.display = "block";

    var ctx = document.getElementById('myCanvas').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Rent', 'Insurance', 'Food', 'Savings', 'Misc', 'Income'],
        datasets: [{
          label: 'Comparing your bill to averages',
          data: [rent, utilities, insurance, food, savings, misc, income],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
	}

}
