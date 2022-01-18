let secret = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".sec").textContent = secret;
document.querySelector('.sec').textContent="?";
let scrr = 20;

document.querySelector(".score").textContent = scrr;

let high = 0;
document.querySelector(".highscore").textContent = high;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number..🛑";
  } else if (guess == secret) {
    document.querySelector(".message").textContent = "You Win...🎉✨";
    document.querySelector('.sec').textContent=secret;
    document.querySelector('section').style.backgroundColor='#99D088';
    if (scrr > high) {
      high = scrr;
      document.querySelector(".highscore").textContent = high;
    }
  } else if (guess < secret) {
    document.querySelector(".message").textContent = "You Lost";
    if (scrr > 0) {
        document.querySelector(".message").textContent = " 📈 Low Number ";
      scrr--;
      document.querySelector(".score").textContent = scrr;
    }
  } else if (guess > secret) {
    document.querySelector(".message").textContent = "You Lost ⚡";
    if (scrr > 0) {
      scrr--;
      document.querySelector(".score").textContent = scrr;
      document.querySelector(".message").textContent = "📉 High Number ";
    }
  }
});


document.querySelector('.btn-again').addEventListener('click', function(){

    document.querySelector(".guess").value='';
    
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".score").textContent = scrr;
    document.querySelector(".highscore").textContent = high;
    secret = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".sec").textContent = secret;
    scrr=20;
    document.querySelector(".score").textContent = scrr;
    document.querySelector(".sec").textContent="?";

});
