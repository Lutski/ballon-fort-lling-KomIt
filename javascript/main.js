$(document).ready(function() {
  makeVideoFixed();
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
