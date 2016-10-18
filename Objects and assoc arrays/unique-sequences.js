function uniqueSequences(input) {
    let sequences = new Set()
    input.forEach(row => {
        sequences.add(JSON.parse(row).sort((a, b) => {
            return b - a
        }).join(', '))
    })
    Array.from(sequences).sort((a, b) => {
        if(a.split(', ').length > b.split(', ').length) return 1
        if(a.split(', ').length < b.split(', ').length) return -1
    }).forEach(sequence => {
        console.log(`[${sequence}]`)
    })
}

uniqueSequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
])