let min = 1;
let max = 100;
let guess, newmin, newmax;
randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
guess = Number(prompt(`Lütfen 1 ile 100 arasındaki sayımızı tahmin ediniz:`));

const guessGame = function () {
  //   console.log(guess);
  //   console.log(typeof guess == "number");
  if (guess > 0 && guess < 101 && typeof guess == "number" && !(guess % 1)) {
    if (randomNum == guess) {
      alert(`**Tebrikler** ${randomNum} sayısını buldunuz.`);
    } else if (randomNum > guess) {
      min = guess;
      guess = Number(
        prompt(
          `Tahmininizi artırın.${min} ile ${max} arasında bir tahmin giriniz.`
        )
      );
      guessGame();
    } else if (randomNum < guess) {
      max = guess;
      guess = Number(
        prompt(
          `Tahmininizi azaltın.${min} ile ${max} arasında bir tahmin giriniz.`
        )
      );
      guessGame();
    }
  } else {
    guess = Number(prompt(`Lütfen 1 ile 100 arasında bir tam sayı giriniz!`));
    guessGame();
  }
};
guessGame();
