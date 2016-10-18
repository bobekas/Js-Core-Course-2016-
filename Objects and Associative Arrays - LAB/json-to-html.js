function jsonToHtml([input]) {
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
    input = JSON.parse(input)
    let html = '<table>\n'
    let tableHead = `\t<tr><th>${Object.keys(input[0]).join('</th><th>')}</th></tr>\n`
    let tableBody = ''
    input.forEach(row => {
        let items = []
        for (let item in row) {
            items.push(row[item].toString().htmlEscaping())
        }
        tableBody+= `\t<tr><td>${items.join('</td><td>')}</td></tr>\n`
    })
    html += tableHead + tableBody + '</table>'
    console.log(html)
}
jsonToHtml(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'])