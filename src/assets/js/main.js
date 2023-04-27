// navbar
const nav = document.getElementById('nav')
const navicon = document.getElementById('navicon')
navicon.onclick = () => {
  if (nav.classList.contains('hidden')) {
    nav.classList.remove('hidden')
    nav.classList.add('grid')
  }
  else {
    nav.classList.remove('grid')
    nav.classList.add('hidden')
  }
  navicon.classList.toggle('open')
}

// slider1
const splide = new Splide('#splideBanner', {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  sequential: true,
  arrows: false,
  cover: true,
  fixedHeight: 500,
  pagination: false,
  isNavigation: true,
  interval: 6000,
  breakpoints: {
    640: {
      fixedHeight: 250,
    },
  }
}).mount()

const sliderInfo = document.querySelectorAll(".slider_info")
sliderInfo.forEach(e => {
  splide.on("active", () => {
    e.classList.add('slideIn')
  })
  splide.on("inactive", () => {
    e.classList.remove("slideIn")
  })
})

// slider2
new Splide('#splideOurServices', {
  type: 'loop',
  perPage: 3,
  gap: 40,
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  sequential: true,
  arrows: false,
  cover: true,
  fixedHeight: 500,
  pagination: false,
  isNavigation: true,
  breakpoints: {
    786: {
      perPage: 2,
      fixedHeight: 400,
    },
    640: {
      perPage: 1,
      fixedHeight: 400,
    },
  }
}).mount()

// splide3
new Splide('#splideTestimonial', {
  type: 'loop',
  perPage: 1,
  gap: 30,
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  sequential: true,
  arrows: false,
  cover: true,
  fixedHeight: 608,
  pagination: false,
  isNavigation: true,
  breakpoints: {
    640: {
      fixedHeight: 608,
    },
  }
}).mount()

// anime number increment++
const numOne = document.getElementById('numOne')
const numTwo = document.getElementById('numTwo')
const numThree = document.getElementById('numThree')

anime({
  targets: numOne,
  innerHTML: [0, 300],
  easing: 'linear',
  round: 1,
  duration: 3000
})

anime({
  targets: numTwo,
  innerHTML: [0, 16],
  easing: 'linear',
  round: 1,
  duration: 3000
})

anime({
  targets: numThree,
  innerHTML: [0, 10],
  easing: 'linear',
  round: 1,
  duration: 3000
})

// scrollrevel
ScrollReveal({ distance: '100px' }).reveal('.revealRight', {
  delay: 100,
  duration: 300,
  origin: 'right',
  reset: true,
})

ScrollReveal({ distance: '100px' }).reveal('.revealLeft', {
  delay: 100,
  duration: 300,
  origin: 'left',
  reset: true
})

ScrollReveal({ distance: '100px' }).reveal('.revealBottom', {
  delay: 100,
  duration: 300,
  origin: 'bottom',
  reset: true
})

ScrollReveal({ distance: '100px' }).reveal('.revealTop', {
  delay: 100,
  duration: 300,
  origin: 'top',
  reset: true
})

ScrollReveal({ distance: '100px' }).reveal('.revealBottomBlog', {
  delay: 100,
  duration: 300,
  origin: 'bottom',
  reset: true,
  desktop: false
})

ScrollReveal({ distance: '100px' }).reveal('.revealTopBlog', {
  delay: 100,
  duration: 300,
  origin: 'top',
  reset: true,
  desktop: false
})
