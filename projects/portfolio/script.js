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
    title:"Recipes",
    image:"images/calculator.png",
    description:
    "Recipes book, we made A web page using HTML to make a cook book of thing we love. This is my favorite HTML project I made becuase I got to show my favorite food and show others how to make it."
},

{
    title:"The Catch Game",
    image:"images/guessing-game.png",
    description:
    "In this game we had to choose a partner and work with them, I choose my friend Davi because we work well together and we live near each other so we can work on it more often. I was very proud of this project becuase it was very fun to make and we had a good end product"
}

];
const container =
document.getElementById("projectContainer");

projects.forEach(project=>{

    const card =
    document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;

    container.appendChild(card);

});

