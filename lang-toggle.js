function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  const currentLang = elements[0].textContent === elements[0].dataset.en ? 'en' : 'es';
  elements.forEach(el => {
    el.textContent = currentLang === 'en' ? el.dataset.es : el.dataset.en;
  });
}