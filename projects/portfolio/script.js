function showTab(tabId){

    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab=>{
        tab.classList.remove("active");
    });
   document.getElementById(tabId)
        .classList.add("active");
}

const intro =
"Hi, I'm Jack Rojas Duran. Welcome to my portfolio.";

let i = 0;

function typeText(){

    if(i < intro.length){

        document.getElementById("typing")
            .textContent += intro.charAt(i);

        i++;

        setTimeout(typeText,50);
    }
}

typeText();

const projects = [

{
    title:"Calculator",
    image:"images/calculator.png",
    description:
    "A calculator built with JavaScript that performs basic arithmetic operations. This project helped me practice functions, event listeners, and DOM manipulation."
},

{
    title:"Number Guessing Game",
    image:"images/guessing-game.png",
    description:
    "A game where the player guesses a random number. Through this project I learned variables, conditionals, loops, and user input."
}

];

