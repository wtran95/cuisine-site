var slideIndex = 1;
showSlides(slideIndex);

// function plusSlides(n){
//     showSlides(slideIndex += n);
// }

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
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

function topFunc(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}