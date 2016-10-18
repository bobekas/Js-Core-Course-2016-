function quadraticEquation([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number)
    let discriminant = Math.pow(b, 2) - 4 * a * c
    if(discriminant < 0) {
        return 'No'
    } else if(discriminant === 0) {
        return ((b * -1) / (2 * a))
    } else {
        let x = ((b * -1) +  Math.sqrt(discriminant)) / (2 * a)
        let y = ((b * -1) -  Math.sqrt(discriminant)) / (2 * a)
        if(x < y) {
            console.log(x)
            console.log(y)
        } else {
            console.log(y)
            console.log(x)
        }
    }
}

quadraticEquation([6, 11, -35])