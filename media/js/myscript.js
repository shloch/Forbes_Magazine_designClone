const mediaTablet = window.matchMedia('(min-width: 426px)');
const mediaLaptop = window.matchMedia('(min-width: 769px)');
const next = document.querySelector(".nextArrow");
const prev = document.querySelector(".prevArrow");
const next2 = document.querySelector(".nextArrow2");
const prev2 = document.querySelector(".prevArrow2");


if (mediaLaptop.matches) {
  // Then log this message to the console
  //console.log('Media Query Matched Laptop!');
  let carousel = {
    slides: document.querySelectorAll(".carousel__slide_l"),
    currentSlide: 0,
    next: next2,
    prev: prev2
  };

  //console.log(`next --> ${carousel.next}`)
  carousel.next.addEventListener("click", function (e) {
    //console.log('next arrow')
    // console.log(`slides = ${carousel.slides}`)
    nextSlide(carousel);
  });
  carousel.prev.addEventListener("click", function (e) {
    //console.log('prev arrow')
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
}
else if (mediaTablet.matches) {
  //console.log('Media Query Matched Tablet!');
  let carousel = {
    slides: document.querySelectorAll(".carousel__slide"),
    currentSlide: 0,
    next: next,
    prev: prev
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
}

// =============== reload on resize ========================


// function myFunction(x) {
//   if (mediaTablet.matches) { // If media query matches
//     location.reload();
//   } else if (mediaLaptop.matches) {
//     location.reload();
//   }
// }

// //var x = window.matchMedia("(min-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addEventListener(myFunction) // Attach listener function on state changes
//===========================================================