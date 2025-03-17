export const cookies = () => {
  const cookies = document.querySelector('.cookies');
  const acceptButton = document.getElementById('accept-cookies');
  const rejectButton = document.getElementById('decline-cookies');
  const allLinks = document.querySelectorAll('.header-list');

  if (!cookies) {
    return;
  }

  if (localStorage.getItem('accepted') !== 'true') {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.cursor = 'not-allowed';
    cookies.style.display = 'block';

    allLinks.forEach(element => {
      element.style.pointerEvents = 'none';
    });
  } else {
    cookies.style.display = 'none';
  }

  function handleCookieChoice(accepted) {
    localStorage.setItem('accepted', accepted);
    cookies.style.display = 'none';

    if (accepted === 'true') {
      document.documentElement.style.overflow = '';
      document.body.style.cursor = '';
    }
  }

  if (acceptButton) {
    acceptButton.addEventListener('click', () => handleCookieChoice('true'));
  }

  if (rejectButton) {
    rejectButton.addEventListener('click', () => handleCookieChoice('true'));
  }
};
