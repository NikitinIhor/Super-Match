export function gallery_slider() {
  const slider = document.querySelector('.gallery-slider');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const images = document.querySelectorAll('.gallery-slider img');
  const imagePerView = window.innerWidth >= 1200 ? 3 : 1;
  const sliderWidth = 205;
  const gap = 20;
  const totalImages = images.length;

  let index = 0;

  function updateGallery() {
    slider.style.transform = `translateX(-${index * (sliderWidth + gap)}px)`;
  }

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateGallery();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (index < images.length - imagePerView) {
      index++;
      updateGallery();
    }
  });

  let touchStartX, touchEndX, touchStartY, touchEndY;
  let isSwipingHorizontal = false;
  const swipeThreshold = 30;

  slider.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isSwipingHorizontal = false;
  });

  slider.addEventListener('touchmove', e => {
    touchEndX = e.touches[0].clientX;
    touchEndY = e.touches[0].clientY;

    const horizontalDistance = Math.abs(touchEndX - touchStartX);
    const verticalDistance = Math.abs(touchEndY - touchStartY);

    if (
      horizontalDistance > verticalDistance &&
      horizontalDistance > swipeThreshold
    ) {
      isSwipingHorizontal = true;
      e.preventDefault();
    } else {
      isSwipingHorizontal = false;
    }
  });

  slider.addEventListener('touchend', e => {
    if (isSwipingHorizontal) {
      if (touchEndX < touchStartX) {
        index = (index + 1) % totalImages;
      } else if (touchEndX > touchStartX) {
        index = (index - 1 + totalImages) % totalImages;
      }
      updateGallery();
    }
  });

  updateGallery();
}
