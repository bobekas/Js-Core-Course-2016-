function concatenateReveresed(input) {
    let reversed = []
    input.forEach(word => reversed.unshift([...word].reverse().join('')))
    console.log(reversed.join(''))
}

concatenateReveresed(['I', 'am', 'student'])
concatenateReveresed(['race', 'car'])