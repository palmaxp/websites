const item = document.querySelector('.item');
const mapa = document.querySelector('.mapa img');
const itens = document.querySelectorAll('.item');
addEventListener("scroll", verificar);
function verificar(){
  if(item.getBoundingClientRect(item).y < 600){
    itens.forEach(element => {
      element.classList.add('active');
    });
  }
  if(mapa.getBoundingClientRect(item).y < 600){
    mapa.classList.add('active');
  }
}
