console.log("hello world");

document.getElementById("header").innerText = "time table".toUpperCase();

var currentDate = new Date();
var options = { weekday: 'long' };

console.log("Today is:", currentDate.toLocaleDateString('en-US', options));

let dayID = "d" + currentDate.getDay();