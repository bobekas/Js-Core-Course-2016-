"use strict";
var arrayMethods = Object.getOwnPropertyNames( Array.prototype );

arrayMethods.forEach( attachArrayMethodsToNodeList );

function attachArrayMethodsToNodeList(methodName)
{
    if(methodName !== "length") {
        NodeList.prototype[methodName] = Array.prototype[methodName];
    }
};

function sumNumbers() {
    let numbers = document.getElementsByClassName('number');
    numbers = [].map.call(numbers, number => Number(number.value));
    let sum = numbers.reduce((a, b) => {return a + b});
    appendResult(document.body, sum);
}
function appendResult(element, sum) {
    let sumElement = document.createTextNode(`Sum = ${sum}`);
    element.appendChild(sumElement);
    element.appendChild(document.createElement('br'));
}