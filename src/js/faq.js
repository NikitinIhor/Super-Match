export function faq() {
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
}
