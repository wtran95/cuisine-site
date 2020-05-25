//Dropdown navbar
//Query all selectors to trigger dropdown click event
let lv1MenuItems = document.querySelectorAll(".nav-item");
let lv2MenuItems = document.querySelectorAll(".nav-item2");

let lv1subMenus = document.querySelectorAll(".sub-menu");
let lv2subMenus = document.querySelectorAll(".sub-menu2");

//Trigger the function when the buger icon have been clicked
function myFunction() {
    let x = document.getElementById("topMobileNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
        closeDropdown();
    }
}

//Display Sub-menu when nav-item have been clicked
for(let i = 0; i < lv1MenuItems.length; i++) {
    lv1MenuItems[i].addEventListener('click', () => {
        lv1MenuItems[i].nextElementSibling.classList.toggle("dropdown");
        //Close Sub-menu2 block when close nav-item
        for(let j = 0; j < lv2subMenus.length; j++){
        if(lv2subMenus[j].classList.contains("dropdown")){
            lv2subMenus[j].classList.toggle("dropdown");
            }   
        }
    })
}

//Display Sub-menu2 when nav-item2 have been clicked
for(let i = 0; i < lv2MenuItems.length; i++){
    lv2MenuItems[i].addEventListener('click', () => {
        lv2MenuItems[i].nextElementSibling.classList.toggle("dropdown");
    })
}

//Close all of different sub-menu level
function closeDropdown(){
    // Close Sub-menu Block
    for(let i = 0; i < lv1subMenus.length; i++){
        if(lv1subMenus[i].classList.contains("dropdown"))
        {
            lv1subMenus[i].classList.toggle("dropdown");
        }
    }

    // Close Sub-menu2 Block
    for(let j = 0; j < lv2subMenus.length; j++){
        if(lv2subMenus[j].classList.contains("dropdown")){
            lv2subMenus[j].classList.toggle("dropdown");
        }
    }
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