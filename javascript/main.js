$(document).ready(function() {
  makeVideoFixed();
  togglePopup();
  makeHistoryTextFixed();
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

function makeHistoryTextFixed() {
  $(window).scroll(function() {

    fixedPositionStart = $(".home .everything-before-history").height();
    windowScroll = $(window).scrollTop();

    if (windowScroll >= fixedPositionStart) {
      $("#history-section .text-content").addClass("fixed-text");
    } else if (windowScroll <= fixedPositionStart) {
      $("#history-section .text-content").removeClass("fixed-text");
    }

    console.log(windowScroll);

  });
}
