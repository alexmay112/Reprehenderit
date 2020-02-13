export default () => {
  function showMenu() {
    document.querySelector('.menu__overlay').style.display = 'block';
  }

  function closeMenu() {
    document.querySelector('.menu__overlay').style.display = 'none';
  }

  document.querySelector('.menu__button').addEventListener('click', showMenu);
  document.querySelector('.menu__close').addEventListener('click', closeMenu);
};
