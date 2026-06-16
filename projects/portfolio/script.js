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

