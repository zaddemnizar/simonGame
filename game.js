var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

//function that returns a random number between 0-3
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

//add a random color to gamePatter array
var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

//animate a flash to the button selected
$("." + randomChosenColour).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);

//add color of the button clicked to userChosenColour array
$(".btn").on("click", function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
})

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function() {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audioFile = 'sounds/' + name + '.mp3';
  var audio = new Audio(audioFile);
  audio.play();
}
