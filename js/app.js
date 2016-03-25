var count = 0;
var bonus = 0;
var bonusPoint = 0;
var bonusmultiplier = 0;

var press = function() {
	count++;
	count=count+bonus;
	document.getElementById('score').innerHTML = "Current Brownies: " + count;
	console.log("press variable");
	if (Math.floor(Math.random() * 100) == 1){
		count= count+200
		document.getElementById('score').innerHTML = "Current Brownies: " + count;
		console.log("You got a Corner Brownie!")
	}
}

var grandma = function() {
	if (count>=2000){
		bonus=1;
		count= count-2000;
		document.getElementById('score').innerHTML = "Current Brownies: " + count;
	}
	else{
		bonus=0;
	}
} 

var ironchef = function() {
	if (count>=3000){
		bonus=2;
	count= count-3000;
	document.getElementById('score').innerHTML = "Current Brownies: " + count;
	}
	else{
		bonus=0;
	}
}
var truckload = function() {

	if (count>=4000){
		bonus=4;
	count= count-4000;
	documentgetElementById('score')innerHTML = "Current Brownies: " + count;
	}
	else{
		bonus=0
	}

console.log("click variable");
