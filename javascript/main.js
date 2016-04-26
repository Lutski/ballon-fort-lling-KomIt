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
  var buttonClickCount = 0

  $(".start-btn").click(function() {
    if (!$(".input-name").val()) {
      if (buttonClickCount == 0) {
        firstError();
      } else if (buttonClickCount >= 6){
        lastError();
      } else {
        nameError(buttonClickCount);
      }
    } else {
      enableScrolling();
      scrollDown();
    }
    buttonClickCount += 1
  });
}

function scrollDown() {
  headerHeight = $("#header").height();
  $('html, body').animate({
    scrollTop: headerHeight
  }, 'slow');
}

function nameError(errorNumber) {
  var errorArray = ["SKRIV DIT NAVN G!", "VIL DU SLÅS? SKRIV DET NAVN", "JEG KALDER PÅ MINE SHABABS! SKRIV DET NAVN!", "WALLAH, JEG GIVER DIG EN SEKUND TIL AT SKRIVE DIT NAVN", "PAS PÅ G, JEG HAR DRENGE PÅ GADEN! SKRIV DET NAVN", "DU VED IKKE HVAD JEG ER I STAND TIL! SKRIV NAVNET", "JEG LEGER IKKE... SKRIV DIT NAVN"];
  //var errorArray = ["Vær venlig at skrive dit navn :)", "Skriv dit navn for at gå igang!"]
  //var randomNumber = Math.floor((Math.random() * errorArray.length) + 1);
  $(".error-message h1").html(errorArray[errorNumber]);
  $(".error-message").fadeIn(500);
  $(".error-message").delay(1500);
  $(".error-message").fadeOut(500);
}

function firstError() {
  $(".error-message h1").html("Vær venlig at skrive dit navn :)");
  $(".error-message").fadeIn(500);
  $(".error-message").delay(1500);
  $(".error-message").fadeOut(500);
}

function lastError() {
  $(".error-message h1").html("RESPEKT... SINDSYG UUDHOLDENHED, BARE KOM!");
  $(".error-message").css({"background" : "lightgreen"});
  $(".error-message").fadeIn(500);
  $(".error-message").delay(1500);
  $(".error-message").fadeOut(500);
  enableScrolling();
  scrollDown();
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
