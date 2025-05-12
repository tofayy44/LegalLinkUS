function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    const currentLang = el.textContent.trim() === el.getAttribute('data-en') ? 'en' : 'es';
    el.textContent = el.getAttribute(currentLang === 'en' ? 'data-es' : 'data-en');
  });
}