// Function to toggle the visibility of more details about each model
function showDetails(modelNumber) {
    const details = document.getElementById(`details-${modelNumber}`);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('enrollBtn').addEventListener('click', function() {
    // Create a confirmation message asking the user if they want to proceed
    const userConfirmed = confirm("Are you interested in enrolling or want to check our social media and contact?");
    
    if (userConfirmed) {
        // Open Facebook, Instagram, and Contact links in new tabs
        window.open("https://www.facebook.com/satishbeniwal26"); // Replace with your Facebook link
        window.open("https://www.instagram.com/satish_mokhra"); // Replace with your Instagram link
    } else {
        // Optional: Display a cancellation message if the user does not confirm
        alert("Enrollment was canceled.");
    }
  });
});
