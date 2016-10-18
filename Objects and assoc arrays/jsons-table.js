function jsonToTable(input) {
    let html = '<table>\n'
    input.forEach(row => {
        let employee = JSON.parse(row)
        html += `\t<tr>\n\t\t<td>${employee.name}</td>\n\t\t<td>${employee.position}</td>\n\t\t<td>${employee.salary}</td>\n\t</tr>\n`
    })
    html+= '</table>'
    console.log(html)
    
}

jsonToTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
])