var count = 0;
var bonus = 0;

var press = function() {
	count++;
	count=count+bonus;
	document.getElementById('score').innerHTML = "Current Brownies: " + count;
	console.log("press variable");
}
var grandma = function() {
	bonus=1;
	console.log("click variable");
}