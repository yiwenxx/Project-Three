/* Set up */

/* Card Effect */

var CardFlip = document.querySelectorAll(".card");

for (var card of CardFlip) {
  card.addEventListener("click", Flip);
}

function Flip() {
  this.classList.toggle("is-flipped");
}

/* Slider */
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

/* Meme */

const imageArray = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg",
  "17.jpeg",
  "18.jpeg",
];

function getRandomImage() {
  random_index = Math.floor(Math.random() * imageArray.length);
  selected_image = imageArray[random_index];
  document.getElementById("image_shower").src = `img/meme/${selected_image}`;
}

getRandomImage();

/* Source */
const accordionItemHeaders = document.querySelector(".source");

accordionItemHeaders.addEventListener("click", Source);

function Source() {
  accordionItemHeaders.classList.toggle("active");
  const accordionItemBody = accordionItemHeaders.nextElementSibling;
  if (accordionItemHeaders.classList.contains("active")) {
    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
  } else {
    accordionItemBody.style.maxHeight = 0;
  }
}
