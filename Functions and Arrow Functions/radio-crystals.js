function radioCrystals(input) {
    input = input.map(Number)
    let target = input.shift()
    let operations = [cut, lap, grind, etch, xRay]
    input.forEach(chunk => {
        console.log(`Processing chunk ${chunk} microns`)
        for (let i = 0; i < operations.length; i++) {
            if(chunk === target) break
            chunk = operations[i](chunk)
        }
        console.log(`Finished crystal ${target} microns`)
    })

    function cut(chunk) {
        let count = 0
        while(chunk / 4 >= target || chunk / 4 === target - 1) {
            chunk /= 4
            count++
        }
        if(count > 0) {
            console.log(`Cut x${count}`)
            chunk = washing(chunk)
        }
        return chunk
    }

    function lap(chunk) {
        let count = 0
        while(chunk * 0.8 >= target || chunk * 0.8 === target - 1) {
            chunk *= 0.8
            count++
        }
        if(count > 0) {
            console.log(`Lap x${count}`)
            chunk = washing(chunk)
        }
        return chunk
    }
    
    function grind(chunk) {
        let count = 0
        while(chunk - 20 >= target || chunk - 20 === target - 1) {
            chunk -= 20
            count++
        }
        if(count > 0) {
            console.log(`Grind x${count}`)
            chunk = washing(chunk)
        }
        return chunk
    }

    function etch(chunk) {
        let count = 0
        while(chunk - 2 >= target || chunk - 2 === target - 1) {
            chunk -= 2
            count++
        }
        if(count > 0) {
            console.log(`Etch x${count}`)
            chunk = washing(chunk)
        }
        return chunk
    }

    function xRay(chunk) {
        let count = 0
        while(chunk + 1 === target) {
            chunk++
            count++
        }
        if(count > 0) {
            console.log(`X-ray x${count}`)
        }
        return chunk
    }

    function washing(chunk) {
        chunk = Math.floor(chunk)
        console.log('Transporting and washing')
        return chunk
    }
}

radioCrystals([1000, 3996])