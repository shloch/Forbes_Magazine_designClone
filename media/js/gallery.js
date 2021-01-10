'use strict'

var carousel = {
    slides: document.querySelectorAll(".carousel__slide"),
    currentSlide: 0,
    next: document.querySelector(".next"),
    prev: document.querySelector(".previous")
};

carousel.next.addEventListener("click", function (e) {
    nextSlide(carousel);
});
carousel.prev.addEventListener("click", function (e) {
    previousSlide(carousel);
});

function resetCurrentSlide() {
   carousel.slides[carousel.currentSlide].classList.add('hide');
   carousel.slides[carousel.currentSlide].classList.remove('show');
}

/* function not used in this scenario */
function show() {
    const toShow = document.querySelector(".show");
    const showBlock = document.querySelector(".currentDisplay");
    showBlock.innerHTML = (toShow.innerHTML)
}

function nextSlide(carousel) {
    resetCurrentSlide();
    carousel.currentSlide = (carousel.currentSlide + 1) % carousel.slides.length;
    carousel.slides[carousel.currentSlide].classList.remove('hide');
    carousel.slides[carousel.currentSlide].classList.add('show');
}

function previousSlide(carousel) {
    resetCurrentSlide();

    if (carousel.currentSlide === 0)
        carousel.currentSlide = carousel.slides.length - 1;
    else carousel.currentSlide--;

    //carousel.slides[carousel.currentSlide].setAttribute("aria-current", true);
    carousel.slides[carousel.currentSlide].classList.remove('hide');
    carousel.slides[carousel.currentSlide].classList.add('show');
    //show();
}