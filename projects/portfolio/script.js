function showTab(tabId){

    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab=>{
        tab.classList.remove("active");
    });

