document.addEventListener("DOMContentLoaded", () => {
  fetch('lawyers.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("lawyer-list");
      data.forEach(lawyer => {
        const div = document.createElement("div");
        div.className = "lawyer-card" + (lawyer.verified ? " verified" : "");
        div.innerHTML = `
          <h3>${lawyer.name}</h3>
          <p>${lawyer.specialty} – ${lawyer.location}</p>
          ${lawyer.verified ? '<span class="badge">Verified</span>' : ''}
        `;
        container.appendChild(div);
      });
    });
});