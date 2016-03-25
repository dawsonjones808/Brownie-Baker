var count = 0;
var bonus = 0;


var press = function() {
	count++;
	count=count+bonus;
	document.getElementById('score').innerHTML = "Current Brownies: " + count;
	console.log("press variable");
}
var grandma = function() {
	if (count>=2000){
	bonus=3;
	count= count-2000;
	document.getElementById('score').innerHTML = "Current Brownies: " + count;
	}
	else{
		bonus=0;
	}
	
	console.log("click variable");
}