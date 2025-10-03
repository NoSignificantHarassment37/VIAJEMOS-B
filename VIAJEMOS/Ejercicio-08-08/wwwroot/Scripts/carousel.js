function ejecutarCarousel() {

    const track = document.querySelector('.carousel-container');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlideIndex = 0;

    function updateSlidePosition() {
        if (slides[0] === undefined) {
            alert('No hay articulos para mostrar.');
        } else {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
        }
    }

    nextButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    });

    window.addEventListener('load', updateSlidePosition);
    window.addEventListener('resize', updateSlidePosition);
}