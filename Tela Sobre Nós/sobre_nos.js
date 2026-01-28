const botao = document.querySelector('.botao');
const textoH4 = document.querySelector('.section5 h4');

botao.addEventListener('mouseenter', () => {
  textoH4.classList.add('underline-active');
});

botao.addEventListener('mouseleave', () => {
  textoH4.classList.remove('underline-active');
});