export const burger = () => {
  const menuToggle = document.getElementById('menu__toggle');
  const menuItems = document.querySelectorAll('.menu__item a');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuToggle.checked = false;
    });
  });
};
