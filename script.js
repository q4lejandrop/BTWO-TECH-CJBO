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
// menuOculto.classList.remove('tok-animation-off');
menuOculto.classList.add('tok-animation');
}
function removeNav(){
    menuOculto.style.display = 'none';
    buttonOpenNav.style.display = 'inline-flex';
    document.body.classList.remove('scroll-off');
    menuOculto.classList.remove('tok-animation');
    // menuOculto.classList.add('tok-animation-off');
}

// Show submenu products
let itemsSubmenuProducts = document.getElementById('items-submenu-products')
let arrowDown = document.getElementById('arrow-down-products')
let arrowUp = document.getElementById('arrow-up-products')

stateArrowProductsMenuHidden = true;
let arrows = document.getElementById('arrows').addEventListener('click', () => {
if(stateArrowProductsMenuHidden) {
    showSubmenuProducts()
} else {
    removeSubmenuProducts()
}
stateArrowProductsMenuHidden = !stateArrowProductsMenuHidden;
});

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
            image.style.transform = 'scale(1.5)';
        });

        image.addEventListener('mouseout', function() {
            image.style.transform = 'scale(1)';
        });
    });
});

// Center image products
// let containerImgPdt = document.getElementsByClassName('container-img-pdt');
// let filterCenter = document.getElementById('filter-images-all');
// let zoom = document.getElementById('zoom');
// // .addEventListener('click', () => {
// //     containerImgPdt.classList.add('container-img-pdt-center');
// //     filterCenter.style.display = 'block';
// //     document.body.classList.add('scroll-off');
// //     image.style.position = 'absolute';
// // });
// function filterCenterToProducts() {
//      filterCenter.style.display = 'block';
//      zoom.style.position = 'absolute';
//      containerImgPdt.style.backgroundColor = 'purple';
// }

// Display info products
document.addEventListener('DOMContentLoaded', () => {
const btnDescrip01 = document.getElementById('btn-descrip-01');
const btnDescrip02 = document.getElementById('btn-descrip-02');
const btnDescrip03 = document.getElementById('btn-descrip-03');
const btnDescrip04 = document.getElementById('btn-descrip-04');
const btnDescrip05 = document.getElementById('btn-descrip-05');
const btnDescrip06 = document.getElementById('btn-descrip-06');
const btnDescrip07 = document.getElementById('btn-descrip-07');
const btnDescrip08 = document.getElementById('btn-descrip-08');
const btnDescrip09 = document.getElementById('btn-descrip-09');

btnDescrip01.addEventListener('click',  () => toggleDescription('producto1'));
btnDescrip02.addEventListener('click',  () => toggleDescription('producto2'));
btnDescrip03.addEventListener('click',  () => toggleDescription('producto3'));
btnDescrip04.addEventListener('click',  () => toggleDescription('producto4'));
btnDescrip05.addEventListener('click',  () => toggleDescription('producto5'));
btnDescrip06.addEventListener('click',  () => toggleDescription('producto6'));
btnDescrip07.addEventListener('click',  () => toggleDescription('producto7'));
btnDescrip08.addEventListener('click',  () => toggleDescription('producto8'));
btnDescrip09.addEventListener('click',  () => toggleDescription('producto9'));
});

function toggleDescription(productoId) {
    const descripcion = document.getElementById(productoId);
    if(descripcion.style.display === 'none' || descripcion.style.display === '') {
        descripcion.style.display = 'flex';
        // hiddenInfoProducts();
    } else {
        descripcion.style.display = 'none';
        // hiddenInfoProducts();
    }
    // let btnShowDescripProduct = document.querySelectorAll('.btn-show-descrip-product');
    // let btnHiddenDescripProduct = document.querySelectorAll('.btn-hidden-descrip-product');
    // // let infoProducts = document.querySelector('.ch');
    //  function showInfoProducts() {
    //     //  infoProducts.style.display = 'block';
    //      btnShowDescripProduct.style.display = 'none';
    //      btnHiddenDescripProduct.style.display = 'block';
    //  }
    //  function hiddenInfoProducts() {
    //     //  infoProducts.style.display = 'none';
    //      btnShowDescripProduct.style.display = 'block';
    //      btnHiddenDescripProduct.style.display = 'none';
    //  }
}



