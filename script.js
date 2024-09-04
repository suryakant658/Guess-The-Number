let button = document.getElementById('guess')
let counter = document.getElementById('counter')
let hint = document.getElementById('hint')
let Restart = document.getElementById('restart')
let count = 0
let value
let won = false
let randomValue = genrateRandomValue()

function genrateRandomValue() {
  return Math.floor(Math.random() * 10)
}

button.onclick = function () {
  value = Number(document.getElementById('guessvlaue').value)
  getHint(value)
  increasecounter()
}

function getHint(value) {
  if (value >= 1 && value <= 10) {
    //
    if (value == randomValue) {
      hint.innerText = ` Congrulations, you won in  ${count + 1} attempts!`
      won = true
    } else if (randomValue - value > 10) {
      hint.innerText = 'You guess is too low!'
    } else if (value - randomValue > 10) {
      hint.innerText = 'You guess is too high!'
    } else if (randomValue - value <= 10 && randomValue > value) {
      hint.innerText = 'You guess is Slight low!'
    } else if (value - randomValue <= 10 && value > randomValue) {
      hint.innerText = 'You guess is Slight high!'
    }
  } else {
    alert((hint.innerText = 'It Is Not Number!!'))
  }
}

function increasecounter() {
  // Counetr Incerase
  if (count < 4) {
    count++
    counter.innerText = count
  } else {
    // if greater than 5 chance
    counter.innerText = 'Guess Finshied'
    if (!won) {
      hint.innerText = ` You lost, the answer was ${randomValue}`
    }
  }
}

function restart() {
  location.href = 'index.html'
}
