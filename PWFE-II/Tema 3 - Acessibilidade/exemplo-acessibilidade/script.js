const toogleButton = document.getElementsByClassName('toggle__button')[0];


toogleButton.addEventListener('click', () => {
  toogleButton.classList.toggle('toggle__button--on');
});