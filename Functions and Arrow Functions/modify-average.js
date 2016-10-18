function modifyAverage([number]) {
    number = number.toString().split('').map(Number)
    let countOfDigits = number.length
    let sumOfDigits = number.reduce((prev, cur) => prev + cur)
    while(sumOfDigits / countOfDigits <= 5) {
        sumOfDigits += 9
        countOfDigits++
        number.push(9)
    }
    console.log(number.join(''))
}

modifyAverage([101])