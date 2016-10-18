function populationInTowns(input) {
    let towns = new Map()
    input.forEach(row => {
        row = row.split(' <-> ')
        towns.has(row[0]) ? towns.set(row[0], towns.get(row[0]) + Number(row[1])) : towns.set(row[0], Number(row[1]))
    })
    towns.forEach((sum, town) => {
        console.log(`${town} : ${sum}`)
    })
}

populationInTowns(
    ['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)