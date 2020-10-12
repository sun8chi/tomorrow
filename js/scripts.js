/*-- fullpage --*/
$(document).ready(function() {
  $('#fullpage').fullpage({
    slidesNavigation: 'true',
    anchors: ['home', 'story', 'location', 'team', 'public', 'work', 'contact'],
    menu: '.main-nav ul',
    paddingBottom: '50px',
    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);

      if (anchorLink == 'modal') {
        $('.modal-house .fp-tableCell').css('vertical-align', 'top');
      }
    },
    onLeave: function(index, nextIndex) {
      if (index == 1) {
        $('.home_img').removeClass('fadeInLeft animated');
        $('.home_img').addClass('animated fadeOut');
        $('.home_logo').removeClass('fadeIn animated');
        $('.home_logo').addClass('animated fadeOut');
      }else {
      }
    },
    afterLoad: function(anchorLink, index) {
      if (index == 1) {
        $('.home_img').removeClass('animated fadeOut');
        $('.home_img').addClass('fadeInLeft animated');
        $('.home_logo').removeClass('animated fadeOut');
        $('.home_logo').addClass('fadeIn animated');
      }else {
      }
    }
  });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-dark .navbar-nav .nav-link').click(function() {
  console.log('13');
  $('.navbar-collapse').collapse('hide');
});
// popup_gallery
$(document).ready(function() {
  $('.popup_gallery').each(function() {
    // the containers for all your galleries
    $(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });
});
