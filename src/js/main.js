// Parallax
$(".parallax-section").parallax({
  speed: 0.1,
});

/* Card Effect */

var CardFlip = document.querySelectorAll(".card");

for (var card of CardFlip) {
  card.addEventListener("click", Flip);
}

function Flip() {
  this.classList.toggle("is-flipped");
}
