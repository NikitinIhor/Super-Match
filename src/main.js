import { about_slider } from './js/about_slider.js';
import { animation } from './js/animation.js';
import { burger } from './js/burger.js';
import { cookies } from './js/cookies.js';
import { faq } from './js/faq.js';
import { features_slider } from './js/features_slider.js';
import { gallery_slider } from './js/gallery_slider.js';
import { reviews_slider } from './js/reviews_slider.js';

document.addEventListener('DOMContentLoaded', () => {
  animation();
  burger();
  about_slider();
  features_slider();
  reviews_slider();
  gallery_slider();
  faq();
  cookies();
});
