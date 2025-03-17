// #AD636C
// #009B72
// #6761AB
// #347E8D
// #798186

const switchColorContainer = document.querySelector(
  '.color-switcher-container'
);
const previousBtn = document.getElementById('previousBtn');
const resetBtn = document.getElementById('resetBtn');
const clickMeBtn = document.getElementById('clickMeBtn');
const titleHexColor = document.getElementById('titleHex');
const options = document.getElementById('options');
const nrOfClicks = document.getElementById('numberOfClicks');

let counter = 0;
let counterNegative = 0;
let clickCounter = 0;

const switchColor = () => {
  previousBtn.style.display = 'block';
  resetBtn.style.display = 'block';

  switch (counter) {
    case 0:
      switchColorContainer.style.backgroundColor = '#AD636C';
      titleHexColor.textContent = '#AD636C';
      titleHexColor.style.color = '#AD636C';
      options.value = '0';
      break;

    case 1:
      switchColorContainer.style.backgroundColor = '#009B72';
      titleHexColor.textContent = '#009B72';
      titleHexColor.style.color = '#009B72';
      options.value = '1';
      break;

    case 2:
      switchColorContainer.style.backgroundColor = '#6761AB';
      titleHexColor.textContent = '#6761AB';
      titleHexColor.style.color = '#6761AB';
      options.value = '2';
      break;

    case 3:
      switchColorContainer.style.backgroundColor = '#347E8D';
      titleHexColor.textContent = '#347E8D';
      titleHexColor.style.color = '#347E8D';
      options.value = '3';
      break;

    case 4:
      switchColorContainer.style.backgroundColor = '#798186';
      titleHexColor.textContent = '#798186';
      titleHexColor.style.color = '#798186';
      options.value = '4';
      break;
  }
  nrOfClicks.textContent = `Clicked: ${clickCounter} times`;
};

clickMeBtn.addEventListener('click', () => {
  if (counter < 4) {
    counter++;
    clickCounter++;
    switchColor();
  } else {
    counter = 0;
    clickCounter++;
    switchColor();
    previousBtn.style.display = 'none';
    resetBtn.style.display = 'none';
  }
});

previousBtn.addEventListener('click', () => {
  counter--;
  clickCounter++;
  switchColor();
  if (counter === 0) {
    previousBtn.style.display = 'none';
    resetBtn.style.display = 'none';
  }
});
resetBtn.addEventListener('click', () => {
  counter = 0;
  clickCounter++;
  switchColor();
  previousBtn.style.display = 'none';
  resetBtn.style.display = 'none';
});

options.addEventListener('change', (event) => {
  const option = event.target.value;
  if (option === '0') {
    counter = 0;
    switchColor();
    previousBtn.style.display = 'none';
    resetBtn.style.display = 'none';
  } else if (option === '1') {
    counter = 1;
    switchColor();
    previousBtn.style.display = 'block';
    resetBtn.style.display = 'block';
  } else if (option === '2') {
    counter = 2;
    switchColor();
    previousBtn.style.display = 'block';
    resetBtn.style.display = 'block';
  } else if (option === '3') {
    counter = 3;
    switchColor();
    previousBtn.style.display = 'block';
    resetBtn.style.display = 'block';
  } else if (option === '4') {
    counter = 4;
    switchColor();
    previousBtn.style.display = 'block';
    resetBtn.style.display = 'block';
  }
});
