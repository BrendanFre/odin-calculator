const theNumberButtons = document.querySelectorAll('.numberButton')
const theOperatorButtons = document.querySelectorAll('.operatorButton')
const theEqualsButton = document.querySelector('#equalsButton')
const calcDisplay = document.querySelector('#display')
const clearButton = document.querySelector('#clear')


let firstNumber = ""
let secondNumber = ""
let theOperator = ""
let isSecondNumber = false

theNumberButtons.forEach(item =>{item.addEventListener('click', displayNumber)})
theOperatorButtons.forEach(item =>{item.addEventListener('click', displayOperator)})
theEqualsButton.addEventListener('click', getTotal)
clearButton.addEventListener('click', doClear)

theOperatorButtons.forEach(item =>{item.classList.add('operators')})
clearButton.classList.add('clearing')



function displayNumber(number){
    if(isSecondNumber){
        secondNumber += number.target.value.toString(16)
        calcDisplay.textContent = secondNumber
    } else{
        firstNumber += number.target.value.toString(16)
        calcDisplay.textContent = firstNumber
    }
}

function displayOperator(operator){
    theOperator = operator.target.value.toString(16)
    calcDisplay.textContent = theOperator
    isSecondNumber = true
    
}

function getTotal(){
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)
    console.log(firstNumber, secondNumber, theOperator)
    if(secondNumber == NaN){
        calcDisplay.textContent = firstNumber
        isSecondNumber = false
    } else if(theOperator === "/"){
        firstNumber = firstNumber / secondNumber
    }
    else if(theOperator === "*"){
        firstNumber = firstNumber * secondNumber
    }
    else if(theOperator === "+"){
        firstNumber = firstNumber + secondNumber
    }
    else if(theOperator === "-"){
        firstNumber = firstNumber - secondNumber
    }
    calcDisplay.textContent = firstNumber
    secondNumber = ""
    isSecondNumber = false
}

function doClear(){
    firstNumber = ""
    secondNumber = ""
    theOperator = ""
    isSecondNumber = false
    calcDisplay.textContent = ""
}