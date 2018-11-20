function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
	var text2 = "<h2>Subtotal:</h2>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var selectedSize = 0;
	var sizeArray = document.getElementsByClassName("size");
	
	
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br><br>";
		}
	}
	
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	
	runningTotal = sizeTotal;
	//sizeSub = sizeTotal;
	//document.getElementById("subtotal").innerHTML = "$"+sizeSub+".00";
	text2 = "$"+sizeTotal+".00<br>";

	getMeat(runningTotal,text1,text2);//sizeSub); // All three of these variables will be passed on to each function

	
};

function getMeat(runningTotal,_text1,_text2) { //_sizeSub) {
	var meatTotal= 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");

	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
	
			selectedMeat.push(meatArray[j].value);
			_text1 = _text1+meatArray[j].value+"<br>";
		
		}
	}
		
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
		
	} else {
		meatTotal = 0;
	}
	
	runningTotal = (runningTotal + meatTotal);
	_text2 = _text2+"<br>Meats:<br>$"+meatTotal+".00<br>";
	//document.getElementById("subtotal").innerHTML = "$"+_sizeSub+".00 <br>"+"$"+meatTotal+".00";
	

	getVeggie(runningTotal, _text1,_text2);//sizeSub,meatTotal);

	
};	

function getVeggie(runningTotal,_text1,_text2) { //_sizeSub,,meatTotal) {
	var veggieTotal =0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggie");
	
	for (var v = 0; v < veggieArray.length; v++) {
		if (veggieArray[v].checked) {
			selectedVeggie.push(veggieArray[v].value);

			_text1 = _text1+"<br>"+veggieArray[v].value;
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	
	runningTotal = (runningTotal + veggieTotal);
	_text2 = _text2+"<br>Veggies:<br>$"+veggieTotal+".00<br>"; 	
	//document.getElementById("subtotal").innerHTML ="$"+_sizeSub+".00<br>"+"$"+meatTotal+".00<br>"+"$"+veggieTotal+".00<br>";
	
	getCrust(runningTotal,_text1,_text2);//_sizeSub,meatTotal,veggieTotal);

};

function getCrust(runningTotal,_text1,_text2) {//_sizeSub,meatTotal,veggieTotal) {
	var crustTotal = 0;
	var selectedCrust = 0;
	var crustArray = document.getElementsByClassName("crust");
		
	for (var c = 0; c < crustArray.length; c++) {
		if (crustArray[c].checked) {
			selectedCrust = crustArray[c].value;
			_text1 = _text1+"<br><br>"+selectedCrust+"<br>";	
		} 
	}
		
	if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Buttery Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Cheesy Stuffed Crust") {
		crustTotal = 3;
	} else if (selectedCrust === "Spicy Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "House Tossed Crust"){
		crustTotal= 0;
	}
		
	runningTotal = (runningTotal + crustTotal);
	_text2= _text2+"<br>Crust:<br>$"+crustTotal+".00<br>";
	//document.getElementById("subtotal").innerHTML ="<h3>Subtotal:</h3><br>$"+_sizeSub+".00<br><br>"+"$"+meatTotal+".00<br><br>"+"$"+veggieTotal+".00<br><br>"+"$"+crustTotal+".00<br><br>";
	
	
		
	getSauce(runningTotal,_text1,_text2);

};

function getSauce(runningTotal,_text1,_text2) {
	var sauceTotal = 0;
	var selectedSauce = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	
	for (var s = 0; s < sauceArray.length; s++) {
		if (sauceArray[s].checked) {
			selectedSauce = sauceArray[s].value;
			_text1 = _text1+"<br>"+selectedSauce+"<br><br>";	
		} 
	}

	if (selectedSauce === "Red Marinara Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "White Garlic Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "BBQ Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "No Sauce") {
		sauceTotal = 0;
	}
	
	
	runningTotal = (runningTotal + sauceTotal);
	_text2 = _text2+"<br>Sauce:<br>$"+sauceTotal+".00<br>";
	 
	
	getCheese(runningTotal,_text1,_text2);
	
};

function getCheese(runningTotal,_text1,_text2){
	var cheeseTotal;
	var selectedCheese;
	var cheeseArray = document.getElementsByClassName("cheese");
		
	for (var e = 0; e < cheeseArray.length; e++) {
		if (cheeseArray[e].checked) {
			selectedCheese = cheeseArray[e].value;
			_text1 = _text1+selectedCheese+"<br><br>";
		}
	}
			
	if (selectedCheese ==="Regular Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Xtra Cheese") {
		cheeseTotal = 3; 
	} else if (selectedCheese === "No Cheese") {		
		cheeseTotal = 0;
	}	
	
	runningTotal = (runningTotal + cheeseTotal);
	_text2 = _text2+"<br>Cheese:<br>$"+cheeseTotal+".00<br>"; 
	
	document.getElementById("subtotal").innerHTML = "<br>"+_text2;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";	
	document.getElementById("showText").innerHTML = "<strong>"+_text1+"</strong>";
	
};



