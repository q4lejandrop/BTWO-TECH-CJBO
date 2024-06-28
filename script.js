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







