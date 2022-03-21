const btnMobile = document.querySelector('#btn-mobile');
const toggleMenu = () => {
	const nav = document.querySelector('nav');
	nav.classList.toggle('active');
};
btnMobile.addEventListener('click', toggleMenu);

window.sr = ScrollReveal({ reset: false });
sr.reveal('h1', { duration: 2000 });
sr.reveal('h2', { duration: 2000 });
sr.reveal('.brands-content-item', {
	duration: 2500,
	distance: '30px',
	reset: true,
});
sr.reveal('.brands-content-item img', {
	duration: 2000,
	distance: '30px',
	delay: 700,
	reset: true,
});
sr.reveal('i', { duration: 1000, distance: '60px', delay: 1000 });
