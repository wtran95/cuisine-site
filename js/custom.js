//Dropdown navbar
let lv1MenuItems = document.querySelectorAll(".nav-item");
let lv2MenuItems = document.querySelectorAll(".nav-item2");

let lv1subMenus = document.querySelectorAll(".sub-menu");
let lv2subMenus = document.querySelectorAll(".sub-menu2");


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
    x.className += " responsive";
    } else {
    x.className = "navbar";
    closeDropdown();
    }
}

for(let i = 0; i < lv1MenuItems.length; i++) {
    lv1MenuItems[i].addEventListener('click', () => {
        lv1MenuItems[i].nextElementSibling.classList.toggle("dropdown");
        // for(let j = 0; j < lv2subMenus.length; j++){
        // if(lv2subMenus[j].classList.contains("dropdown")){
        //     lv2subMenus[j].classList.toggle("dropdown");
        //     }   
        // }

    })
}

function closeDropdown(){
    // Close level 1 Sub-menu Block
    for(let i = 0; i < lv1subMenus.length; i++){
        if(lv1subMenus[i].classList.contains("dropdown"))
        {
            lv1subMenus[i].classList.toggle("dropdown");
        }

    }
    // Close level 2 Sub-menu Block
    // for(let j = 0; j < lv2subMenus.length; j++){
    //     if(lv2subMenus[j].classList.contains("dropdown")){
    //         lv2subMenus[j].classList.toggle("dropdown");
    //     }
    // }

}


//Slide Content 
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-contents");
    console.log(slides.length);
    var nums = document.getElementsByClassName("num");

    if(n > slides.length) {slideIndex = 1;}
    if(n < 1) {slideIndex = slides.length;}

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < nums.length; i++){
        nums[i].className = nums[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    nums[slideIndex - 1].className += " active";
}

//To Top Button
var topButton = document.getElementById("topBtn");

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }
}

topButton.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left: 0,
        behavior: "smooth"
    });
});

//Get to date day

var today = new Date().toISOString().substr(0, 10);
document.querySelector("#date-book").value = today;