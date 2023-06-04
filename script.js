var navBg = document.querySelector('.nav-bg');
var nav = document.querySelector('nav');
var menuOpenBtn = document.querySelector('.menu-open-btn');
var menuCloseBtn = document.querySelector('.menu-close-btn');

function toggleMenu(e) {
    if(nav.classList.contains('menu-opened')){
        var allFocusableElements = document.querySelectorAll('button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])');
        allFocusableElements.forEach(element => {element.setAttribute('tabindex', '0')});
        var allFocusableElementsInNav = document.querySelectorAll('nav button, nav input, nav select, nav textarea, nav a[href], nav [tabindex]:not([tabindex="-1"])');
        allFocusableElementsInNav.forEach(element => {element.setAttribute('tabindex', '-1')});

        menuOpenBtn.setAttribute('aria-expanded', 'false');
        menuCloseBtn.setAttribute('aria-expanded', 'false');
        if (e.pointerId === -1) {menuOpenBtn.focus()};

        nav.setAttribute('aria-hidden', 'true');
        nav.classList.remove('menu-opened')
        navBg.style.opacity = '0'
        setTimeout(() => {
            nav.classList.add('display-none')
            navBg.classList.add('display-none')
        }, 300)

    } else {
        var allFocusableElements = document.querySelectorAll('button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])');
        allFocusableElements.forEach(element => {element.setAttribute('tabindex', '-1')});
        var allFocusableElementsInNav = document.querySelectorAll('nav button, nav input, nav select, nav textarea, nav a[href], nav [tabindex]:not([tabindex="-1"])');
        allFocusableElementsInNav.forEach(element => {element.setAttribute('tabindex', '0')});

        menuOpenBtn.setAttribute('aria-expanded', 'true');
        menuCloseBtn.setAttribute('aria-expanded', 'true');
        nav.setAttribute('aria-hidden', 'false');
        nav.classList.remove('display-none');
        navBg.classList.remove('display-none');
        if (e.pointerId === -1) {menuCloseBtn.focus()};

        setTimeout(() => {
            nav.classList.add('menu-opened')
            navBg.style.opacity = '0.3'
        }, 10)
    }

}
// toggleMenu()

var translatePercentage = 20;
var mainWindow = document.querySelector('.nav-layer-1');

