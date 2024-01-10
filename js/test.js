console.log("hello world");

document.getElementById("header").innerText = "My time table";

var currentDate = new Date();
var options = { weekday: 'long' };

console.log("Today is:", currentDate.toLocaleDateString('en-US', options));

let dayID = "d" + currentDate.getDay();