var navBg = document.querySelector('.nav-bg');
var nav = document.querySelector('nav');

function toggleMenu() {
    if(nav.classList.contains('menu-opened')){
        nav.classList.remove('menu-opened')
        navBg.style.opacity = '0'
        setTimeout(() => {
            nav.classList.add('display-none')
            navBg.classList.add('display-none')
        }, 300)
    } else {
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

function goToLayer(layer) {
    var mainWindow = document.querySelector('.nav-layer-1');
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
var allElements = document.querySelectorAll('*');
var root = document.documentElement;
var allButtons = document.querySelectorAll('button');
var fontSizeStep = 0, fontWeightStep = 0, letterSpacingStep = 0, contrastStep = 0, animationStep = 0;

function changeFontSize() {
    fontSizeStep++;
    var step = fontSizeStep % 3;
    var btnInnerText = document.querySelector(".font-size-btn").querySelector(".nav-row-inner-text");

    if (step === 0) {
        root.style.fontSize = '100%';
        btnInnerText.innerText = `字體大小`;
    } else if (step === 1) {
        root.style.fontSize = '112.5%';
        btnInnerText.innerText = `字體大小 (大)`;
    } else if (step === 2) {
        root.style.fontSize = '125%';
        btnInnerText.innerText = `字體大小 (更大)`;
    } else if (step === 3) {
        root.style.fontSize = '87.5%';
        btnInnerText.innerText = `字體大小 (小)`;
    }
}

function changeFontWeight() {
    fontWeightStep++;
    var step = fontWeightStep % 3;
    var btnInnerText = document.querySelector(".font-weight-btn").querySelector(".nav-row-inner-text");

    if (step === 0) {
        root.style.setProperty('--font-weight', '400');
        root.style.setProperty('--font-weight-bold', '600');
        btnInnerText.innerText = `字體粗細`;
    } else if (step === 1) {
        root.style.setProperty('--font-weight', '500');
        root.style.setProperty('--font-weight-bold', '700');
        btnInnerText.innerText = `字體粗細 (粗)`;
    } else if (step === 2) {
        root.style.setProperty('--font-weight', '600');
        root.style.setProperty('--font-weight-bold', '700');
        btnInnerText.innerText = `字體粗細 (更粗)`;
    }
}


function changeLetterSpacing() {
    letterSpacingStep++;
    var step = letterSpacingStep % 3;
    var spacing = 'normal';
    var btnInnerText = document.querySelector(".letter-spacing-btn").querySelector(".nav-row-inner-text");

    if (step === 0) {
        spacing = 'normal';
        btnInnerText.innerText = `字體間距`;
    } else if (step === 1) {
        spacing = '0.3em';
        btnInnerText.innerText = `字體間距 (大)`;
    } else if (step === 2) {
        spacing = '0.5em';
        btnInnerText.innerText = `字體間距 (更大)`;
    }

    root.style.letterSpacing = spacing;
    allButtons.forEach(button => {button.style.letterSpacing = spacing;});
}

// 待完成
function changeContrast() {
    console.log('hi');
    if (root.classList.contains('mono-theme-palette')) {
        root.classList.remove('mono-theme-palette')
    } else {
        root.classList.add('mono-theme-palette')
    }
}

function changeAnimation() {
    animationStep++;
    var step = animationStep % 2;
    var btnInnerText = document.querySelector(".animation-btn").querySelector(".nav-row-inner-text");
    if (step === 0) {
        allElements.forEach(element => {element.classList.remove('transition-none');});
        btnInnerText.innerText = `關閉動畫`;
    } else if (step === 1) {
        allElements.forEach(element => {element.classList.add('transition-none');});
        btnInnerText.innerText = `開啟動畫`;
    }
}

function changeReset() {
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
    var btnInnerText = document.querySelector(".font-size-btn").querySelector(".nav-row-inner-text");
    btnInnerText.innerText = `字體大小`;
    var btnInnerText = document.querySelector(".font-weight-btn").querySelector(".nav-row-inner-text");
    btnInnerText.innerText = `字體粗細`;
    var btnInnerText = document.querySelector(".letter-spacing-btn").querySelector(".nav-row-inner-text");
    btnInnerText.innerText = `字體間距`;
    var btnInnerText = document.querySelector(".animation-btn").querySelector(".nav-row-inner-text");
    btnInnerText.innerText = `關閉動畫`;
}


function changeTheme() {
    if (root.classList.contains('dark-theme-palette')) {
        root.classList.remove('dark-theme-palette')
    } else {
        root.classList.add('dark-theme-palette')
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
