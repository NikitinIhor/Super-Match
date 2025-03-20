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

  let startX, endX, startY, endY;

  slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    e.preventDefault();
  });

  slider.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    handleSwipe();
  });

  function handleSwipe() {
    const horizontalDistance = endX - startX;
    const verticalDistance = endY - startY;

    if (Math.abs(horizontalDistance) > Math.abs(verticalDistance)) {
      if (horizontalDistance < 0) {
        index = (index + 1) % totalImages;
      } else if (horizontalDistance > 0) {
        index = (index - 1 + totalImages) % totalImages;
      }
      updateGallery();
    }
  }

  updateGallery();
}
