export function about_slider() {
  const list = document.querySelector('.about-list');
  const dots = document.querySelectorAll('.dot');
  const slideWidth = 270;
  const gap = 40;
  let index = 0;
  const totalSlides = dots.length;

  function updateSlider() {
    list.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      updateSlider();
    });
  });

  let touchStartX, touchEndX;

  list.addEventListener(
    'touchstart',
    e => (touchStartX = e.touches[0].clientX)
  );
  list.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX) {
      index = (index + 1) % totalSlides;
    } else if (touchEndX > touchStartX) {
      index = (index - 1 + totalSlides) % totalSlides;
    }
    updateSlider();
  }

  updateSlider();
}
