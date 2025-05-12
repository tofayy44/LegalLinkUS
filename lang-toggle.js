
function toggleLanguage() {
    const lang = document.documentElement.lang;
    document.documentElement.lang = (lang === 'en') ? 'es' : 'en';
    alert("Language switched to " + document.documentElement.lang.toUpperCase());
}
