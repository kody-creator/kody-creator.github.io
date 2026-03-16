// Bring the search box 
const search = document.getElementById("tesla_search");

//User Input
search.addEventListener("input", function() {

//Converting input characters to lowercase
let value = search.value.toLowerCase();

//if input includes s scroll to moedl s
if(value.includes("s")) {
document.querySelector(".model_s").scrollIntoView({behavior:"smooth"});
}
//if input includes 3 scroll to model 3
if(value.includes("3")) {
document.querySelector(".model_3").scrollIntoView({behavior:"smooth"});
}
//if input includes cyber scroll to cybertruck
if(value.includes("cyber")) {
document.querySelector(".cybertruck").scrollIntoView({behavior:"smooth"});
}

});
 
//nav part
 document.addEventListener('DOMContentLoaded', function () {
                const navbarToggle = document.getElementById('navbarToggle');
                const navbarMenu = document.getElementById('navbarMenu');
                if (navbarToggle && navbarMenu) {
                navbarToggle.addEventListener('click', function () {
                navbarToggle.classList.toggle('is-active');
                navbarMenu.classList.toggle('is-active');
                const isExpanded = navbarMenu.classList.contains('is-active');
                navbarToggle.setAttribute('aria-expanded', isExpanded);
                });
                }
                });