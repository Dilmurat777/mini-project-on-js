const marker = document.getElementById('marker');
const item = document.querySelectorAll('nav a');
const header = document.querySelector('header');

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