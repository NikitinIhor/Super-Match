export const animation = () => {
  const titles = document.querySelectorAll('.animation-title');
  const texts = document.querySelectorAll('.animation-text');
  const images = document.querySelectorAll('.hero-images img');
  const howList = document.querySelectorAll('.how-item');
  const faqList = document.querySelectorAll('.faq-item');
  const aboutItems = document.querySelectorAll('.animation-item');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  images.forEach(image => observer.observe(image));
  howList.forEach(item => observer.observe(item));
  faqList.forEach(item => observer.observe(item));
  titles.forEach(section => observer.observe(section));
  texts.forEach(section => observer.observe(section));
  aboutItems.forEach(item => observer.observe(item));
};
