let homeScore = document.getElementById("home-score");

let guestScore = document.getElementById("guest-score");

let hScore = 0;

let gScore = 0;

function homeIncrement(value) {
  hScore = hScore + value;
  homeScore.textContent = hScore;
}

function guestIncrement(value) {
  gScore = gScore + value;
  guestScore.textContent = gScore;
}
