// Select the map image and apply hover effect for more interactivity
const mapImage = document.querySelector('.map-image');

// Optionally add some interactivity, e.g., changing opacity when hovering
mapImage.addEventListener('mouseover', function() {
  mapImage.style.transform = "scale(1.05)"; // Zoom-in effect on hover
  mapImage.style.opacity = "0.8"; // Slightly reduce opacity for effect
});

mapImage.addEventListener('mouseout', function() {
  mapImage.style.transform = "scale(1)"; // Reset zoom
  mapImage.style.opacity = "1"; // Reset opacity
});
