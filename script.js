// Boxes
window.addEventListener('scroll', function() {

    var div = document.querySelector('.box-01');
    var desplazamiento = window.scrollY;
    div.style.transform = 'translateY(-' + desplazamiento / 15 + 'px)';

});
window.addEventListener('scroll', function() {

    var div = document.querySelector('.box-02');
    var desplazamiento = window.scrollY;
    div.style.transform = 'translateY(-' + desplazamiento / 15 + 'px)';

});
window.addEventListener('scroll', function() {

    var div = document.querySelector('.box-03');
    var desplazamiento = window.scrollY;
    div.style.transform = 'translateY(-' + desplazamiento / 15 + 'px)';

});
window.addEventListener('scroll', function() {

    var div = document.querySelector('.box-04');
    var desplazamiento = window.scrollY;
    div.style.transform = 'translateY(-' + desplazamiento / 15 + 'px)';

});

/* Scroll
Bar */
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



