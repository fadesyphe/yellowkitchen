const swiperRestaurants = new Swiper('.restaurants-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,

  navigation: {
    nextEl: '#restaurants-next',
    prevEl: '#restaurants-prev',
  },
});
