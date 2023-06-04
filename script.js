var navBg = document.querySelector('.nav-bg');
var nav = document.querySelector('nav');
var menuOpenBtn = document.querySelector('.menu-open-btn');
var menuCloseBtn = document.querySelector('.menu-close-btn');

function toggleMenu() {
    if(nav.classList.contains('menu-opened')){
        menuOpenBtn.setAttribute('aria-expanded', 'false');
        menuCloseBtn.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-hidden', 'true');
        nav.classList.remove('menu-opened')
        navBg.style.opacity = '0'
        setTimeout(() => {
            nav.classList.add('display-none')
            navBg.classList.add('display-none')
        }, 300)
    } else {
        menuOpenBtn.setAttribute('aria-expanded', 'true');
        menuCloseBtn.setAttribute('aria-expanded', 'true');
        nav.setAttribute('aria-hidden', 'false');
        nav.classList.remove('display-none')
        navBg.classList.remove('display-none')
        setTimeout(() => {
            nav.classList.add('menu-opened')
            navBg.style.opacity = '0.3'
        }, 10)
    }
}
// toggleMenu()

var translatePercentage = 20;
var mainWindow = document.querySelector('.nav-layer-1');

function goToLayer(layer) {
    var layerWindow = document.querySelector(`.nav-layer-${layer}`);

    layerWindow.classList.remove('display-none');

    setTimeout(() => {
        mainWindow.style.transform = `translateX(-${translatePercentage}%)`;
        mainWindow.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        layerWindow.style.transform = 'translateX(0)';
        layerWindow.style.opacity = '1';
        mainWindow.classList.add('display-none');
    }, 100);
}
// goToLayer(2)


function backToFirstLayer(layer) {
    var mainWindow = document.querySelector('.nav-layer-1');
    var layerWindow = document.querySelector(`.nav-layer-${layer}`);

    mainWindow.classList.remove('display-none');

    setTimeout(() => {
        layerWindow.style.transform = `translateX(${translatePercentage}%)`;
        layerWindow.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        mainWindow.style.transform = 'translateX(0)';
        mainWindow.style.opacity = '1';
        layerWindow.classList.add('display-none');
    }, 100);
}

// accessibility settings
var root = document.documentElement;
var allElements = document.querySelectorAll('*');
var allImages = document.querySelectorAll('img');
var allButtons = document.querySelectorAll('button');
var fontSizeStep = 0, fontWeightStep = 0, letterSpacingStep = 0, contrastStep = 0, animationStep = 0;
var fontSizeBtn = document.querySelector(".font-size-btn").querySelector(".nav-row-inner-text");
var fontWeightBtn = document.querySelector(".font-weight-btn").querySelector(".nav-row-inner-text");
var letterSpacingBtn = document.querySelector(".letter-spacing-btn").querySelector(".nav-row-inner-text");
var contrastBtn = document.querySelector(".contrast-btn").querySelector(".nav-row-inner-text");
var animationBtn = document.querySelector(".animation-btn").querySelector(".nav-row-inner-text");


function changeFontSize() {
    fontSizeStep++;
    var step = fontSizeStep % 4;

    if (step === 0) {
        root.style.fontSize = '100%';
        fontSizeBtn.innerText = `字體大小：中`;
    } else if (step === 1) {
        root.style.fontSize = '112.5%';
        fontSizeBtn.innerText = `字體大小：大`;
    } else if (step === 2) {
        root.style.fontSize = '125%';
        fontSizeBtn.innerText = `字體大小：更大`;
    } else if (step === 3) {
        root.style.fontSize = '87.5%';
        fontSizeBtn.innerText = `字體大小：小`;
    }
}

