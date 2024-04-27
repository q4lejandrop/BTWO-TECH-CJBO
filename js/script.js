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

window.addEventListener('scroll', () => {
const scrollTop = document.documentElement.scrollTop;
const scrollHeight = document.documentElement.scrollHeight;
const clientHeight = document.documentElement.clientHeight;

const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
document.getElementById('statusBar').style.width = scrolled + '%';
});


// Change color logo
window.addEventListener('scroll', () => {
const logo = document.getElementById('logo');
const distanceY = window.pageYOffset || document.documentElement.scrollTop;
const scrollChangePoint = 75;

if (distanceY > scrollChangePoint){
logo.src = "/logo/main-logo-white-transparent-V02.png";
}
else {
    logo.src = "/logo/logo-with-out-text.png";
}

});

// Show div
window.addEventListener('scroll', () => {
    const borra = document.getElementById('borra');
    const scrollThreashold = 100;
    
    if (window.scrollY > scrollThreashold){

        borra.classList.add('borrador');
    }

    else {borra.classList.remove('borrador');

    }
});
