function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function reset() {
  const cells = document.querySelectorAll("td:not(.freespace)");

  const bingoNumbers = {
    "b-column": {lower: 1, upper: 15},
    "i-column": {lower: 16, upper: 30},
    "n-column": {lower: 31, upper: 45},
    "g-column": {lower: 46, upper: 60},
    "o-column": {lower: 61, upper: 75},
  };

  for(let cell of cells) {
      const usedNumbers = [];
      let randomNumber;
      cell.classList.remove('dab');

      do {
        randomNumber = getRandomInt(bingoNumbers[cell.className].lower, bingoNumbers[cell.className].upper);
      } while (usedNumbers.includes(randomNumber));
    
      usedNumbers.push(randomNumber);
      cell.textContent = randomNumber;
  }
}

document.querySelector('tbody').addEventListener('click', function (e) {
  if (e.target.nodeName === "TD") {
    e.target.classList.add('dab');
  }  
});

document.querySelector('#reset').addEventListener('click', reset);

reset();

