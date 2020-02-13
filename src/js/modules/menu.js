export default () => {
  function showMenu() {
    document.querySelector('.menu__overlay').style.display = 'block';
    document.querySelector('html').style.overflowY = 'hidden';
  }

  function closeMenu() {
    document.querySelector('.menu__overlay').style.display = 'none';
    document.querySelector('html').style.overflowY = 'auto';
  }

  document.querySelector('.menu__button').addEventListener('click', showMenu);
  document.querySelector('.menu__close').addEventListener('click', closeMenu);

  window.addEventListener(`resize`, event => {
    if (document.documentElement.clientWidth > 1023) {
      closeMenu();
    }
  }, false);
};
