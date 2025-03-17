import { about_slider } from './js/about_slider.js';
import { cookies } from './js/cookies.js';
import { reviews_slider } from './js/reviews_slider.js';
import { gallery_slider } from './js/gallery_slider.js';
import { faq } from './js/faq.js';

document.addEventListener('DOMContentLoaded', () => {
  about_slider();
  reviews_slider();
  gallery_slider();
  faq();
  cookies();
});
