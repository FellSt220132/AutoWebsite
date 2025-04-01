const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselImages = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function moveToNextImage() {
    currentIndex++;
    if (currentIndex >= carouselImages.length) {
        currentIndex = 0;
    }
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveToPreviousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carouselImages.length - 1;
    }
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(moveToNextImage, 4000);

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', moveToPreviousImage);
nextButton.addEventListener('click', moveToNextImage);
