"use strict";


function addToBody(text){                                                  
    document.body.innerHTML += "<p>" + text + "</p>";
}
/*
console.log("test");
let yourName = prompt("What is your name?");
console.log("Hi "+yourName);
*/
let temperature = prompt("What is the temperature outside?");

if(temperature <= 32){
	addToBody("It'sn freezing! Stay inside!");
}else if(temperature >= 80){
	addToBody("Go to the beach");
}else{
	addToBody("Go for a walk");
}1
addToBody("Have a nice day!");

