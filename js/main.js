// Change Theme
document.getElementById('changeTheme').onclick = function changeTheme() {
  document.getElementById('body').classList.toggle('dark-theme')
}

// JavaScript Gia Như

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