// let stateArrowInfo = true;
// document.getElementsByClassName('.btn-descrip-product').addEventListener('click', () => {
// if(stateArrowInfo) {
//     showInfoProducts();
// } else {
//     hiddenInfoProducts();
// }
// stateArrowInfo = !stateArrowInfo;
// });
// let btnShowDescripProduct = document.querySelectorAll('.btn-show-descrip-product');
// let btnHiddenDescripProduct = document.querySelectorAll('.btn-hidden-descrip-product');
// // let infoProducts = document.querySelector('.ch');
//  function showInfoProducts() {
//     //  infoProducts.style.display = 'block';
//      btnShowDescripProduct.style.display = 'none';
//      btnHiddenDescripProduct.style.display = 'block';
//  }
//  function hiddenInfoProducts() {
//     //  infoProducts.style.display = 'none';
//      btnShowDescripProduct.style.display = 'block';
//      btnHiddenDescripProduct.style.display = 'none';
//  }

// const dataProducts = {
//     dataMobo01: [
//         '▿ Socket AM4 para procesador AMD Ryzen (1a a 3a generación) y Athlon GE.',
//         '▿ Memoria DDR4 de 4 ranuras 3866 MHz (OC) de doble canal (capacidad total: 64 GB).',
//         '▿ 4 x SATA 6Gbit/s, 1x M.2 PCIe NVMe 4x / SATA 6 Gbit/s.',
//         '▿ 1 PCI-Express 3.0 16x slot.'
//     ],
//     dataMobo02: [ 
//         '▿ Socket LGA1700.',
//         '▿ Z790 Chipset.',
//         '▿ 4 x DIMM, Max. 192GB, DDR5 7800.',
//         '▿ 2 x PCIe 5.0 x16 slots.',
//         '▿ Wi-Fi 6E.',
//         '▿ 1 x ThunderboltTM.'
//     ], 
//     dataMobo03: [
//         '▿ Socket AMD AM4 RyzenTM 3000, 3000.',
//         '▿ Soporta memoria DDR4 4733+ (OC).',
//         '▿ 4 x DIMM, Max. 192GB, DDR5 7800.',
//         '▿ 1 x PCIe 3.0 x16, 1 x PCIe 3.0 x1.',
//         '▿ Audio 7.1.',
//         '▿ 4 x SATA3, 1 x Ultra M.2(Gen3 x4 & SATA3) • 6 x USB 2.0(2 x Rear, 4 x Front).'
//     ]
// };




// dataCpu01: [ 
//     '▿ Zócalo de CPU Socket AM5.',
//     '▿ Modelo de gráficos: AMD RadeonTM Graphics, 2 Core, 2200 MHz.',
//     '▿ # de núcleos de CPU: 8.',
//     '▿ # de hilos: 16.',
//     '▿ Reloj de aumento máx.: Hasta 5.0GHz. Reloj base: 4.2GHz.',
//     '▿ TDP predeterminado: 120W.'
// ]
// btnDescrip01.addEventListener('click',  showInfoProducts());
// btnDescrip02.addEventListener('click',  showInfoProducts());
// btnDescrip03.addEventListener('click',  showInfoProducts());
// btnDescrip04.addEventListener('click',  showInfoProducts());
// btnDescrip05.addEventListener('click',  showInfoProducts());
// btnDescrip06.addEventListener('click',  showInfoProducts());
// btnDescrip07.addEventListener('click',  showInfoProducts());
// btnDescrip08.addEventListener('click',  showInfoProducts());
// btnDescrip09.addEventListener('click',  showInfoProducts()); 