// Prednastavené údaje kandidátov
const candidatesData = [
    {
        "Meno": "Elena Biba",
        "E-mail": "helen.biba.a@gmail.com",
        "Rok narodenia": "1998",
        "Mesto": "Banská Bystrica",
        "Tagy": "Animation, Brand Design, Digital Product Design, Graphic Design, Illustration, UI, UX, Web Design, DTP",
        "Skill": "mid, senior",
        "Kategória": "Dizajnéri",
        "Aktivita uchádzača": "Aktívne hľadá",
        "Životopis": "Stiahnuť životopis",
        "Portfólio / Iná príloha": "-"
    },
    {
        "Meno": "Tatiana Polakova",
        "E-mail": "polak.tatiana@gmail.com",
        "Rok narodenia": "1986",
        "Mesto": "Bratislava",
        "Tagy": "Project Management, English",
        "Skill": "mid",
        "Kategória": "Non-Tech",
        "Aktivita uchádzača": "Aktívne hľadá",
        "Životopis": "Stiahnuť životopis",
        "Portfólio / Iná príloha": "-"
    },
    {
        "Meno": "Mgr. Katarína S. Plachá",
        "E-mail": "placha.k.s@gmail.com",
        "Rok narodenia": "1999",
        "Mesto": "Bratislava",
        "Tagy": "B2B Marketing, Consulting, Copywriting, Ideamaking, Photo/Video, Redactor, Manifest, Sales/Business Development, Content Marketing, Social Media, Account Management, Project Management, Ukraine positive 🇺🇦, Office Manager/Assistant, English, Microsoft Excel, Customer Support, Leadership/Management, Brand Design, Digital Product Design, Graphic Design, Illustration, Art Direction, Media, Event, PR, Data Analyst, Proofreading, Google Data Studio, Google Analytics, Google Tag Manager, E-mail Marketing, Facebook Business Manager, Market Research/Analysis, Marketing Management, Media planner, Strategy, Creative Direction, Video Editing, Growth Hacker, PPC, SEO, .NET, Microsoft Power BI, Google Search Console, TikTok, UI, UX, Web Design",
        "Skill": "junior, mid, senior, graduate, expert",
        "Kategória": "Non-Tech, Kreatívci, Marketéri, Dizajnéri, Developeri",
        "Aktivita uchádzača": "Aktívne hľadá",
        "Životopis": "Stiahnuť životopis",
        "Portfólio / Iná príloha": "Stiahnuť portfólio"
    },
    // Môžeš pridať ďalších kandidátov tu
];

// Funkcia na zobrazenie kandidátov
function displayCandidates(data) {
    const container = document.getElementById("candidates-container");
    container.innerHTML = '';  // Vyčisti obsah pred zobrazením nových údajov

    data.forEach(candidate => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h2>${candidate["Meno"]}</h2>
            <p><strong>E-mail:</strong> ${candidate["E-mail"]}</p>
            <p><strong>Rok narodenia:</strong> ${candidate["Rok narodenia"]}</p>
            <p><strong>Mesto:</strong> ${candidate["Mesto"]}</p>
            <p><strong>Tagy:</strong> ${candidate["Tagy"]}</p>
            <p><strong>Skills:</strong> ${candidate["Skill"]}</p>
            <p><strong>Kategória:</strong> ${candidate["Kategória"]}</p>
            <p><strong>Aktivita uchádzača:</strong> ${candidate["Aktivita uchádzača"]}</p>
            <a href="${candidate["Životopis"]}" target="_blank">Zobraziť životopis</a>
        `;
        container.appendChild(card);
    });
}

// Zavoláme funkciu na zobrazenie kandidátov
displayCandidates(candidatesData);
