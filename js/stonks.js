/*
	DOCTYPE JAVASCRIPT
	File:  stonks.js
    This is the javascript for Budget Boss

	Revisions:

*/


function stonk(){

	var arr = $('form[name="cForm"]').serializeArray();

	var x11 = parseFloat(arr[0].value);
	var x12 = parseFloat(arr[1].value);

	var x21 = parseFloat(arr[2].value);
	var x22 = parseFloat(arr[3].value);

	var x31 = parseFloat(arr[4].value);
	var x32 = parseFloat(arr[5].value);

	var investment = x11 + x21 + x31;
	var worth = x12 + x22 + x32;
	var profits = worth - investment;

	document.getElementById("total").value = investment;
	document.getElementById("profit").value = profits;

	if(profits<0){
		alert("The total value of your stocks went down, causing you a loss of $" + Math.abs(profits) + ".");

		var ctx = document.getElementById('myCanvas').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Stock 1 Cost', 'Stock 1 New Value', 'Stock 2 Cost', 'Stock 2 New Value', 'Stock 3 Cost', 'Stock 3 New Value', 'Total Investment', 'Worth', 'Profits'],
				datasets: [{
					label: 'Simulate your stocks here!',
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
		alert("Your stocks did not change, therefore you have 0$ in profits.");

		var ctx = document.getElementById('myCanvas').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Stock 1 Cost', 'Stock 1 New Value', 'Stock 2 Cost', 'Stock 2 New Value', 'Stock 3 Cost', 'Stock 3 New Value', 'Total Investment', 'Worth', 'Profits'],
				datasets: [{
					label: 'Simulate your stocks here!',
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
		alert("You invested $"  + investment + ", and the new value of all your stocks is $"
								+ worth + ", which brings you the profits of $" + profits + ".");

								var ctx = document.getElementById('myCanvas').getContext('2d');
								var myChart = new Chart(ctx, {
									type: 'bar',
									data: {
										labels: ['Stock 1 Cost', 'Stock 1 New Value', 'Stock 2 Cost', 'Stock 2 New Value', 'Stock 3 Cost', 'Stock 3 New Value', 'Total Investment', 'Worth', 'Profits'],
										datasets: [{
											label: 'Simulate your stocks here!',
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
