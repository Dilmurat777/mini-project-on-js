const marker = document.getElementById('marker');
const item = document.querySelectorAll('nav a');
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu__burger-btn');
// const menuBtnClose = document.querySelector('.menu__burger-close');
const menuNav = document.querySelector('.menu');

window.addEventListener('scroll', function() {
	header.classList.toggle('sticky', window.scrollY > 0)
})

function indicator(e) {
	marker.style.left = e.offsetLeft+'px';
	marker.style.width = e.offsetWidth+'px';
}

item.forEach(link => {
	link.addEventListener('click', (e) => {
		indicator(e.target)
	})
})

menuBtn.addEventListener('click', function() {
	menuNav.classList.toggle('open')
	
})
// menuBtnClose.addEventListener('click', function() {
// 	menuNav.classList.remove('open')
// })