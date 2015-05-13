// Variables
var $numOne = document.querySelector('#num_one');
var $numTwo = document.querySelector('#num_two');
var $addBtn = document.querySelector('#calculateBtn')
var $answer = document.querySelector('#answer');

// Addition function
function addition() {
  var numberOne = Number($numOne.value);
  var numberTwo = Number($numTwo.value);
  var sum = numberOne + numberTwo;
  $answer.textContent = sum;
}

// Listener for calculateBtn
$addBtn.addEventListener('click', addition)