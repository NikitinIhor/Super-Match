// export const cookies = () => {
//   window.addEventListener('load', () => {
//     const accept = localStorage.getItem('accept');
//     const cookies = document.querySelector('.cookies');
//     const accept_cookies = document.querySelector('#accept-cookies');
//     const decline_cookies = document.querySelector('#decline-cookies');

//     if (accept) {
//       cookies.style.display = 'none';
//       document.body.classList.remove('no-scroll');
//     } else {
//       document.body.classList.add('no-scroll');
//     }

//     accept_cookies.addEventListener('click', () => {
//       localStorage.setItem('accept', 'true');
//       document.getElementById('cookies-banner').style.display = 'none';
//       document.body.classList.remove('no-scroll');
//     });

//     document.getElementById('decline-cookies').addEventListener('click', () => {
//       localStorage.setItem('cookiesAccepted', 'false');
//       document.getElementById('cookies-banner').style.display = 'none';
//       document.body.classList.remove('no-scroll');
//     });
//   });
// };
