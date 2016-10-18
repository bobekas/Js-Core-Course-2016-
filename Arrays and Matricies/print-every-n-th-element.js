function printEveryNthElement(input) {
    let jump = Number(input.pop())

    for (let i = 0; i < input.length; i+=jump) {
        console.log(input[i])
    }
}

printEveryNthElement([1, 2, 3, 4, 5, 2])