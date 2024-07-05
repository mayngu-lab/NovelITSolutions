document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('nav a[data-slide]');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            var slideNumber = parseInt(link.getAttribute('data-slide'));
            currentSlide(slideNumber); // Navigate to the specified slide
        });
    });
});


// slide navigation
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function activateNavBurger() {

    var nav_ul = document.getElementById("navul");
    var nav_burger = document.getElementById("navburger");

    if (nav_ul.className === "nav-ul") {
        nav_ul.className += " responsive";
        nav_burger.className += " responsive";
    } else {
        nav_ul.className = "nav-ul";
        nav_burger.className = "nav-burger";
    }
}
