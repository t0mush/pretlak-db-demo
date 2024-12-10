// Prednastavené údaje kandidátov
const candidates = [
    { name: "Elena Biba", email: "helen.biba.a@gmail.com", birthYear: 1998, city: "Banská Bystrica", tags: "Animation, Brand Design", skill: "mid, senior", category: "Dizajnéri", activity: "Aktívne hľadá", cv: "Stiahnuť životopis", portfolio: "-" },
    { name: "Tatiana Polakova", email: "polak.tatiana@gmail.com", birthYear: 1986, city: "Bratislava", tags: "Project Management, English", skill: "mid", category: "Non-Tech", activity: "Aktívne hľadá", cv: "Stiahnuť životopis", portfolio: "-" },
    { name: "Michaela Sališová", email: "salisovam@gmail.com", birthYear: 1998, city: "Bratislava", tags: "Google Analytics, Media", skill: "junior, mid", category: "Marketéri, Kreatívci", activity: "Aktívne hľadá", cv: "Stiahnuť životopis", portfolio: "-" },
    { name: "Nazarii Koval", email: "koval.nazarii.il@gmail.com", birthYear: 1999, city: "Bratislava", tags: "Graphic Design, Illustration", skill: "mid, junior", category: "Dizajnéri, Kreatívci", activity: "Aktívne hľadá", cv: "Stiahnuť životopis", portfolio: "Stiahnuť portfólio" },
    { name: "Gabriela Martonová", email: "martonovagabriela@gmail.com", birthYear: 1991, city: "Bratislava", tags: "Graphic Design, Copywriting", skill: "mid, junior", category: "Kreatívci, Non-Tech", activity: "Aktívne hľadá", cv: "Stiahnuť životopis", portfolio: "Stiahnuť portfólio" }
];

// Funkcia na zobrazenie kandidátov
const displayCandidates = () => {
    const tableBody = document.querySelector("#candidates-table tbody");
    candidates.forEach(candidate => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${candidate.name}</td>
            <td>${candidate.email}</td>
            <td>${candidate.birthYear}</td>
            <td>${candidate.city}</td>
            <td>${candidate.tags}</td>
            <td>${candidate.skill}</td>
            <td>${candidate.category}</td>
            <td>${candidate.activity}</td>
            <td><a href="#">${candidate.cv}</a></td>
            <td><a href="#">${candidate.portfolio}</a></td>
        `;
        tableBody.appendChild(row);
    });

    // Po načítaní kandidátov, zmeníme všetky odkazy
    document.querySelectorAll('a').forEach(link => {
        link.setAttribute('href', 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXZpMmo1ZjViOGQxeTFzaXVsZjE1b3pmNXk0Y3cxMXVocGZxaWpucyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/duNowzaVje6Di3hnOu/giphy.webp');
    });
};

// Zavolanie funkcie na zobrazenie dát pri načítaní stránky
window.onload = displayCandidates;
