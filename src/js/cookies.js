export const cookies = () => {
  const cookies = document.querySelector('.cookies');
  const acceptButton = document.getElementById('accept-cookies');
  const rejectButton = document.getElementById('decline-cookies');
  const allLinks = document.querySelectorAll('.header-list');
  const burger = document.querySelector('.hamburger-menu');

  if (!cookies) {
    return;
  }

  function active() {
    document.documentElement.style.overflow = 'auto';
    document.body.style.cursor = 'default';
    burger.style.pointerEvents = 'auto';

    allLinks.forEach(element => {
      element.style.pointerEvents = 'auto';
    });
  }

  function disable() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.cursor = 'not-allowed';
    cookies.style.display = 'block';
    burger.style.pointerEvents = 'none';

    allLinks.forEach(element => {
      element.style.pointerEvents = 'none';
    });
  }

  if (localStorage.getItem('accepted') !== 'true') {
    disable();
  } else {
    cookies.style.display = 'none';
    active();
  }

  function handleCookieChoice(accepted) {
    localStorage.setItem('accepted', accepted);
    cookies.style.display = 'none';
    active();
  }

  if (acceptButton) {
    acceptButton.addEventListener('click', () => handleCookieChoice('true'));
  }

  if (rejectButton) {
    rejectButton.addEventListener('click', () => handleCookieChoice('true'));
  }
};
