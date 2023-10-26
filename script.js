const button7 = document.querySelector('#seven')
const button8 = document.querySelector('#eight')
const button9 = document.querySelector('#nine')
const theNumberButtons = document.querySelectorAll('.numberButton')
const buttonDivide = document.querySelector('#divide')
let firstNumber = ""
let secondNumber = ""
let isSecondNumber = false

theNumberButtons.forEach(item =>{item.addEventListener('click', displayNumber)})

function displayNumber(number){
    if(isSecondNumber){
        secondNumber += number.target.value.toString(16)
    } else{
        firstNumber += number.target.value.toString(16)
    }
    console.log(firstNumber)
}