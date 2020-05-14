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