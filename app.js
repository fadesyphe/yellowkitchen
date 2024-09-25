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

const buttonMenu = document.querySelector("#button-menu");
const headerOverlay = document.querySelector(".header-overlay");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

buttonMenu.addEventListener('click', () => {
  headerOverlay.classList.toggle('active');
  menu.classList.toggle('active');
  buttonMenu.classList.toggle('active');
  body.classList.toggle('active');
})

const linksMenu = document.querySelectorAll('a[href*="#"]')
for (let linkMenu of linksMenu) {
  linkMenu.addEventListener('click', (e) => {
    e.preventDefault()
    const blockId = linkMenu.getAttribute('href').substring(1)
    headerOverlay.classList.remove('active');
    menu.classList.remove('active');
    buttonMenu.classList.remove('active');
    body.classList.remove('active');
    document.getElementById(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const header = document.querySelector('.header');
let ofsetY = oldOfsetY = 0;
window.addEventListener('scroll', () => {
  console.log(window.scrollTop)
})
