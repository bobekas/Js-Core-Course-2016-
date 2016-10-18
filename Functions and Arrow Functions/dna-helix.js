function dnaHelix([length]) {
    length = Number(length)
    let symbolsSequence = 'ATCGTTAGGG'
    for (let i = 0; i < length; i++) {
        printRow(symbolsSequence[i*2%10], symbolsSequence[(i*2 + 1)%10], i%4)
    }
    function printRow(letter1, letter2, row) {
        const print = console.log
        switch (row) {
            case 0:
                print(`**${letter1}${letter2}**`)
                break
            case 1:
                print(`*${letter1}--${letter2}*`)
                break
            case 2:
                print(`${letter1}----${letter2}`)
                break
            case 3:
                print(`*${letter1}--${letter2}*`)
                break
        }
    }
}

dnaHelix([10])