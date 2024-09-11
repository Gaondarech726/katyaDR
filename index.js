let btn = document.querySelector(".press");
let katya = document.querySelector(".katya");
let imgKatya = katya.querySelector(".img");
let textKatya = katya.querySelector("p");
let arrow = document.querySelector(".arrow");
let arrowLeft = document.querySelector(".arrow__left");

btn.addEventListener("click", () => {
  const intervalId = setInterval(() => {
    katya.style.animation = "an 2s linear forwards";

    katya.addEventListener(
      "animationend",
      () => {
        katya.style.animation = "";
        clearInterval(intervalId);

        katya.style.left = "0px";
      },
      { once: true }
    );
  }, 300);
  setInterval(() => {
    if (
      getComputedStyle(imgKatya, null).getPropertyValue("background-image") ==
      `url("https://gaondarech726.github.io/katyaDR/Katya.jpg")`
    ) {
      imgKatya.style.backgroundImage = `url("./Katya2.jpg")`;
    } else if (
      getComputedStyle(imgKatya, null).getPropertyValue("background-image") ==
      `url("https://gaondarech726.github.io/katyaDR/Katya2.jpg")`
    ) {
      imgKatya.style.backgroundImage = `url("./Katya.jpg")`;
    }
  }, 250);
});

function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}
