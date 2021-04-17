/*
Bills.js page
*/

$(document).ready(function () {//start of function
  $("form").submit(function(v) {
    v.preventDefault();//validation first
    bill();//calls budget function done by Kyle
  }).validate({
    rules: {
	/*
      "name": {
        required: true,//it must be a number
        char: true
      },
	*/
      "bill": {
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
      bill: {
        required: "Error. Please enter in your income. Must be an integer.",//error message for required input
        number: "Error. Please enter in a number",//error message for number, dont even need it but failsafe
        range: "Error. Please enter an integer between 0 and 1,000,000.",//error message for range
      }
    },
  });
});

//function for bill.cs
function bill() {
	
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
	
	//Bill function
  var arr = $('form[name="cForm"]').serializeArray();

  //input variables for name and bill
  //var name = arr[0].value;
  var bill = arr[0].value;

  //input variables for Bill type drop down
  var e = document.getElementById("btype");
  var result = e.value;

  var f = document.getElementById("sub");
  var result_sub = f.value;

  //variable for MA state average of bills
  var avg_elec = 177.00;
  var avg_phone = 63.91;
  var avg_car = 563.00;
  var avg_food = 349.00;
  var avg_rent = 1696.00;
  var avg_debt = 666.20;
  var avg_school = 229.02;
  var avg_netflix = 13.99;
  var avg_hulu = 11.99;
  var avg_apple = 9.99;
  var avg_spotify = 9.99;

  //avg electric variables for NH, ME, CT, RI, VT
  var avg_elec_NH = 169.35;
  var avg_elec_ME = 152.00;
  var avg_elec_CT = 189.00;
  var avg_elec_RI = 170.00;
  var avg_elec_VT = 95.00;

  //avg internet variables for NH, ME, CT, RI, VT
  var avg_phone_NH = 85.38;
  var avg_phone_ME = 65.56;//avg wifi of bangor and portland
  var avg_phone_CT = 60.00;
  var avg_phone_RI = 77.42;
  var avg_phone_VT = 50.30;

  //avg car variables for NH, ME, CT, RI, VT
  var avg_car_NH = 487.00;
  var avg_car_ME = 519.00;
  var avg_car_CT = 527.00;
  var avg_car_RI = 532.00;
  var avg_car_VT = 499.00;

  //avg food variables for NH, ME, CT, RI, VT
  var avg_food_NH = 287.66;
  var avg_food_ME = 342.92;
  var avg_food_CT = 289.75;
  var avg_food_RI = 284.50;
  var avg_food_VT = 319.58;

  //avg rent/mortgage variables for NH, ME, CT, RI, VT
  //https://www.businessinsider.com/personal-finance/average-mortgage-payment
  var avg_rent_NH = 1917.00;
  var avg_rent_ME = 1381.00;
  var avg_rent_CT = 2096.00;
  var avg_rent_RI = 1838.00;
  var avg_rent_VT = 1594.00;

  //avg student loan debt variables for NH, ME, CT, RI, VT
  //https://www.studentloanplanner.com/average-student-loan-payment-by-state/
  var avg_school_NH = 438.00;
  var avg_school_ME = 373.00;
  var avg_school_CT = 428.00;
  var avg_school_RI = 418.00;
  var avg_school_VT = 339.00;

  //avg credit card variables for NH, ME, CT, RI, VT
  //https://www.chamberofcommerce.org/credit-card-debt-by-state
  var avg_debt_NH = 687.70;
  var avg_debt_ME = 622.00;
  var avg_debt_CT = 750.00;
  var avg_debt_RI = 680.00;
  var avg_debt_VT = 622.16;

  switch(result){
    case "electric":
    if(bill>avg_elec){
		document.getElementById("mText").innerHTML = ("Your monthly electric bill is greater than MA's average which is: $" + avg_elec + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', 'VT Average'],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_elec, avg_elec_NH, avg_elec_ME, avg_elec_CT, avg_elec_RI, avg_elec_VT],
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
    else
    if(bill >= 176.00 && bill <= avg_elec){
      document.getElementById("mText").innerHTML = ("Your monthly electric bill is the exact average of MA. which is: $" + avg_elec + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', 'VT Average'],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_elec, avg_elec_NH, avg_elec_ME, avg_elec_CT, avg_elec_RI, avg_elec_VT],
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
      document.getElementById("mText").innerHTML = ("Your monthly electric bill is below the average in MA which is: $" + avg_elec + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', 'VT Average'],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_elec, avg_elec_NH, avg_elec_ME, avg_elec_CT, avg_elec_RI, avg_elec_VT],
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
    break;

    case "phone":
    if(bill>avg_phone){
      document.getElementById("mText").innerHTML = ("Your monthly phone bill is greater than MA's average which is: $" + avg_phone + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', 'VT Average'],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_phone, avg_phone_NH, avg_phone_ME, avg_phone_CT, avg_phone_RI, avg_phone_VT],
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
    else
    if(bill >= avg_phone && bill <= 114.99){
      document.getElementById("mText").innerHTML = ("Your monthly phone bill is the exact average of MA. which is: $" + avg_phone + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', 'VT Average'],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_phone, avg_phone_NH, avg_phone_ME, avg_phone_CT, avg_phone_RI, avg_phone_VT],
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
      document.getElementById("mText").innerHTML = ("Your monthly phone bill is below the average in MA which is: $" + avg_phone + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_phone, avg_phone_NH, avg_phone_ME, avg_phone_CT, avg_phone_RI, avg_phone_VT],
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
    break;

    case "car":
    if(bill>avg_car){
      document.getElementById("mText").innerHTML = ("Your monthly car lease or finance bill is greater than MA's average which is: $" + avg_car + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_car, avg_car_NH, avg_car_ME, avg_car_CT, avg_car_RI, avg_car_VT],
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
    else
    if(bill >= avg_car && bill <= 563.99){
      document.getElementById("mText").innerHTML = ("Your monthly car lease or finance bill is the exact average of MA. which is: $" + avg_car + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_car, avg_car_NH, avg_car_ME, avg_car_CT, avg_car_RI, avg_car_VT],
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
      document.getElementById("mText").innerHTML = ("Your monthly car lease or finance bill is below the average in MA which is: $" + avg_car + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_car, avg_car_NH, avg_car_ME, avg_car_CT, avg_car_RI, avg_car_VT],
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
    break;

    case "food":
    if(bill>avg_food){
      document.getElementById("mText").innerHTML = ("Your monthly food bill is greater than MA's average which is: $" + avg_food + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_food, avg_food_NH, avg_food_ME, avg_food_CT, avg_food_RI, avg_food_VT],
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
    else
    if(bill >= avg_food && bill <= 349.99){
      document.getElementById("mText").innerHTML = ("Your monthly food bill is the exact average of MA. which is: $" + avg_food + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_food, avg_food_NH, avg_food_ME, avg_food_CT, avg_food_RI, avg_food_VT],
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
      document.getElementById("mText").innerHTML = ("Your monthly food bill is below the average in MA which is: $" + avg_food + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_food, avg_food_NH, avg_food_ME, avg_food_CT, avg_food_RI, avg_food_VT],
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
    break;

    case "house":
    if(bill>avg_rent){
      document.getElementById("mText").innerHTML = ("Your monthly rent or mortgage bill is greater than MA's average which is: $" + avg_rent + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_rent, avg_rent_NH, avg_rent_ME, avg_rent_CT, avg_rent_RI, avg_rent_VT],
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
    else
    if(bill >= avg_rent && bill <= 1696.99){
      document.getElementById("mText").innerHTML = ("Your monthly rent or mortgage bill is the exact average of MA. which is: $" + avg_rent + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_rent, avg_rent_NH, avg_rent_ME, avg_rent_CT, avg_rent_RI, avg_rent_VT],
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
      document.getElementById("mText").innerHTML = ("Your monthly rent or mortgage bill is below the average in MA which is: $" + avg_rent + ".");
		modal.style.display = "block";
		
      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_rent, avg_rent_NH, avg_rent_ME, avg_rent_CT, avg_rent_RI, avg_rent_VT],
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
    break;

    case "debt":
    if(bill>avg_debt){
      document.getElementById("mText").innerHTML = ("Your monthly credit card bill is greater than MA's average which is: $" + avg_debt + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_debt, avg_debt_NH, avg_debt_ME, avg_debt_CT, avg_debt_RI, avg_debt_VT],
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
    else
    if(bill >= avg_debt && bill <= 3913.99){
      document.getElementById("mText").innerHTML = ("Your monthly credit card bill is the exact average of MA. which is: $" + avg_debt + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_debt, avg_debt_NH, avg_debt_ME, avg_debt_CT, avg_debt_RI, avg_debt_VT],
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
      document.getElementById("mText").innerHTML = ("Your monthly credit card bill is below the average in MA which is: $" + avg_debt + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_debt, avg_debt_NH, avg_debt_ME, avg_debt_CT, avg_debt_RI, avg_debt_VT],
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
    break;
    case "school":
    if(bill>avg_school){
      document.getElementById("mText").innerHTML = ("Your monthly student loan bill is greater than MA's average which is: $" + avg_school + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_school, avg_school_NH, avg_school_ME, avg_school_CT, avg_school_RI, avg_school_VT],
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
    else
    if(bill >= avg_school && bill <= 229.99){
      document.getElementById("mText").innerHTML = ("Your monthly student loan bill is the exact average of MA. which is: $" + avg_school + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_school, avg_school_NH, avg_school_ME, avg_school_CT, avg_school_RI, avg_school_VT],
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
      document.getElementById("mText").innerHTML = ("Your monthly student loan bill is below the average in MA which is: $" + avg_school + ".");
		modal.style.display = "block";

      var ctx = document.getElementById('myCanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Your average', 'MA Average', 'NH Average', 'ME Average', 'CT Average', 'RI Average', "VT Average"],
          datasets: [{
            label: 'Comparing your bill to averages',
            data: [bill, avg_school, avg_school_NH, avg_school_ME, avg_school_CT, avg_school_RI, avg_school_VT],
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
    break;

    case "subs":
    switch(result_sub){
      case "Netflix":
      if(bill>avg_netflix){
        document.getElementById("mText").innerHTML = ("Your monthly Netflix bill is greater than MA's average which is: $" + avg_netflix + ".");
		modal.style.display = "block";
      }
      else
      if(bill >= avg_netflix && bill <= 14){
        document.getElementById("mText").innerHTML = ("Your monthly Netflix bill is the exact average of MA. which is: $" + avg_netflix + ".");
		modal.style.display = "block";
      }
      else{
        document.getElementById("mText").innerHTML = ("Your monthly Netflix bill is below the average in MA which is: $" + avg_netflix + ".");
		modal.style.display = "block";
      }
      break;

      case "Hulu":
      if(bill>avg_hulu){
        document.getElementById("mText").innerHTML = ("Your monthly Hulu bill is greater than MA's average which is: $" + avg_hulu + ".");
		modal.style.display = "block";
      }
      else
      if(bill >= avg_hulu && bill <= 12){
        document.getElementById("mText").innerHTML = ("Your monthly Hulu bill is the exact average of MA. which is: $" + avg_hulu + ".");
		modal.style.display = "block";
      }
      else{
        document.getElementById("mText").innerHTML = ("Your monthly Hulu bill is below the average in MA which is: $" + avg_hulu + ".");
		modal.style.display = "block";
      }
      break;

      case "Apple Music":
      if(bill>avg_apple){
        document.getElementById("mText").innerHTML = ("Your monthly Apple Music bill is greater than MA's average which is: $" + avg_apple + ".");
		modal.style.display = "block";
      }
      else
      if(bill >= avg_apple && bill <= 10){
        document.getElementById("mText").innerHTML = ("Your monthly Apple Music bill is the exact average of MA. which is: $" + avg_apple + ".");
		modal.style.display = "block";
      }
      else{
        document.getElementById("mText").innerHTML = ("Your monthly Apple Music bill is below the average in MA which is: $" + avg_apple + ".");
		modal.style.display = "block";
      }
      break;

      case "Spotify":
      if(bill>avg_spotify){
        document.getElementById("mText").innerHTML = ("Your monthly Spotify bill is greater than MA's average which is: $" + avg_spotify + ".");
		modal.style.display = "block";
      }
      else
      if(bill >= avg_netflix && bill <= 10){
        document.getElementById("mText").innerHTML = ("Your monthly Spotify bill is the exact average of MA. which is: $" + avg_spotify + ".");
		modal.style.display = "block";
      }
      else{
        document.getElementById("mText").innerHTML = ("Your monthly Spotify bill is below the average in MA which is: $" + avg_spotify + ".");
		modal.style.display = "block";
      }
      break;
    }
    break;
  }

}
