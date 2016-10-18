function censorship(input) {
    let text = input.shift()
    input.forEach(string => {
        text = text.replace(new RegExp(string, 'g'), '-'.repeat(string.length))
    })
    console.log(text)
}

censorship(['roses are red, violets are blue', ', violets are', 'red'])