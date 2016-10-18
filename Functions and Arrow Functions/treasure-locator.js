function treasureLocator(input) {
    input = input.map(Number)
    let islands = []
    let treasures = []
    for (let i = 0; i < input.length; i+=2) {
        treasures.push(createTreasure(input[i], input[i + 1]))
    }

    islands.push(createIsland('Tokelau', 8, 9, 0, 1))
    islands.push(createIsland('Tuvalu', 1, 3, 1, 3))
    islands.push(createIsland('Samoa', 5, 7, 3, 6))
    islands.push(createIsland('Tonga', 0, 2, 6, 8))
    islands.push(createIsland('Cook', 4, 9, 7, 8))

    treasures.forEach(treasure => {
        let outisdeIsland = true
        for(island of islands) {
            if(isOnIsland(treasure, island)) {
                console.log(island.name)
                outisdeIsland = false
                break
            }
        }
        if(outisdeIsland) console.log('On the bottom of the ocean')
    })
    
    function isOnIsland(treasure, island) {
        if(treasure.x >= island.minX && treasure.x <= island.maxX && treasure.y >= island.minY && treasure.y <= island.maxY) {
            return true
        }
        return false
    }

    function createTreasure(x, y) {
        return {
            x: x,
            y: y
        }
    }
    function createIsland(name, minX, maxX, minY, maxY) {
        return {
            name: name,
            minX: minX,
            maxX: maxX,
            minY: minY,
            maxY: maxY
        }
    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3])