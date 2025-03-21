export function about_slider() {
  const list = document.querySelector('.about-list');
  const dots = document.querySelectorAll('.about-dot');
  const slideWidth = 280;
  const gap = 80;
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

  let touchStartX, touchEndX, touchStartY, touchEndY;
  let isSwipingHorizontal = false;
  const swipeThreshold = 30;

  list.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isSwipingHorizontal = false;
  });

  list.addEventListener('touchmove', e => {
    touchEndX = e.touches[0].clientX;
    touchEndY = e.touches[0].clientY;

    const horizontalDistance = Math.abs(touchEndX - touchStartX);
    const verticalDistance = Math.abs(touchEndY - touchStartY);

    if (
      horizontalDistance > verticalDistance &&
      horizontalDistance > swipeThreshold
    ) {
      isSwipingHorizontal = true;
      // e.preventDefault();
    } else {
      isSwipingHorizontal = false;
    }
  });

  list.addEventListener('touchend', e => {
    if (isSwipingHorizontal) {
      if (touchEndX < touchStartX) {
        // Swipe left
        index = (index + 1) % totalSlides;
      } else if (touchEndX > touchStartX) {
        // Swipe right
        index = (index - 1 + totalSlides) % totalSlides;
      }
      updateSlider();
    }
  });

  updateSlider();
}
