document.addEventListener("DOMContentLoaded", () => {
    const data = [
        { name: "Maria Lopez", category: "Immigration", location: "Los Angeles, CA", phone: "555-987-6543" },
        { name: "Jason Park", category: "Criminal", location: "Chicago, IL", phone: "555-333-2121" },
        { name: "Angela Wu", category: "Family", location: "Houston, TX", phone: "555-432-7788" },
        { name: "Ahmed Khan", category: "Civil", location: "Phoenix, AZ", phone: "555-765-3421" }
    ];

    const searchBox = document.getElementById("searchBox");
    const categoryFilter = document.getElementById("categoryFilter");
    const results = document.getElementById("results");

    function render(lawyers) {
        results.innerHTML = lawyers.map(lawyer => `
            <div class="card">
                <h3>${lawyer.name}</h3>
                <p><strong>Field:</strong> ${lawyer.category}</p>
                <p><strong>Location:</strong> ${lawyer.location}</p>
                <p><strong>Phone:</strong> ${lawyer.phone}</p>
            </div>
        `).join("");
    }

    function filterResults() {
        const query = searchBox.value.toLowerCase();
        const category = categoryFilter.value;
        const filtered = data.filter(l => 
            (l.name.toLowerCase().includes(query) || 
             l.location.toLowerCase().includes(query)) &&
            (category === "" || l.category === category)
        );
        render(filtered);
    }

    searchBox.addEventListener("input", filterResults);
    categoryFilter.addEventListener("change", filterResults);

    render(data);
});