function changeFontWeight() {
    fontWeightStep++;
    var step = fontWeightStep % 3;

    if (step === 0) {
        root.style.setProperty('--font-weight', '400');
        root.style.setProperty('--font-weight-bold', '600');
        fontWeightBtn.innerText = `字體粗細：中`;
    } else if (step === 1) {
        root.style.setProperty('--font-weight', '500');
        root.style.setProperty('--font-weight-bold', '700');
        fontWeightBtn.innerText = `字體粗細：粗`;
    } else if (step === 2) {
        root.style.setProperty('--font-weight', '600');
        root.style.setProperty('--font-weight-bold', '700');
        fontWeightBtn.innerText = `字體粗細：更粗`;
    }
}

function changeLetterSpacing() {
    letterSpacingStep++;
    var step = letterSpacingStep % 3;
    var spacing = 'normal';

    if (step === 0) {
        spacing = 'normal';
        letterSpacingBtn.innerText = `字體間距：中`;
    } else if (step === 1) {
        spacing = '0.3em';
        letterSpacingBtn.innerText = `字體間距：大`;
    } else if (step === 2) {
        spacing = '0.5em';
        letterSpacingBtn.innerText = `字體間距：更大`;
    }

    root.style.letterSpacing = spacing;
    allButtons.forEach(button => {button.style.letterSpacing = spacing;});
}

function changeContrast() {
    contrastStep++;
    var step = contrastStep % 2;
    if (step === 0) {
        root.classList.remove('mono-theme-palette')
        allImages.forEach(image => {image.style.filter = 'grayscale(0)';});
        console.log(allImages[0].style);
        contrastBtn.innerText = `去飽和：關閉`;
    } else if (step === 1) {
        root.classList.add('mono-theme-palette')
        allImages.forEach(image => {image.style.filter = 'grayscale(1)';});
        contrastBtn.innerText = `去飽和：開啟`;
    }
}

function changeAnimation() {
    animationStep++;
    var step = animationStep % 2;
    if (step === 0) {
        allElements.forEach(element => {element.classList.remove('transition-none');});
        animationBtn.innerText = `動畫：開啟`;
    } else if (step === 1) {
        allElements.forEach(element => {element.classList.add('transition-none');});
        animationBtn.innerText = `動畫：關閉`;
    }
}

function changeReset() {
    root.classList.remove('mono-theme-palette');
    allImages.forEach(image => {image.style.filter = 'grayscale(0)';});
    root.style.fontSize = '100%';
    root.style.setProperty('--font-weight', '400');
    root.style.setProperty('--font-weight-bold', '600');
    root.style.letterSpacing = 'normal';
    allButtons.forEach(button => {button.style.letterSpacing = 'normal';});
    allElements.forEach(element => {element.classList.remove('transition-none');});

    fontSizeStep = 0;
    fontWeightStep = 0;
    letterSpacingStep = 0;
    contrastStep = 0;
    animationStep = 0;

    contrastBtn.innerText = `去飽和：關閉`;
    fontSizeBtn.innerText = `字體大小：中`;
    fontWeightBtn.innerText = `字體粗細：中`;
    letterSpacingBtn.innerText = `字體間距：中`;
    animationBtn.innerText = `動畫：開啟`;
}

var themeBtn = document.querySelector(".theme-btn").querySelector(".nav-row-inner-text");
var themeBtnIcon = document.querySelector(".theme-btn").querySelector("span");
function changeTheme() {
    if (root.classList.contains('dark-theme-palette')) {
        root.classList.remove('dark-theme-palette');
        themeBtn.innerText = `深色模式：關閉`;
        themeBtnIcon.innerText = `light_mode`;
    } else {
        root.classList.add('dark-theme-palette')
        themeBtn.innerText = `深色模式：開啟`;
        themeBtnIcon.innerText = `dark_mode`;
    }
}


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });




function handleLastMenuItemKeyDown(event) {
    if (event.key === 'Tab' && !event.shiftKey) {
        // Prevent the default Tab behavior
        event.preventDefault();
        // Focus the first element in the menu
        if(nav.classList.contains('menu-opened')){
        document.querySelector('.menu .menu-close-btn').focus();
        } else {
            document.querySelector('.menu .header-btn').focus();
        }
        
    }
}


// slides
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
