function townToJson(input) {
    let towns = []
    input.shift()
    input.forEach(row => {
        let town = row.split(/\s*\|\s*/).filter(el => el !== '')
        towns.push({
            "Town": town[0],
            "Latitude": Number(town[1]),
            "Longitude": Number(town[2])
        })
    })
    console.log(JSON.stringify(towns))
}

townToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)