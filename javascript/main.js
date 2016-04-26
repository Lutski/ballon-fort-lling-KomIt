$(document).ready(function() {
  disableScrolling();
  getNameInput();
  startStory();
  makeVideoFixed();
  togglePopup();
  makeHistoryTextFixed();
});

// Disables scrolling when its called
function disableScrolling() {
// Page jumps to top when its disabled and reanabled
 $('html, body').css({
     'overflow': 'hidden',
     'height': '100%'
 });
}

// Enables scrolling when its called
function enableScrolling() {
// Page jumps to top when its disabled and reanabled
 $('html, body').css({
     'overflow': 'auto',
     'height': 'auto'
 });
}

function startStory() {
  $(".start-btn").click(function() {
    if (!$(".input-name").val()) {
      nameError();
    } else {
      enableScrolling();
      scrollDown();
    }
  });
}

function scrollDown() {

}

function nameError() {
  console.log("ERROR!")
}

function getNameInput() {
  $('.input-name').on('keyup', function() {
    var user_input_name = $(".input-name").val();
    $('.user_name').html(user_input_name);
  });
}

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
