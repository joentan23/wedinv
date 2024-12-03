// Populate invitation fields from URL parameters
const urlParams = new URLSearchParams(window.location.search);

document.getElementById('groomName').textContent = urlParams.get('groomName') || "Groom's Name";
document.getElementById('brideName').textContent = urlParams.get('brideName') || "Bride's Name";
document.getElementById('weddingLocation').textContent = urlParams.get('weddingLocation') || "Wedding Location";
document.getElementById('weddingDate').textContent = urlParams.get('weddingDate') || "Wedding Date";
document.getElementById('weddingTime').textContent = urlParams.get('weddingTime') || "Wedding Time";
document.getElementById('attire').textContent = urlParams.get('attire') || "Formal Attire";
