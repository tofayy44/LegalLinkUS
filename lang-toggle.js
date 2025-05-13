
document.addEventListener("DOMContentLoaded", function () {
  const enSection = document.getElementById("rights-en");
  const esSection = document.getElementById("rights-es");
  const toggleBtn = document.getElementById("langToggleBtn");

  toggleBtn.addEventListener("click", () => {
    if (enSection.style.display === "none") {
      enSection.style.display = "block";
      esSection.style.display = "none";
    } else {
      enSection.style.display = "none";
      esSection.style.display = "block";
    }
  });
});
