$(document).ready(function() {
  // Functions I call when the page initially loads
  disableScrolling();
  getNameInput();
  startStory();
  makeVideoFixed();
  togglePopup();
  makeHistoryTextFixed();
  dismissMobilePopup();
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

// Controls which error messages get sent
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

// Scrolls down below the header
function scrollDown() {
  headerHeight = $("#header").height();
  $('html, body').animate({
    scrollTop: headerHeight
  }, 'slow');
}

// All name error functions
function nameError(errorNumber) {
  var errorArray = ["SKRIV DIT NAVN G!", "VIL DU SLÅS? SKRIV DET NAVN", "JEG KALDER PÅ MINE SHABABS! SKRIV DET NAVN!", "WALLAH, JEG GIVER DIG EN SEKUND TIL AT SKRIVE DIT NAVN", "PAS PÅ G, JEG HAR DRENGE PÅ GADEN! SKRIV DET NAVN", "DU VED IKKE HVAD JEG ER I STAND TIL! SKRIV NAVNET", "JEG LEGER IKKE... SKRIV DIT NAVN"];
  //var errorArray = ["Skriv dit navn når jeg siger det!", "Stop med at klikke på knappen uden at skrive dit navn... Det gør ondt!", "AVV! Skriv dog dit navn...", "Okay... Sidste chance ellers sagsøger jeg dig!"]
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
  $(".error-message").css({"background" : "#84D270"});
  $(".error-message").fadeIn(500);
  $(".error-message").delay(1500);
  $(".error-message").fadeOut(500);
  enableScrolling();
  scrollDown();
}

// Gets the input from .input-name and instantly updates the .user_name classe's content
function getNameInput() {
  $('.input-name').on('keyup', function() {
    var user_input_name = $(".input-name").val();
    $('.user_name').html(user_input_name);
  });
}

// This make the video background fixed
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

// This toggles the question (About this page) popup
function togglePopup() {
  $('.question-circle-link').click(function() {
    $("#question-popup").toggleClass("is-visable");
  });

  $('.dismiss-popup').click(function() {
    $("#question-popup").toggleClass("is-visable");
  });
}

// This makes the history text fixed while the images scroll
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


// Dismisses the popup when the button is clicked
function dismissMobilePopup() {
  $(".mobile-message-btn").click(function() {
    $('#mobile-message').css({'display':'none'});
  });
}
