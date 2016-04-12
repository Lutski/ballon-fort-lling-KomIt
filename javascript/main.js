$(document).ready(function() {
  makeVideoFixed();
  togglePopup();
});

function makeVideoFixed() {
  $(window).scroll(function() {

    fixedPositionStart = $("#header").height();
    windowScroll = $(window).scrollTop();

    if (windowScroll >= fixedPositionStart) {
      $("#introduction .container video").css({
        "position" : "fixed"
      });
    } else if (windowScroll <= fixedPositionStart) {
      $("#introduction .container video").css({
        "position" : "relative"
      });
    }

  });
}

function togglePopup() {
  $('.question-circle-link').click(function() {
    $("#question-popup").toggleClass("is-visable");
  });

  $('.dismiss-popup').click(function() {
    $("#question-popup").toggleClass("is-visable");
  });
}
