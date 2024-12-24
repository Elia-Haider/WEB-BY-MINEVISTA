const mods = [
    { id: 1, title: "Free Inventory Management Mod for Minecraft Pe 1.19/1.21", image: "https://i.postimg.cc/T1Yrhz6k/a-thumbnail-style-image-with-a-blurred-m-Qyh-Ksla-JQ6-Wv7v-GXCd-VGRQ-Hw5l6t8x-S-q-FQ5-Lq-GX-Brg.jpg", type: "mods", link: "mods/mod1.html" },
    { id: 2, title: "One-Click House Mod for Minecraft pe 1.20/21", image: "https://i.postimg.cc/kM1Sfh9m/1734802246435-85720973153157280467876478870037721941.png", type: "mods", link: "mods/mod2.html" },
    { id: 3, title: "HUD+ Mod for Minecraft 1.20/21 ", image: "https://i.postimg.cc/TYbSxRHc/1734803602076-172279709751400469926695088998923161458.png", type: "mods", link: "mods/mod3.html" },
    { id: 4, title: "Mini Map For Minecraft 1.20/1.21", image: "https://i.postimg.cc/6p29ZYgs/1735028582094-320607637983221219756411750619624228459.jpg", type: "mods", link: "mods/mod4.html" },
    { id: 5, title: "F5 Mod For Minecraft 1.20/1.21, image: "images/map1.jpg", type: "mods", link: "mods/mod5.html" },
    { id: 6, title: "Map 2", image: "images/map2.jpg", type: "maps", link: "maps/map2.html" },
    { id: 7, title: "Map 3", image: "images/map3.jpg", type: "maps", link: "maps/map3.html" },
    { id: 8, title: "Texture Pack 1", image: "images/texture pack1.jpg", type: "textures", link: "texturepacks/texture1.html" },
    { id: 9, title: "Resource Pack 1", image: "images/resource1.jpg", type: "resources", link: "resources/resource1.html" },
    { id: 10, title: "Map 1", image: "images/map1.jpg", type: "maps", link: "maps/map1.html" }
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


