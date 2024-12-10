document.getElementById("file-input").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        Papa.parse(file, {
            complete: function(results) {
                displayCandidates(results.data);
            },
            header: true
        });
    }
});

function displayCandidates(data) {
    const container = document.querySelector(".container");
    container.innerHTML = '';  // Vyčisti obsah pred zobrazením nových údajov

    data.forEach(candidate => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h2>${candidate.Meno}</h2>
            <p><strong>E-mail:</strong> ${candidate.E-mail}</p>
            <p><strong>Rok narodenia:</strong> ${candidate["Rok narodenia"]}</p>
            <p><strong>Mesto:</strong> ${candidate.Mesto}</p>
            <p><strong>Tagy:</strong> ${candidate.Tagy}</p>
            <p><strong>Skills:</strong> ${candidate.Skill}</p>
            <p><strong>Kategória:</strong> ${candidate.Kategória}</p>
            <p><strong>Aktivita uchádzača:</strong> ${candidate["Aktivita uchádzača"]}</p>
            <a href="${candidate.Životopis}" target="_blank">Zobraziť životopis</a>
        `;
        container.appendChild(card);
    });
}
