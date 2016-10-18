function cookingByNumbers(input) {
    let number = Number(input.shift())

    for (let i = 0; i < input.length; i++) {
        makeOperation(input[i])
        console.log(number)
    }

    function makeOperation(operation) {
        switch (operation) {
            case 'chop':
                number /=2
                break
            case 'dice':
                number = Math.sqrt(number)
                break
            case 'spice':
                number++
                break
            case 'bake':
                number *= 3
                break
            case 'fillet':
                number *= 0.8
                break

        }
    }
}

cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop'])