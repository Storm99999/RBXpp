const injectCSS = css => {
    let x = document.createElement('style');
    x.type = 'text/css'; // deprecated, but I do not give two shits
    x.innerText = css;
    document.head.appendChild(x);
    return x;
};

injectCSS(`
    #HomeContainer {
        border-radius: 16px;
        background: rgb(30, 30, 46);
        padding: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
    }

    .simplebar-content-wrapper {
        background: rgb(30, 30, 46)
    }

    #navigation {
        margin-left: 10px; 
        border-radius: 16px; 
        height: 600px;
        transform: translateY(5%); 
        background: rgb(30, 30, 46);
    }

    #container-main {
        background: rgb(40, 40, 55);
    }

    #header {
        background: rgb(40, 40, 55);
    }

    .content {
        background: rgb(40, 40, 55);
    }

    .container-fluid {
        background: rgb(30, 30, 46);
        border-radius: 16px;
        margin-top: 15px;
        margin-left: 10px;
        margin-right: 27px;
    }
`);


const elements = document.getElementsByClassName('content');

for (let i = 0; i < elements.length; i++) {
    elements[i].style.background = "rgb(40, 40, 55)";
}

const button = document.getElementById('skip-to-main-content');

if (button) {
    button.remove();
}




const changeBackgroundColor = (oldColor, newColor) => {
    const oldColorRgb = getComputedStyle(document.documentElement)
        .getPropertyValue('--old-bg-color');
    
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach(element => {
        const bgColor = window.getComputedStyle(element)
            .backgroundColor;
        if (bgColor === oldColor) {
            element.style.backgroundColor = newColor;
        }
    });
};

const oldColor = 'rgb(57, 59, 61)'; // Equivalent to #393b3d basically 
const newColor = 'rgb(30, 30, 46)';

changeBackgroundColor(oldColor, newColor);


const setBorderRadiusForElements = (radius) => {
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach(element => {
        const borderRadius = window.getComputedStyle(element)
            .borderRadius;
        if (borderRadius === '0px' || borderRadius === '0%') {
            element.style.borderRadius = radius;
        }
    });
};

setBorderRadiusForElements('16px');

window.onload = function () {
    const yea = setTimeout(function () {
        const element2 = document.querySelector('.game-sort-carousel-wrapper');
        
        if (element2) {
            element2.remove(); // Remove the element from the DOM
        }
        
        const button3 = document.querySelector('[data-testid="home-page-game-grid"]');
        
        if (button3) {
            button3.remove();
        }
        
    }, 900)
}
