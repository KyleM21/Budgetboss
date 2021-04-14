/*
	DOCTYPE JAVASCRIPT
	File:  stonks.js
    This is the javascript for Budget Boss

	Revisions:

*/


function stonk(){
	
	var arr = $('form[name="cForm"]').serializeArray();

	var x11 = parseInt(arr[0].value);
	var x12 = parseInt(arr[1].value);
	
	var x21 = parseInt(arr[2].value);
	var x22 = parseInt(arr[3].value);
	
	var x31 = parseInt(arr[4].value);
	var x32 = parseInt(arr[5].value);
	
	var investment = x11 + x21 + x31;
	var worth = x12 + x22 + x32;
	var profits = worth - investment;
	
	document.getElementById("total").value = investment;
	document.getElementById("profit").value = profits;
	
	if(profits<0){
		alert("The total value of your stocks went down, causing you a loss of $" + Math.abs(profits) + ".");
	}
	else if(worth == investment){
		alert("Your stocks did not change, therefore you have 0$ in profits.");
	}
	else{
		alert("You invested $"  + investment + ", and the new value of all your stocks is $"  
								+ worth + ", which brings you the profits of $" + profits + ".");
	}
}