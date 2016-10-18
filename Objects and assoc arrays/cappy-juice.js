function cappyJuice(input) {
    let juices = {}
    let juicesProperties = new Set()
    input.forEach(row => {
        let [juiceName, juiceQuantity] = row.split(' => ')
        if(!juices.hasOwnProperty(juiceName)) juices[juiceName] = 0
        juices[juiceName] += Number(juiceQuantity)
        if(juices[juiceName] >= 1000) juicesProperties.add(juiceName)
    })

    for (let property of juicesProperties) {
        juices[property] = Math.floor(juices[property] / 1000)
        juices[property] ? console.log(`${property} => ${juices[property]}`) : juices[property]
    }
}

cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
])