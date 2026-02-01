// State management
let currentRegion = null;

// DOM elements
const winesContainer = document.getElementById('wines-container');
const randomBtn = document.getElementById('random-btn');
const regions = document.querySelectorAll('.region');

// Initialize event listeners
function init() {
    regions.forEach(region => {
        region.addEventListener('click', handleRegionClick);
        region.addEventListener('mouseenter', handleRegionHover);
        region.addEventListener('mouseleave', handleRegionLeave);
    });

    randomBtn.addEventListener('click', handleRandomDiscovery);
}

// Region click handler
function handleRegionClick(event) {
    const regionId = event.target.dataset.region;

    // Toggle behavior: if clicking the same region, deselect it
    if (currentRegion === regionId) {
        clearSelection();
        return;
    }

    // Update current region
    currentRegion = regionId;

    // Update map visual state
    regions.forEach(r => r.classList.remove('active'));
    event.target.classList.add('active');

    // Display wines for this region
    displayWines(regionId);
}

// Region hover handlers
function handleRegionHover(event) {
    if (!event.target.classList.contains('active')) {
        event.target.style.opacity = '1';
    }
}

function handleRegionLeave(event) {
    if (!event.target.classList.contains('active')) {
        event.target.style.opacity = '0.7';
    }
}

// Clear current selection
function clearSelection() {
    currentRegion = null;
    regions.forEach(r => r.classList.remove('active'));
    winesContainer.innerHTML = '<div class="empty-state"><p>👆 Select a region to discover its wines</p></div>';
}

// Display wines for a region
function displayWines(regionId, randomWineIndex = null) {
    const regionData = wineData[regionId];

    if (!regionData) {
        console.error('No data found for region:', regionId);
        return;
    }

    // Clear container
    winesContainer.innerHTML = '';

    // Create wine cards
    regionData.wines.forEach((wine, index) => {
        const card = createWineCard(wine, regionData.name, index === randomWineIndex);
        winesContainer.appendChild(card);
    });
}

// Create a wine card element
function createWineCard(wine, regionName, isRandomDiscovery = false) {
    const card = document.createElement('div');
    card.className = `wine-card ${wine.color}`;

    if (isRandomDiscovery) {
        card.classList.add('random-discovery');
    }

    card.innerHTML = `
        <div class="wine-header">
            <div>
                <h3 class="wine-name">${wine.name}</h3>
                <p class="wine-grape">${wine.grape}</p>
            </div>
            <span class="wine-type ${wine.color}">${wine.color}</span>
        </div>
        <div class="tasting-notes">
            ${wine.tastingNotes.map(note => `<span class="note">${note}</span>`).join('')}
        </div>
        <div class="wine-fact">${wine.fact}</div>
    `;

    return card;
}

// Random discovery handler
function handleRandomDiscovery() {
    // Add click animation to button
    randomBtn.classList.add('clicked');
    setTimeout(() => randomBtn.classList.remove('clicked'), 300);

    // Get all region IDs
    const regionIds = Object.keys(wineData);

    // Select random region
    const randomRegionId = regionIds[Math.floor(Math.random() * regionIds.length)];
    const randomRegionData = wineData[randomRegionId];

    // Select random wine from that region
    const randomWineIndex = Math.floor(Math.random() * randomRegionData.wines.length);

    // Update current region
    currentRegion = randomRegionId;

    // Highlight region on map
    regions.forEach(r => {
        r.classList.remove('active');
        if (r.dataset.region === randomRegionId) {
            r.classList.add('active');

            // Scroll to map on mobile
            if (window.innerWidth <= 968) {
                r.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    // Display wines with random wine highlighted
    displayWines(randomRegionId, randomWineIndex);

    // Scroll to wines section
    setTimeout(() => {
        winesContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
