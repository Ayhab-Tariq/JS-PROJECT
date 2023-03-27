var om = +prompt("Enter Your Obtained Marks: ");
var tm = +prompt("Enter your Total Marks: ");

var result = (om * 100) / tm;

document.getElementById("demo").innerHTML = "Your Obtained Percentage is: " + result.toFixed(2);

alert("Your Obtained Percentage is: " + result.toFixed(2));

document.write("Your Obtained Percentage is: " + result.toFixed(1));

console.log("Your Obtained Percentage is: " + result.toFixed(2));