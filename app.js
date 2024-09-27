
const swiperRestaurants = new Swiper('.restaurants-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    }
  },

  navigation: {
    nextEl: '#restaurants-next',
    prevEl: '#restaurants-prev',
  },
});

const swiperSpecialities = new Swiper('.specialities-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,

  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
    1440: {
      slidesPerView: 8,
    }
  },

  navigation: {
    nextEl: '#specialities-next',
    prevEl: '#specialities-prev',
  },
});

const buttonMenu = document.querySelector("#button-menu");
const headerOverlay = document.querySelector(".header-overlay");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

let widthScrollBar = window.innerWidth - body.clientWidth;

buttonMenu.addEventListener('click', () => {
  headerOverlay.classList.toggle('active');
  menu.classList.toggle('active');
  buttonMenu.classList.toggle('active');
  body.classList.toggle('active');
  if (header.classList.contains('active') && menu.classList.contains('active')) {
    header.style.paddingRight = `${widthScrollBar}px`
  } else {
    header.style.paddingRight = null
  }
  if (body.classList.contains('active')) {
    body.style.marginRight = `${widthScrollBar}px`
  } else {
    body.style.marginRight = null
  }
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
let headerHeight = header.offsetHeight;
let oldScrollY = 0;
window.addEventListener('scroll', () => {
  if (window.scrollY <= oldScrollY) {
    header.classList.add('active')
    header.style.transform = 'translate(0, 0)'
    body.style.marginTop = `${headerHeight}px`
  } else {
    header.classList.remove('active')
    header.style.transform = `translate(0, -100%)`
    body.style.marginTop = null
  }
  if (window.scrollY == 0) {
    header.classList.remove('active')
    body.style.marginTop = null
    header.style.transform = 'translate(0, 0)'
  }
  oldScrollY = window.scrollY;
});

const addressInput = document.querySelector("#addressInput");
const addressLabel = document.querySelector(".form-element");
addressInput.addEventListener("focus", () => {
  addressLabel.classList.add('active');
  addressLabel.parentElement.style.gap = '1px'
})
addressInput.addEventListener("blur", () => {
  addressLabel.classList.remove('active');
  addressLabel.parentElement.style.gap = '2px'
})

let checkSymbols = '!@#$%^&*_+-=<>?|/[]{}`"№;:'
const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  for(let i = 0; i < checkSymbols.length; i++) {
    if(addressInput.value.includes(checkSymbols[i])) {
      addressLabel.classList.add('error');
      fakeSymbol = true;
    } else if(!fakeSymbol) {
      addressInput.value = "";
    }
  }

  if(!addressInput.value) {
    alert("F")
  }
})

let fakeSymbol;
addressInput.addEventListener("input", ()=> {
  if(addressLabel.classList.contains('error')) {
    for(let j = 0; j < checkSymbols.length; j++) {
      if(addressInput.value.includes(checkSymbols[j])) {
        addressLabel.classList.add('error');
        fakeSymbol = true;
      }

      if (!fakeSymbol) {
        addressLabel.classList.remove('error');
      }

    }
    fakeSymbol = false

  }
})

