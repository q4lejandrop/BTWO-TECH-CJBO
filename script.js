// Boxes to up catalogue
// window.addEventListener('scroll', function() {

//     var div = document.querySelector('.box-01');
//     var desplazamiento = window.scrollY;
//     div.style.transform = 'translateY(-' + desplazamiento / 35 + 'px)';

// });
// window.addEventListener('scroll', function() {

//     var div = document.querySelector('.box-02');
//     var desplazamiento = window.scrollY;
//     div.style.transform = 'translateY(-' + desplazamiento / 35 + 'px)';

// });
// window.addEventListener('scroll', function() {

//     var div = document.querySelector('.box-03');
//     var desplazamiento = window.scrollY;
//     div.style.transform = 'translateY(-' + desplazamiento / 35 + 'px)';

// });
// window.addEventListener('scroll', function() {

//     var div = document.querySelector('.box-04');
//     var desplazamiento = window.scrollY;
//     div.style.transform = 'translateY(-' + desplazamiento / 35 + 'px)';

// });

/* Line of state when scrolling down but horizontal */
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.getElementById('statusBar').style.width = scrolled + '%';
    });
    


// Add or remove title company
    const titleCompany = document.getElementById('title-company');    
    const scrollThreshold = 0;

    window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        titleCompany.classList.add('display-none');
        titleCompany.classList.add('animation-title');
    }
    else {
        titleCompany.classList.remove('display-none');
        titleCompany.classList.add('animation-title-r');
    }
}
);


// Stop carrusel
let imgCarrusel = document.getElementById('imgs-carrusel')
imgCarrusel.addEventListener('mouseover', (addStop))
function addStop() {
imgCarrusel.classList.add('stop-carrusel');
}
imgCarrusel.addEventListener('mouseout', (removeStop))
function removeStop() {
    imgCarrusel.classList.remove('stop-carrusel');
    }


//Show information about services
let contentServices = document.getElementById('content-services')
let despList01 = document.getElementById('desp-list-s01')
function showInfo01() {
    despList01.style.display = 'block';
    despList01.classList.add('animation-title-r');
}
let despList02 = document.getElementById('desp-list-s02')
function showInfo02() {
    despList02.style.display = 'block';
    despList02.classList.add('animation-title-r');
}

let despList03 = document.getElementById('desp-list-s03')
function showInfo03() {
    despList03.style.display = 'block';
    despList03.classList.add('animation-title-r');
}

// Zoom images products
// let imgProduct = document.getElementById('img-product')
// let filterProducts = document.getElementById('filter-products');
// function zoom() {
//     imgProduct.classList.add('img-product-zoom')
//     filterPdt.style.display = 'block';
//     imgProduct.classList.add('w-opacity');
//     filterPdt.classList.add('w-opacity');
// }
// function removeZoom() {
//     imgProduct.classList.remove('img-product-zoom')
//     filterPdt.style.display = 'none';
//     imgProduct.classList.add('wo-opacity');
//     filterPdt.classList.add('wo-opacity');
// }
// function zoom02() {
//     imgProduct.classList.add('img-product-zoom-02')
//     filterPdt02.style.display = 'block';
//     imgProduct.classList.add('w-opacity');
//     filterPdt02.classList.add('w-opacity');
// }
// function resize() {
//     imgProduct.classList.remove('img-product-zoom-02')
//     filterPdt02.style.display = 'none';
//     imgProduct.classList.add('wo-opacity');
//     filterPdt02.classList.add('wo-opacity');
// }

// Show information categories 
let bh01 = document.getElementById('bh-01')
let bh02 = document.getElementById('bh-02')
let bh03 = document.getElementById('bh-03')
let bh04 = document.getElementById('bh-04')
function showInfoServices01() {
    bh01.style.display = 'block'
}
function showInfoServices02() {
    bh02.style.display = 'block'
}
function showInfoServices03() {
    bh03.style.display = 'block'
}
function showInfoServices04() {
    bh04.style.display = 'block'
}

// Show navegation list
let buttonOpenNav = document.getElementById('button-open-nav')
let menuOculto = document.getElementById('menu-oculto')
function showNav(){
menuOculto.style.display = 'block';
buttonOpenNav.style.display = 'none';
itemsSubmenuProducts.style.display = 'none';
document.body.classList.add('scroll-off');
arrowDown.style.display = 'block';
arrowUp.style.display = 'none';
}
function removeNav(){
    menuOculto.style.display = 'none';
    buttonOpenNav.style.display = 'inline-flex';
    document.body.classList.remove('scroll-off');
}

// Show submenu products
let itemsSubmenuProducts = document.getElementById('items-submenu-products')
let arrowDown = document.getElementById('arrow-down')
let arrowUp = document.getElementById('arrow-up')
function showSubmenuProducts() {
    itemsSubmenuProducts.style.display = 'block';
    arrowDown.style.display = 'none';
    arrowUp.style.display = 'block';
}

function removeSubmenuProducts() {
    itemsSubmenuProducts.style.display = 'none';
    arrowDown.style.display = 'block';
    arrowUp.style.display = 'none';
}
let arrows = document.getElementById('arrows')
arrows.addEventListener('click', (removeSubmenuProducts))

// Hidden Navegation menu width >= 1001px
window.addEventListener('resize', hiddenNavWidth);
function hiddenNavWidth() {
    let width = window.innerWidth;
    if (width >= 1001){
        buttonOpenNav.style.display = 'none';
        menuOculto.style.display = 'none';
    }
    else {
        buttonOpenNav.style.display = 'inline-flex';
        menuOculto.style.display = 'none';
        document.body.classList.remove('scroll-off');
    }
}
hiddenNavWidth();

// Effect scroll smooth button back
document.getElementById('back').addEventListener('click', () => {
window.scrollTo({
    top: 0, 
    behavior: 'smooth'
});
});

// Remove navigation when scrolling down
let stateScroll = 140;
const headerMain = document.getElementById('header-main');
window.addEventListener('scroll', () => {
const $scrollTop = window.scrollY || document.documentElement.scrollTop;
if ($scrollTop > stateScroll) {
headerMain.style.top = '-170px';
} else {
    headerMain.style.top = '0';
}
stateScroll = $scrollTop <= 140 ? 140: $scrollTop;
});

// Zoom in images products
document.addEventListener('DOMContentLoaded', function(){
    const images = document.querySelectorAll('.zoom');

    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.2)';
        });

        image.addEventListener('mouseout', function() {
            image.style.transform = 'scale(1)';
        });
    });
});