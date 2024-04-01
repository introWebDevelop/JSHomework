// 4th prompt 
var newNum = 21;

if (newNum == 21) {
	console.log("This number is 21");
} else if (newNum > 21) {
	console.log("This number is greater than 21");
} else {
	console.log("This number is less than 21"); 
}

function printTheNumber(newNum) {
	return console.log("This number is: " + newNum); 
}

printTheNumber(newNum);