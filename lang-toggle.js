
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === "en" ? "es" : "en";
    document.documentElement.lang = newLang;

    document.querySelectorAll("[data-en]").forEach(el => {
        el.textContent = newLang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-es");
    });
}
