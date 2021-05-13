'use strict';

const con = document.getElementById('convert');
const far = document.getElementById('far');
const submit = document.getElementById('celsius');
const submit1 = document.getElementById('fahrenheit');
const dispElm0 = document.getElementById('display-result-0');
const dispElm1 = document.getElementById('display-result-1');

/***** Celsius To Fahrenheit *****/
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;

  return fahrenheit;
}
convertToF(6);

con.addEventListener('click', function () {
  console.log('click++');
  this.style.background = 'green';
  let number = submit.value;
  dispElm0.textContent = `${convertToF(number)}°F`;

  convertToF(number);
});

/*****Fahrenheit to Celsius *****/
function convertToC(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);

  return celsius;
}
convertToC(1);

far.addEventListener('click', function () {
  console.log('click2+');
  this.style.background = '#490050';
  let number1 = submit1.value;
  dispElm1.textContent = `${convertToC(number1)}°C`;

  convertToC(number1);
});

/***** Buttons disabled if input empty *****/
function success() {
  if (submit.value === '') {
    con.disabled = true;
  } else {
    con.disabled = false;
  }
}

function success() {
  if (submit1.value === '') {
    far.disabled = true;
  } else {
    far.disabled = false;
  }
}

/***** INPUT FILTER *****/

function setInputFilter(textbox, inputFilter) {
  [
    'input',
    'keydown',
    'keyup',
    'mousedown',
    'select',
    'contextmenu',
    'drop',
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty('oldValue')) {
        this.value = this.oldValue;
        this.selectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = '';
      }
    });
  });
}

/***** PRESS "ENTER" KEY TO TRIGGER BUTTON *****/

let press = submit;
let press1 = submit1;

press.addEventListener('keyup', function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    con.click();
  }
});

press1.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    far.click();
  }
});
