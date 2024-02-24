const sliderControlOne = document.querySelector('.slider-controls__control--one');
const sliderControlTwo = document.querySelector('.slider-controls__control--two');
const sliderControlThree = document.querySelector('.slider-controls__control--three');
const slideOne = document.querySelector('.new-offers__item--one');
const slideTwo = document.querySelector('.new-offers__item--two');
const slideThree = document.querySelector('.new-offers__item--three');
const sliderContainer = document.querySelector('.new-offers__list');
const prevButton = document.querySelector('.new-offers__slider-button--prev');
const nextButton = document.querySelector('.new-offers__slider-button--next');
const slides = Array.from(sliderContainer.querySelectorAll('.new-offers__item'));
const sliderControls = Array.from(document.querySelector('.new-offers').querySelectorAll('.slider-controls__control'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

function showPrevSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('new-offers__item--current');
    } else {
      slide.classList.remove('new-offers__item--current');
    }
  });
  sliderControls.forEach((control, index) => {
    if(index === slideIndex) {
      control.classList.add('slider-controls__control--current');
    } else {
      control.classList.remove('slider-controls__control--current');
    }
  });

  if(slideIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if(slideIndex === slideCount - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

updateSlider();

sliderControlOne.addEventListener('click', ()=> {
  sliderControlOne.classList.add('slider-controls__control--current');
  sliderControlTwo.classList.remove('slider-controls__control--current');
  sliderControlThree.classList.remove('slider-controls__control--current');
  slideOne.classList.add('new-offers__item--current');
  slideTwo.classList.remove('new-offers__item--current');
  slideThree.classList.remove('new-offers__item--current');
  slideIndex = slides.indexOf(slideOne);
});

sliderControlTwo.addEventListener('click', ()=> {
  sliderControlTwo.classList.add('slider-controls__control--current');
  sliderControlOne.classList.remove('slider-controls__control--current');
  sliderControlThree.classList.remove('slider-controls__control--current');
  slideTwo.classList.add('new-offers__item--current');
  slideOne.classList.remove('new-offers__item--current');
  slideThree.classList.remove('new-offers__item--current');
  slideIndex = slides.indexOf(slideTwo);
});

sliderControlThree.addEventListener('click', ()=> {
  sliderControlThree.classList.add('slider-controls__control--current');
  sliderControlTwo.classList.remove('slider-controls__control--current');
  sliderControlOne.classList.remove('slider-controls__control--current');
  slideThree.classList.add('new-offers__item--current');
  slideOne.classList.remove('new-offers__item--current');
  slideTwo.classList.remove('new-offers__item--current');
  slideIndex = slides.indexOf(slideThree);
});
