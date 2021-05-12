'use strict';

const con = document.getElementById('convert');
const submit = document.getElementById('celsius');
const dispElm0 = document.getElementById('display-result-0');

function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;

  return fahrenheit;
}

convertToF(6);

con.addEventListener('click', function () {
  this.style.background = 'green';
  let number = submit.value;
  dispElm0.textContent = `${convertToF(number)}°F`;

  convertToF(number);

  submit.defaultValue = 'numbers here!';
});

function success() {
  if (submit.value === '') {
    con.disabled = true;
  } else {
    con.disabled = false;
  }
}

/***** Show Hidden *****/

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

press.addEventListener('keyup', function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('convert').click();
  }
});
