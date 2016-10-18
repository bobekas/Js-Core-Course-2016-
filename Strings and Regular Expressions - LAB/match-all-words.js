function matchAllWords([text]) {
    console.log(text.match(/[a-zA-Z_0-9]+/g).join('|'))
}

matchAllWords(['_(Underscores) are also word characters'])