var carousel = {
  slides: document.querySelectorAll(".carousel__slide"),
  currentSlide: 0,
  next: document.querySelector(".nextArrow"),
  prev: document.querySelector(".prevArrow")
};

carousel.next.addEventListener("click", function (e) {
  nextSlide(carousel);
});
carousel.prev.addEventListener("click", function (e) {
  previousSlide(carousel);
});

function resetCurrentSlide() {
  carousel.slides[carousel.currentSlide].classList.add('hideSlide');
}

function nextSlide(carousel) {
  resetCurrentSlide();
  carousel.currentSlide = (carousel.currentSlide + 1) % carousel.slides.length;
  carousel.slides[carousel.currentSlide].classList.remove('hideSlide');
}

function previousSlide(carousel) {
  resetCurrentSlide();

  if (carousel.currentSlide === 0)
    carousel.currentSlide = carousel.slides.length - 1;
  else carousel.currentSlide--;

  carousel.slides[carousel.currentSlide].classList.remove('hideSlide');
}