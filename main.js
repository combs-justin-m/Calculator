//target num_id text
function numberStore(numId) {
  var userInput = document.getElementById(numId);
  return Number(userInput.value);
}

var stored1 = numberStore('num_one')
var stored2 = numberStore('num_two')

//addition function
function addition(numOne, numTwo) {
  return numOne + numTwo;
}

var result = addition(stored1, stored2)

//display result in div.answer
function answer() {
  var ansr = document.getElementById("answer");
  ansr.textContent = result;
}


//listener for calculateBtn
var addBtn = document.getElementById("calculateBtn")

addBtn.addEventListener('click', answer)


