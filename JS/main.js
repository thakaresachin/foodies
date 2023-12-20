// Header Scroll

let nav=document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

// nav Hide

let navBar=document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(a){
        navCollapse.classList.remove("show");
    })
})



// For light and dark theme not working.
// const htmlEl = document.getElementsByTagName('html')[0];

// const toggleTheme = (theme) => {
//     htmlEl.dataset.theme = theme;
// }


