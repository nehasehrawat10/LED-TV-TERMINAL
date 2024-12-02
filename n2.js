// Mobile Menu Toggle (if needed for the navigation menu)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Modal for Image Popup
const images = document.querySelectorAll('.image-card img');  // Target images in the image gallery
const largeImage = document.querySelector('.featured-image');  // Target the large image

// Create modal element dynamically (one modal for all image popups)
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalImg = document.createElement('img');
modal.appendChild(modalImg);

const modalText = document.createElement('p');
modal.appendChild(modalText);

// Create and add a close button to the modal
const closeModal = document.createElement('span');
closeModal.classList.add('close');
closeModal.textContent = '×';
modal.appendChild(closeModal);

// Function to open the modal with the clicked image and its description
function openModal(img) {
  modal.style.display = 'block';
  modalImg.src = img.src;
  modalText.textContent = img.alt;  // Use the alt text as the description
}

// Add event listeners for all images in the gallery
images.forEach(img => {
  img.addEventListener('click', () => {
    openModal(img);  // Open modal with the clicked image
  });
});

// Add event listener for the large image (if clicked)
if (largeImage) {
  largeImage.addEventListener('click', () => {
    openModal(largeImage);  // Open modal with the large image
  });
}

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';  // Hide modal
});

// Close modal if clicked outside the image (on modal background)
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';  // Hide modal if clicked outside the image
  }
});

// Add interactivity for pricing section (hover and click events)
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
  // Hover effect: highlight the card
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });

  // Click event to show more information
  card.addEventListener('click', () => {
    const serviceName = card.querySelector('h3').textContent;
    const servicePrice = card.querySelector('.price').textContent;
    const serviceDescription = card.querySelector('p').textContent;
    
    alert(`Service: ${serviceName}\nPrice: ${servicePrice}\nDescription: ${serviceDescription}`);
  });
});
// JavaScript for expanding and collapsing the Opening and Closing Times section
const toggleButton = document.querySelector('.toggle-button');
const openingTimesContent = document.querySelector('.opening-times-content');

toggleButton.addEventListener('click', () => {
  // Toggle visibility of the opening times content
  if (openingTimesContent.style.display === 'none' || openingTimesContent.style.display === '') {
    openingTimesContent.style.display = 'block';  // Show the content
    toggleButton.textContent = 'Hide Opening and Closing Time';  // Change button text
  } else {
    openingTimesContent.style.display = 'none';  // Hide the content
    toggleButton.textContent = 'Show Opening and Closing Time';  // Change button text
  }
});

