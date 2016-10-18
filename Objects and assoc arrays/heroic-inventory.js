function heroicInvetory(input) {
    let heroes = []
    input.forEach(row => {
        let [heroName, heroLevel, items] = row.split(' / ')
        heroes.push({
            name: heroName,
            level: Number(heroLevel),
            items: items ? items.split(', ') : []
        })
    })
    console.log(JSON.stringify(heroes))
}

heroicInvetory([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])