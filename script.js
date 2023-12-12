document.addEventListener("DOMContentLoaded", function() {
    // Get all image elements
    const images = document.querySelectorAll('.image');

    // Add touch event listener to each image
    images.forEach(image => {
        image.addEventListener('touchstart', function() {
            // Trigger hover effect by adding a class
            this.classList.add('hovered');
        });
    });
});
