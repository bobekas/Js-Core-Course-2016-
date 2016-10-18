function printArrayWithGivenDelimiter(input) {
    let delimiter = input.pop()
    return input.join(delimiter)
}
console.log(printArrayWithGivenDelimiter([
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
]))
