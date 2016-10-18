function findOccurencesOfWord([sentence, word]) {
    let pattern = new RegExp('\\b' + word + '\\b', 'gi')
    let matches = sentence.match(pattern)
    matches ? console.log(matches.length) : console.log('0')
}

findOccurencesOfWord(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'])