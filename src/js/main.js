import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';
import Swiper, { Navigation, Pagination } from 'swiper';

const portSlider = document.querySelector('.portfolio-section__items');

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));

Swiper.use([Navigation, Pagination]);
const portfolioSlider = new Swiper(portSlider, {
  slidesPerView: 3,
  spaceBetween:gap,
  on: {
    init:function () {
      console.log('swiper init');

      const activeSlide = portSlider.querySelector('.swiper-slide-active');

      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');

    }
  },
  navigation: {
    nextEl:'.portfolio-section__next',
    prevEl:'.portfolio-section__prev'
  },
});

document.querySelector('.portfolio-section__prev').addEventListener('click',()=> {

  const activeSlide = portSlider.querySelector('.swiper-slide-next');

  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible');
  });


  if(activeSlide.previousElementSibling) {
    const nextActiveSlide = activeSlide.previousElementSibling;
    activeSlide.classList.add('slider-visible');
    nextActiveSlide.classList.add('slider-visible');
    activeSlide.nextElementSibling.classList.add('slider-visible');
  }

});

document.querySelector('.portfolio-section__next').addEventListener('click',()=> {
  const activeSlide = portSlider.querySelector('.swiper-slide-active');

  const nextActiveSlide = activeSlide.nextElementSibling;
  const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible');
  });

  activeSlide.classList.add('slider-visible');
  nextActiveSlide.classList.add('slider-visible');
  nextNextActiveSlide.classList.add('slider-visible');
});


const testimonialsSlider = new Swiper('.testimonials__items', {
  slidesPerView: 1,
  spaceBetween:gap,
  loop:true,

  navigation: {
    nextEl:'.testimonials__next',
    prevEl:'.testimonials__prev'
  },
});

// const circle = document.querySelector('.progress');
// const progressAnimation = () => {
//    let percentageProgress = Math.floor(70);

//    let radius = circle.getAttribute('r');
//    let circleLength = 2 * Math.PI * radius;
//    circle.setAttribute('stroke-dasharray',circleLength);
//    circle.setAttribute('stroke-dashoffset',circleLength - circleLength * percentageProgress / 100);

// };
// progressAnimation();


const circles = document.querySelectorAll('.facts-element__circle');
circles.forEach(el => {




  if(el.dataset.percentage == 'true') {
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.facts-element__value');
    let radius = progress.getAttribute('r');
    let circleLength =  2 * Math.PI * radius;
    let full = el.dataset.full;
    let value = el.dataset.value;
    let  percentageProgress = Math.floor(value / full * 100);

    valueBlock.textContent = value;
    progress.setAttribute('stroke-dasharray',circleLength);
    progress.setAttribute('stroke-dashoffset',circleLength - circleLength * percentageProgress / 100);


  }else {
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.facts-element__value');
    let radius = progress.getAttribute('r');
    let circleLength =  2 * Math.PI * radius;
    let percent = el.dataset.percent;
    let percentageProgress =Math.floor(percent);
    valueBlock.textContent = percent + '%';
    progress.setAttribute('stroke-dasharray',circleLength);
    progress.setAttribute('stroke-dashoffset',circleLength - circleLength * percentageProgress / 100);
  }

});