function goToLayer(e, layer) {
    console.log('go');
    var layerWindow = document.querySelector(`.nav-layer-${layer}`);
    var layerBtn = layerWindow.children[0];

    layerWindow.classList.remove('display-none');
    if (e.pointerId === -1) {layerBtn.focus()};

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


function backToFirstLayer(e, layer) {
    console.log(e);
    var mainWindow = document.querySelector('.nav-layer-1');
    var layerWindow = document.querySelector(`.nav-layer-${layer}`);
    var mainWindowLayerBtn = document.querySelector(`[onclick="goToLayer(event, ${layer})"]`);

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

    if (e.pointerId === -1) {mainWindowLayerBtn.focus()};
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


function changeContrast() {
    contrastStep++;
    var step = contrastStep % 2;
    if (step === 0) {
        contrastBtn.setAttribute('aria-label', '切換去飽和狀態，目前狀態：關閉')
        root.classList.remove('mono-theme-palette')
        allImages.forEach(image => {image.style.filter = 'grayscale(0)';});
        console.log(allImages[0].style);
        contrastBtn.innerText = `去飽和：關閉`;
    } else if (step === 1) {
        contrastBtn.setAttribute('aria-label', '切換去飽和狀態，目前狀態：關閉')
        root.classList.add('mono-theme-palette')
        allImages.forEach(image => {image.style.filter = 'grayscale(1)';});
        contrastBtn.innerText = `去飽和：開啟`;
    }
}

function changeFontSize() {
    fontSizeStep++;
    var step = fontSizeStep % 4;

    if (step === 0) {
        fontSizeBtn.setAttribute('aria-label', '切換字體大小，目前大小：中')
        root.style.fontSize = '100%';
        fontSizeBtn.innerText = `字體大小：中`;
    } else if (step === 1) {
        fontSizeBtn.setAttribute('aria-label', '切換字體大小，目前大小：大')
        root.style.fontSize = '112.5%';
        fontSizeBtn.innerText = `字體大小：大`;
    } else if (step === 2) {
        fontSizeBtn.setAttribute('aria-label', '切換字體大小，目前大小：更大')
        root.style.fontSize = '125%';
        fontSizeBtn.innerText = `字體大小：更大`;
    } else if (step === 3) {
        fontSizeBtn.setAttribute('aria-label', '切換字體大小，目前大小：小')
        root.style.fontSize = '87.5%';
        fontSizeBtn.innerText = `字體大小：小`;
    }
}

function changeFontWeight() {
    fontWeightStep++;
    var step = fontWeightStep % 3;

    if (step === 0) {
        fontWeightBtn.setAttribute('aria-label', '切換字體粗細，目前粗細：中')
        root.style.setProperty('--font-weight', '400');
        root.style.setProperty('--font-weight-bold', '600');
        fontWeightBtn.innerText = `字體粗細：中`;
    } else if (step === 1) {
        fontWeightBtn.setAttribute('aria-label', '切換字體粗細，目前粗細：粗')
        root.style.setProperty('--font-weight', '500');
        root.style.setProperty('--font-weight-bold', '700');
        fontWeightBtn.innerText = `字體粗細：粗`;
    } else if (step === 2) {
        fontWeightBtn.setAttribute('aria-label', '切換字體粗細，目前粗細：更粗')
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
        letterSpacingBtn.setAttribute('aria-label', '切換字體間距，目前間距：中')
        spacing = 'normal';
        letterSpacingBtn.innerText = `字體間距：中`;
    } else if (step === 1) {
        letterSpacingBtn.setAttribute('aria-label', '切換字體間距，目前間距：大')
        spacing = '0.3em';
        letterSpacingBtn.innerText = `字體間距：大`;
    } else if (step === 2) {
        letterSpacingBtn.setAttribute('aria-label', '切換字體間距，目前間距：更大')
        spacing = '0.5em';
        letterSpacingBtn.innerText = `字體間距：更大`;
    }

    root.style.letterSpacing = spacing;
    allButtons.forEach(button => {button.style.letterSpacing = spacing;});
}

function changeAnimation() {
    animationStep++;
    var step = animationStep % 2;
    if (step === 0) {
        animationBtn.setAttribute('aria-label', '切換動畫狀態，目前狀態：開啟')
        allElements.forEach(element => {element.classList.remove('transition-none');});
        animationBtn.innerText = `動畫：開啟`;
    } else if (step === 1) {
        animationBtn.setAttribute('aria-label', '切換動畫狀態，目前狀態：關閉')
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
        themeBtn.setAttribute('aria-label', '切換深色模式，目前狀態：關閉')
        root.classList.remove('dark-theme-palette');
        themeBtn.innerText = `深色模式：關閉`;
        themeBtnIcon.innerText = `light_mode`;
    } else {
        themeBtn.setAttribute('aria-label', '切換深色模式，目前狀態：開啟')
        root.classList.add('dark-theme-palette')
        themeBtn.innerText = `深色模式：開啟`;
        themeBtnIcon.innerText = `dark_mode`;
    }
}

var lastElement = document.querySelectorAll('.last-element');
lastElement.forEach(element => {
    element.addEventListener('focus', () => {
        var focusedElement = document.activeElement;
        var goToElement = document.querySelector(`${focusedElement.innerText}`);
        goToElement.focus();
    });
});

// slider
var sliderList = document.querySelector('.slider-list')
var sliderSteps = document.querySelectorAll('.slider-steps')
var sliderIndex = 0

function sliderStepPush(push) {
    sliderIndex += push

    if (sliderIndex < 0) {
        sliderIndex = 2
    } else if (sliderIndex > 2) {
        sliderIndex = 0
    }
    sliderStepRender(sliderIndex)
}

function sliderStepRender(step) {
    sliderIndex = step
    sliderList.style.translate = '-' + sliderList.clientWidth*step + 'px'
    
    var sliderStepsButtons = document.querySelector('.slider-steps').querySelectorAll('button')

    sliderStepsButtons.forEach((button, index) => {
        if (index === step) {
            button.setAttribute('aria-label', 'active-slider')
        } else {
            button.setAttribute('aria-label', 'inactive-slider')
        }
    })
}