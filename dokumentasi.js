let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length; 
    images[currentIndex].style.display = 'block'; 
}

setInterval(showNextImage, 1000); 