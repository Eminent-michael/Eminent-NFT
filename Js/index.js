let hamburger = document.querySelector(".hamburger")
let menu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    menu.classList.remove("active")
}))

menu.addEventListener("click", () => {
        hamburger.classList.remove("active")
        menu.classList.remove("active")
})


/* Tabs Vanilla Js */

function openTabs(event, tabId){
    // Get all the element with filter-card and hide them
    let filterCard = document.querySelectorAll(".filt")
    for (i=0; i < filterCard.length; i++) {
        filterCard[i].style.display = "none"
    }

    // Get all element with class tag and remove the class active;
    let tag = document.querySelectorAll(".tag")
    for (i=0; i < tag.length; i++) {
        tag[i].className = tag[i].className.replace(" active", "")  
    }

    // Show current tab and add is-active to the tab
    let splitCard = document.querySelectorAll("."+tabId)   
    for (i=0; i < splitCard.length; i++) {
        splitCard[i].style.display = "block"
    }
    event.currentTarget.className += " active"
}


/* Js for view in section 4*/

let view = document.querySelector("#view-all");
let viewCards = document.querySelectorAll(".view");
console.log(viewCards)

view.addEventListener("click", () => {
    console.log("View clicked....")
    for (i=0; i<viewCards.length; i++) {
        viewCards[i].style.display = "block";
    }
})