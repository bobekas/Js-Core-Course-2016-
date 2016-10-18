function countWords([text]) {
    let words = new Map()
    let matches = text.toLowerCase().match(/[a-zA-Z0-9_]+/g) || []
    matches.forEach(word => {
        words.set(word, words.get(word) || 0)
        words.set(word, words.get(word) + 1)
    })
    let allWords = Array.from(words.keys()).sort()
    allWords.forEach(word => {
        console.log(`'${word}' -> ${words.get(word)} times`)
    })
}

countWords(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --'])