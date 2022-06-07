let min = 1;
let max = 100;
let input = document.getElementById("guess-number");
let submit = document.getElementById("submit");
let aciklama = document.querySelector("p");
let again = document.getElementById("again");
let body = document.querySelector("body");
let header = document.querySelector("h1");
let counter = 0;

const randomNum = Math.floor(Math.random() * 100) + 1;
// console.log(randomNum);

submit.addEventListener("click", () => {
  const guess = input.value;
  counter++;
  input.value = "";
  input.focus();
  if (guess > 1 && guess < 101) {
    if (randomNum == guess) {
      header.innerHTML = `**Tebrikler** ${counter}. hakkınızda ${randomNum} sayısını buldunuz.`;
      header.style.backgroundColor = "black";
      aciklama.style.display = "none";
      submit.style.display = "none";
      body.style.backgroundImage = "url(./img/tebrik.jpg)";
      body.style.color = "white";
      again.style.display = "inline";
      input.style.display = "none";
    } else if (randomNum > guess) {
      min = guess;
      aciklama.innerHTML = `Tahmininizi artırın.${min} ile ${max} arasında bir tahmin giriniz.`;
    } else if (randomNum < guess) {
      max = guess;
      aciklama.innerHTML = `Tahmininizi azaltın.${min} ile ${max} arasında bir tahmin giriniz.`;
    }
  } else {
    aciklama.innerHTML = `Lütfen 1 ile 100 arasında bir tam sayı giriniz!`;
  }
});

window.addEventListener("load", (event) => {
  again.onclick = function () {
    location.reload(true);
  };
});
