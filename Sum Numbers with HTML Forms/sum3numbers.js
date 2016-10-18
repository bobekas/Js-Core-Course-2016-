"use strict";

function sumNumbers(numbers) {
    if(Array.isArray(numbers)) {

        if(numbers.length === 0) {
            console.log('Empty array');
            return;
        } else {
            let sum = 0;
            for(let i = 0; i < numbers.length; i++) {
                if(!isNaN(numbers[i])) {
                    sum+=numbers[i];
                } else {
                    console.log(`"${numbers[i]}" is not a number`);
                    return;
                }

            }
            console.log(`Sum = ${sum}`);
        }
    } else {
        console.log('Given input isnt array');
        return;
    }
}

sumNumbers([1, 1]);