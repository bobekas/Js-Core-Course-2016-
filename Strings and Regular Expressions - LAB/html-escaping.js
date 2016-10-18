function htmlEscaping(input) {
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
    let html = '<ul>\n'
    input.forEach(item => html += `  <li>${item.htmlEscaping()}</li>\n`)
    html += '</ul>'

    console.log(html)
}

htmlEscaping(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>'])