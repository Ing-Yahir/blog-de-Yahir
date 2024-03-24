
window.onload = function () {

    alert('blog de ing_Yahir');

    document.body.style.display = 'block';
};

/* FUNCION AMBURGESA*/


function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    var nav = document.querySelector('nav');
    var menuToggle = document.querySelector('.menu-toggle');

    if (!nav.contains(event.target) && event.target !== menuToggle) {
        nav.classList.remove('active');
    }
});