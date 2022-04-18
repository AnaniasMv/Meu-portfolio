const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

}
btnMobile.addEventListener('click', toggleMenu);

$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body, main').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});




