
function toggleLanguage() {
    const elements = document.querySelectorAll("[data-en], [data-es]");
    const currentLang = document.documentElement.lang;

    document.documentElement.lang = currentLang === "en" ? "es" : "en";

    elements.forEach(el => {
        if (document.documentElement.lang === "es") {
            el.innerText = el.getAttribute("data-es");
        } else {
            el.innerText = el.getAttribute("data-en");
        }
    });
}
