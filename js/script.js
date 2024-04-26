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



