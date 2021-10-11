function calc() {

    let firstNum = document.querySelector('#num1');
    let secondNum = document.querySelector('#num2');
    let sum = document.querySelector('#sum');

    sum.value = Number(firstNum.value) + Number(secondNum.value);
}
