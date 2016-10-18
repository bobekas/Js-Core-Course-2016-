function extract(input) {
    input = input.map(Number)
    let prevElement = -Infinity
    input = input.filter(num => {
        if(num >= prevElement) {
            prevElement = num
            return true
        }
    })
    input.forEach(el => console.log(el))
}

extract(['20 ', ' 30 ', 2, 15, 6, 1])