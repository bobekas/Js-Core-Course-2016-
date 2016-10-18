function splitByGivenDelimiter([text, delimiter]) {
    console.log(text.split(delimiter).join('\n'))
}

splitByGivenDelimiter(
    [
        'One-Two-Three-Four-Five',
        '-'
    ]
)