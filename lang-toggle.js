
function toggleLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    const isSpanish = document.body.classList.toggle('spanish');
    elements.forEach(el => {
        el.innerText = isSpanish ? el.dataset.es : el.dataset.en;
    });
}
