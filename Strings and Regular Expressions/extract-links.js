function extractLinks(input) {
    let urlPattern = /www\.[a-zA-Z0-9\-]+(\.[a-z]+)+/g
    let matches = input.join(' ').match(urlPattern)
    if(matches) {
        for (let match of matches) {
            console.log(match)
        }
    }
}

extractLinks([])