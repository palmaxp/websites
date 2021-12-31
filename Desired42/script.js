const btnMobile = document.querySelector("#btn-mobile");
const toggleMenu = () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
};
btnMobile.addEventListener("click", toggleMenu);

window.sr = ScrollReveal({ reset: true  });
sr.reveal('h1', { duration: 2000 });
sr.reveal('h2', { duration: 2000 });
sr.reveal('h3', { duration: 2000 });
sr.reveal('img', { duration: 2000, delay: '500' });
sr.reveal('.brands-content-item', { duration: 500, distance: '30px'});
sr.reveal('.brands-content-item img', { duration: 1000, distance: '30px', delay: 500});
sr.reveal('i', { duration: 1000, distance: '60px', delay: 1000});