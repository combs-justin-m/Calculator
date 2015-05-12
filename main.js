// Variables
var numOne = document.getElementById('num_one');
var numTwo = document.getElementById('num_two');
var addBtn = document.getElementById('calculateBtn')
var ans = document.getElementById('answer');

// Addition function
function addition() {
  var numberOne = Number(numOne.value);
  var numberTwo = Number(numTwo.value);
  var sum = numberOne + numberTwo;
  ans.innerHTML = sum.toString();
}

// Listener for calculateBtn
addBtn.addEventListener('click', addition)
