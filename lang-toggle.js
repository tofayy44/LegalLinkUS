
function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'en' ? 'es' : 'en';
  document.documentElement.lang = newLang;

  elements.forEach(el => {
    el.innerText = el.dataset[newLang];
  });
}
