/*
Bills.js page
*/

$(document).ready(function () {//start of function
  $("form").submit(function(v) {
    v.preventDefault();//validation first
    bill();//calls budget function done by Kyle
  }).validate({
    rules: {
      "name": {
        required: true,//it must be a number
        char: true
      },
      "bill": {
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
  var avg_elec = 177.00;
  var avg_phone = 63.91;
  var avg_car = 563.00;
  var avg_food = 349.00;
  var avg_rent = 1696.00;
  var avg_debt = 3913.00;
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

  switch(result){
    case "electric":
    if(bill>avg_elec){
      alert(name + " your monthly electric bill is greater than MA's average which is: $" + avg_elec + ".");

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
      alert(name + " your monthly electric bill is the exact average of MA. which is: $" + avg_elec + ".");

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
      alert(name + " your monthly electric bill is below the average in MA which is: $" + avg_elec + ".");

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
      alert(name + " your monthly phone bill is greater than MA's average which is: $" + avg_phone + ".");

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
      alert(name + " your monthly phone bill is the exact average of MA. which is: $" + avg_phone + ".");

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
      alert(name + " your monthly phone bill is below the average in MA which is: $" + avg_phone + ".");

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
      alert(name + " your monthly car lease or finance bill is greater than MA's average which is: $" + avg_car + ".");

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
      alert(name + " your monthly car lease or finance bill is the exact average of MA. which is: $" + avg_car + ".");

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
      alert(name + " your monthly car lease or finance bill is below the average in MA which is: $" + avg_car + ".");

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
      alert(name + " your monthly food bill is greater than MA's average which is: $" + avg_food + ".");

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
      alert(name + " your monthly food bill is the exact average of MA. which is: $" + avg_food + ".");

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
      alert(name + " your monthly food bill is below the average in MA which is: $" + avg_food + ".");

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
