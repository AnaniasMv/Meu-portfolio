const btnMobile = document.getElementById('btn-mobile');
function toggleMenu() {
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






let contador = 0;
let arr = document.querySelectorAll('._acas');
arr.forEach((v, i) => {
	if (v.innerText == 'Seguir') {
		setTimeout(() => {
			v.click();
			contador++;
			console.log('Você já seguiu ' + contador + ' pessoas');
		}, i * 5000);
	} else if (v.innerText == 'Seguindo') {
		console.log('x já segue este usuário.');
	} else if (v.innerText == 'Solicitado') {
		console.log('Você ja solicitou seguir este usuario.');
	} else {
		console.log('Não foi possível identificar o estado do botão.');
	}
});
let divToScroll = document.evaluate('//*[@id="mount_0_0_wB"]/div/div/div[3]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div/div[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

let scrollInterval = setInterval(() => {
	divToScroll.scrollTop += 100;
}, 50);

