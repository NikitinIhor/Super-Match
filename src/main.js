import { about_slider } from './js/about_slider.js';
import { cookies } from './js/cookies.js';

document.addEventListener('DOMContentLoaded', () => {
  about_slider();
  cookies();
});

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.mySwiper', {
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
    let text = item.querySelector('.faq-text');
    if (text.style.display === 'block') {
      text.style.display = 'none';
    } else {
      text.style.display = 'block';
    }
  });
});
