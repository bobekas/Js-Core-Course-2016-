function rotateArray(input) {
    let countOfRotates = Number(input.pop())
    countOfRotates %= input.length
    for (let i = 0; i < countOfRotates; i++) {
        input.unshift(input.pop())
    }
    console.log(input.join(' '))
}

rotateArray(
    ['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
)