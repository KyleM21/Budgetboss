/*
	DOCTYPE JAVASCRIPT
	File:  stonks.js
    This is the javascript for Budget Boss

	Revisions:

*/

$(document).ready(function () {//start of function
  $("form").submit(function(v) {
    v.preventDefault();//validation first
    stonk();//call table and input function
  }).validate({
    rules: {
      "stockOne": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 100000]//range can only be from 0 to 100000
      },
      "quantity1": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [1, 100000]//range can only be from 0 to 100000
      },
      "newStockOne": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 100000]//range can only be from 0 to 100000
      },
      "stockTwo": {
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 100000]//range can only be from 0 to 100000
      },
      "quantity2":{
        required: true,//it must be a number
        number: true,//it must be a number
        range: [1, 100000]//range can only be from 0 to 100000
      },
      "newStockTwo":{
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 100000]//range can only be from 0 to 100000
      },
      "stockThree":{
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 100000]//range can only be from 0 to 100000
      },
			"quantity3":{
        required: true,//it must be a number
        number: true,//it must be a number
        range: [1, 100000]//range can only be from 0 to 100000
      },
			"newStockThree":{
        required: true,//it must be a number
        number: true,//it must be a number
        range: [0, 100000]//range can only be from 0 to 100000
      }
    },
    messages: {
      stockOne: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number. If you are using a comma, please remove it.",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 to 100000."//error message for range
      },
      quantity1: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number. If you are using a comma, please remove it.",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 1 to 100000."//error message for range
      },
      newStockOne: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number. If you are using a comma, please remove it.",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 to 100000."//error message for range
      },
      stockTwo: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 to 100000."//error message for range
      },
      quantity2: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 1 to 100000."//error message for range
      },
      newStockTwo: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 to 100000."//error message for range
      },
      stockThree: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 to 100000."//error message for range
      },
			quantity3: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 1 to 100000."//error message for range
      },
			newStockThree: {
        required: "Error. Please enter in a value. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 to 100000."//error message for range
      }
    },
  });
});

function stonk(){
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


	// The rest of this function will compute stocks

	var arr = $('form[name="cForm"]').serializeArray();

	var quant1 = parseFloat(arr[1].value);
	var x11 = parseFloat(arr[0].value) * quant1;
	var x12 = parseFloat(arr[2].value) * quant1;

	var quant2 = parseFloat(arr[4].value);
	var x21 = parseFloat(arr[3].value) * quant2;
	var x22 = parseFloat(arr[5].value) * quant2;

	var quant3 = parseFloat(arr[7].value);
	var x31 = parseFloat(arr[6].value) * quant3;
	var x32 = parseFloat(arr[8].value) * quant3;

	//var investment = (x11*quant1) + (x21*quant2) + (x31*quant3);
	var investment = x11 + x21 + x31;
	var worth = x12 + x22 + x32;
	var profits = worth - investment;

	document.getElementById("total").value = addCommas(investment);
	document.getElementById("profit").value = addCommas(profits);

	var parent = document.getElementById('myCanvas').parentNode;
	document.getElementById('myCanvas').remove();
	let canvas = document.createElement("canvas");
	canvas.id = 'myCanvas';
	parent.appendChild(canvas);


	if(profits<0){
		document.getElementById("mText").innerHTML = ("The total value of your stocks went down, causing you a loss of $" + addCommas(Math.abs(profits)) + ".");
		modal.style.display = "block";

		var ctx = document.getElementById('myCanvas').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Stock 1 Cost', 'Stock 1 New Value', 'Stock 2 Cost', 'Stock 2 New Value', 'Stock 3 Cost', 'Stock 3 New Value', 'Total Investment', 'Worth', 'Profits'],
				datasets: [{
					label: 'Comparing Stocks to New Values',
					data: [x11, x12, x21, x22, x31, x32, investment, worth, profits],
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
	else if(worth == investment){
		document.getElementById("mText").innerHTML = ("Your stocks did not change, therefore you have 0$ in profits.");
		modal.style.display = "block";


		var ctx = document.getElementById('myCanvas').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Stock 1 Cost', 'Stock 1 New Value', 'Stock 2 Cost', 'Stock 2 New Value', 'Stock 3 Cost', 'Stock 3 New Value', 'Total Investment', 'Worth', 'Profits'],
				datasets: [{
					label: 'Comparing Stocks to New Values',
					data: [x11, x12, x21, x22, x31, x32, investment, worth, profits],
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
		document.getElementById("mText").innerHTML = ("You invested $"  + addCommas(investment) + ", and the new value of all your stocks is $"
								+ addCommas(worth) + ", which brings you the profits of $" + addCommas(profits) + ".");
		modal.style.display = "block";

		var ctx = document.getElementById('myCanvas').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Stock 1 Cost', 'Stock 1 New Value', 'Stock 2 Cost', 'Stock 2 New Value', 'Stock 3 Cost', 'Stock 3 New Value', 'Total Investment', 'Worth', 'Profits'],
				datasets: [{
					label: 'Comparing Stocks to New Values',
					data: [x11, x12, x21, x22, x31, x32, investment, worth, profits],
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


function addCommas(x){
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


//Validation
/*
$(document).ready(function() {
	$("form[name='cForm']").validate({

    rules: {
		stockOne: {
			pattern: [0-9,],
			number: true
		  },
		newStockOne: {
			pattern: [0-9,],
			number: true
		  },
		stockTwo: {
			pattern: [0-9,],
			number: true
		  },
		newStockTwo: {
			pattern: [0-9,],
			number: true
		  },
		stockThree: {
			pattern: [0-9,],
			number: true
		  },
		newStockThree: {
			pattern: [0-9,],
			number: true
		  }
	},
    messages : {
		stockOne: {
			pattern: "Please only numbers and commas",
			number: "Please only enter numerical values"
		},
		newStockOne: {
			pattern: "Please only numbers and commas",
			number: "Please only enter numerical values"
		},
		stockTwo: {
			pattern: "Please only numbers and commas",
			number: "Please only enter numerical values"
		},
		newStockTwo: {
			pattern: "Please only numbers and commas",
			number: "Please only enter numerical values"
		},
		stockThree: {
			pattern: "Please only numbers and commas",
			number: "Please only enter numerical values"
		},
		newStockThree: {
			pattern: "Please only numbers and commas",
			number: "Please only enter numerical values"
		}
    }

  });
});*/
