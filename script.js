var navBg = document.querySelector('.nav-bg');
var nav = document.querySelector('nav');

function toggleMenu() {
    if(nav.classList.contains('menu-opened')){
        nav.classList.remove('menu-opened')
        navBg.style.opacity = '0'
        setTimeout(() => {
            nav.classList.add('displaynone')
            navBg.classList.add('displaynone')
        }, 300)
    } else {
        nav.classList.remove('displaynone')
        navBg.classList.remove('displaynone')
        setTimeout(() => {
            nav.classList.add('menu-opened')
            navBg.style.opacity = '0.3'
        }, 10)
    }
}
toggleMenu()

const popup = document.getElementById('accessibility-popup');

function toggleAccessPopup() {
    popup.classList.toggle('accessibility-hidden');
}



var themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function() {
    var root = document.documentElement;

    if (root.classList.contains("theme-dark")) {
        root.classList.remove("theme-dark");
    } else {
        root.classList.add("theme-dark");
    }
});

var fontSizeButton = document.getElementById("font-size-button");

fontSizeButton.addEventListener("click", function() {
    var root = document.documentElement;

    if (root.classList.contains("font-size-small")) {
        root.classList.remove("font-size-small");
        root.classList.add("font-size-large");
    } else if (root.classList.contains("font-size-large")) {
        root.classList.remove("font-size-large");
    } else {
        root.classList.add("font-size-small");
    }
});

function goToLayer(layer) {
    var mainWindow = document.querySelector('.nav-layer-1');
    var layerWindow = document.querySelector(`.nav-layer-${layer}`);
    console.log(layerWindow);
    mainWindow.classList.toggle('nav-layer-exit');
    layerWindow.classList.toggle('displaynone');
    setTimeout(() => {
        
        layerWindow.classList.toggle('nav-layer-exit');
    }, 10);
    
}


// slides
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
