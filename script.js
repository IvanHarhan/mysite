const elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", function() {

elements.forEach(el => {

const position = el.getBoundingClientRect().top;

if(position < window.innerHeight){

el.classList.add("show");

}

});

});