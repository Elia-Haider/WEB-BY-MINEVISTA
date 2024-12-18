const mods = [
    { id: 1, title: "Optifine++ V4 (1.21, 1.20) – Fps Boost, Quick Loot, Clean UI   ", image: "images/mod1.jpg", type: "mods", link: "mods/mod1.html" },
    { id: 2, title: "Texture Pack 1", image: "images/texture1.jpg", type: "textures", link: "texturepacks/texture1.html" },
    { id: 3, title: "Resource Pack 1", image: "images/resource1.jpg", type: "resources", link: "resources/resource1.html" },
    { id: 4, title: "Map 1", image: "images/map1.jpg", type: "maps", link: "maps/map1.html" },
    { id: 5, title: "Map 2", image: "images/map2.jpg", type: "maps", link: "maps/map2.html" },
    { id: 6, title: "Map 3", image: "images/map3.jpg", type: "maps", link: "maps/map3.html" }
];

const container = document.getElementById("mod-container");
let currentPage = 1;
const itemsPerPage = 5;

// Function to Load Mods
function loadMods(page = 1) {
    container.innerHTML = ""; // Clear previous mods
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const modsToDisplay = mods.slice(start, end);

    modsToDisplay.forEach(mod => {
        const modCard = document.createElement("div");
        modCard.className = "mod-card";
        modCard.innerHTML = `
            <img src="${mod.image}" alt="${mod.title}">
            <h3>${mod.title}</h3>
            <a href="${mod.link}"><button>View</button></a>
        `;
        container.appendChild(modCard);
    });

    document.getElementById("page-number").innerText = `Page ${page}`;
}

// Search Functionality
function searchMods() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filteredMods = mods.filter(mod => mod.title.toLowerCase().includes(query));

    if (filteredMods.length === 0) {
        alert("No results found. Showing similar items.");
    }

    displayFilteredMods(filteredMods);
}

// Filter Mods by Type
function filterMods(type) {
    const filteredMods = mods.filter(mod => mod.type === type);
    displayFilteredMods(filteredMods);
}

// Display Filtered Mods
function displayFilteredMods(filteredMods) {
    container.innerHTML = ""; // Clear previous mods
    filteredMods.forEach(mod => {
        const modCard = document.createElement("div");
        modCard.className = "mod-card";
        modCard.innerHTML = `
            <img src="${mod.image}" alt="${mod.title}">
            <h3>${mod.title}</h3>
            <a href="${mod.link}"><button>View</button></a>
        `;
        container.appendChild(modCard);
    });
}

// Pagination
function nextPage() {
    if (currentPage * itemsPerPage < mods.length) {
        currentPage++;
        loadMods(currentPage);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        loadMods(currentPage);
    }
}

// Initial Load
loadMods(currentPage);


