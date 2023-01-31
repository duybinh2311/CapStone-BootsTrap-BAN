// Change Theme
document.getElementById('changeTheme').onclick = function changeTheme() {
  document.getElementById('body').classList.toggle('dark-theme')
}

// JavaScript Gia Như

// JavaScript An

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
