
document.addEventListener("DOMContentLoaded", function () {
  const enSections = document.querySelectorAll('[id$="-en"]');
  const esSections = document.querySelectorAll('[id$="-es"]');
  const toggleBtn = document.getElementById("langToggleBtn");
  if (!toggleBtn) return;
  toggleBtn.addEventListener("click", () => {
    enSections.forEach(s => s.style.display = s.style.display === "none" ? "block" : "none");
    esSections.forEach(s => s.style.display = s.style.display === "none" ? "block" : "none");
  });
});
