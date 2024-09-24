const swiperRestaurants = new Swiper('.restaurants-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,

  navigation: {
    nextEl: '#restaurants-next',
    prevEl: '#restaurants-prev',
  },
});

const swiperSpecialities = new Swiper('.specialities-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 8,

  navigation: {
    nextEl: '#specialities-next',
    prevEl: '#specialities-prev',
  },
});

