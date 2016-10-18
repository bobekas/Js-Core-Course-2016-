function countWordsFromText([text]) {
    let words = {}
    let matches = text.match(/[a-zA-Z0-9_]+/g) || []
    matches.forEach(word => {
        if(!words.hasOwnProperty(word)) words[word] = 0
        words[word]++
    })
    console.log(JSON.stringify(words))
}

countWordsFromText(['Far too slow, you\'re far too slow.'])