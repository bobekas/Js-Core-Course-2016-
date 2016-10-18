function findVariableNamesInSentences(input) {
    for (let row of input) {
        console.log(row.match(/\b_[a-zA-Z0-9]+\b/g).map(name => name.substring(1)).join(','))
    }
}

findVariableNamesInSentences(['The _id and _age variables are both integers.'])