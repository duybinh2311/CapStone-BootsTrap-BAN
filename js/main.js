// Change Theme Button Duy Bình
document.getElementsByClassName('change-theme')[0].onclick =
  function changeTheme() {
    document.getElementsByTagName('body')[0].classList.toggle('dark-theme')
    document.getElementsByTagName('i')[0].classList.toggle('d-none')
    document.getElementsByTagName('i')[1].classList.toggle('d-none')
  }

// JavaScript Gia Như
function dark() {
  var element = document.body
  element.classList.toggle('dark-mode')

  const readmore = document.getElementById('content-read-more')
  readmore.classList.toggle('content-read-more-dark')

  const item = document.getElementsByClassName('item')
  for (const items of item) {
    items.classList.toggle('item-dark')
  }

  var nav = document.getElementById('navbar')
  nav.classList.toggle('navbar-dark')

  const navitem = document.getElementsByClassName('nav-items')
  // navitem.classList.add('nav-item-dark')

  for (const nav of navitem) {
    nav.classList.toggle('nav-item-dark')
  }
}

// JavaScript An
// Number
$('.counter').countUp()

// JavaScript Duy Bình
// Magnific Popup
$(document).ready(function () {
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
  })
})

// Owl Carousel 2
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  autoplay: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    990: {
      items: 2,
    },
  },
})

// Back To Top
window.onscroll = function hideBackToTop() {
  if (document.documentElement.scrollTop > 20) {
    document.getElementsByClassName('back-to-top')[0].style.display = 'block'
  } else {
    document.getElementsByClassName('back-to-top')[0].style.display = 'none'
  }
}

document.getElementsByClassName('back-to-top')[0].onclick =
  function backToTop() {
    document.documentElement.scrollTop = 0
  }
