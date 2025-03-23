function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
    selectedSection.scrollIntoView({ behavior: 'smooth' });
}let currentScale = 1;

// Open fullscreen with the clicked image
function openFullscreen(imgElement) {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');

    fullscreenImage.src = imgElement.src;
    fullscreenImage.style.transform = "scale(1)";
    currentScale = 1;

    fullscreenContainer.style.display = 'flex';
}

// Close the fullscreen image
function closeFullscreen() {
    document.getElementById('fullscreen-container').style.display = 'none';
}

// Zoom in/out functionality
function zoomImage(scaleFactor) {
    const fullscreenImage = document.getElementById('fullscreen-image');
    currentScale *= scaleFactor;

    // Set zoom limits
    if (currentScale < 0.5) currentScale = 0.5;
    if (currentScale > 3) currentScale = 3;

    fullscreenImage.style.transform = `scale(${currentScale})`;
}

// Ensure any future images loaded also get this behavior
document.querySelectorAll('.image-gallery img').forEach(img => {
    img.addEventListener('click', () => openFullscreen(img));
});