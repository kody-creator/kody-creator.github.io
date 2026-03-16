const carImages = [
    'images/vignesh-rajendran-x-dyoS4EmM8-unsplash.jpg',
    'images/james-gibson-4sDdxQEiJrU-unsplash.jpg',
    'images/eugene-chystiakov-KizWQ2wk0tk-unsplash.jpg'
]
let index = 0;
const carImage = document.getElementById('heroImage');
function changeImage() {
    carImage.style.backgroundImage = `url(${carImages[index]})`;
    index = (index + 1) % carImages.length;
}
setInterval(changeImage, 7000);
changeImage();

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function () {
            navbarToggle.classList.toggle('is-active');
            navbarMenu.classList.toggle('is-active');
            const isExpanded = navbarMenu.classList.contains('is-active');
            navbarToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
});

