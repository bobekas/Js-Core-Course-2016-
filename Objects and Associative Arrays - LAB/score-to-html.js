function scoreToHtml(input) {
    let escapes = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        '\'': '&#39;'
    }
    String.prototype.htmlEscaping = function () {
        return this.replace(/\>|\<|'|"|&/g, p => escapes[p])
    }
    let html = '<table>\n\t<tr><th>name</th><th>score</th></tr>\n'
    input = JSON.parse(input)
    input.forEach(result => {
        html += `\t<tr><td>${result.name.htmlEscaping()}</td><td>${result.score.toString().htmlEscaping()}</td></tr>\n`
    })
    html += '</table>'
    console.log(html)
}

scoreToHtml([ '[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]' ])