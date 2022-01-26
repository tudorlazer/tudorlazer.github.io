var firstNumber = document.querySelector('#no1');
var secondNumber = document.querySelector('#no2');
var addButton = document.querySelector('#add');
var multiplyButton = document.querySelector('#multiply');
var result = document.querySelector('.result');

function addFunction(){

var sum = Number(firstNumber.value) + Number(secondNumber.value);
result.innerHTML = sum;

}

function multiplyFunction(){

var multiplication = Number(firstNumber.value) * Number(secondNumber.value);
result.innerHTML = multiplication;

}

addButton.addEventListener('click' ,addFunction );
multiplyButton.addEventListener('click' ,multiplyFunction );
