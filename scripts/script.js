const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
	
	
}
btnMobile.addEventListener('click', toggleMenu);


const $menu = document.getElementById('nav');
const $btnMenu1 = document.querySelector('.btnMenu1');
const $btnMenu2 = document.querySelector('.btnMenu2');
const $btnMenu3 = document.querySelector('.btnMenu3');
const $btnMenu4 = document.querySelector('.btnMenu4');

$btnMenu1.addEventListener('click', function () {
	$menu.classList.remove('active')
});

$btnMenu2.addEventListener('click', function () {
	$menu.classList.remove('active')
});

$btnMenu3.addEventListener('click', function () {
	$menu.classList.remove('active')
});

$btnMenu4.addEventListener('click', function () {
	$menu.classList.remove('active')
});






