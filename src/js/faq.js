export function faq() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', event => {
      event.stopPropagation();
      item.classList.toggle('open');
      let text = item.querySelector('.faq-text');
      if (item.classList.contains('open')) {
        text.style.maxHeight = text.scrollHeight + 'px';
      } else {
        text.style.maxHeight = '0';
      }
    });
  });

  document.addEventListener('click', event => {
    faqItems.forEach(item => {
      if (item.classList.contains('open')) {
        item.classList.remove('open');
        let text = item.querySelector('.faq-text');
        text.style.maxHeight = '0';
      }
    });
  });
}
