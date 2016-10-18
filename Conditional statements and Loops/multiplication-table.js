function multiplicationTable([multiplier]) {
    multiplier = Number(multiplier)
    let output = '<table border="1">\n'
    let tableHead = '  <tr><th>x</th>'
    for (let i = 1; i <= multiplier; i++) {
        tableHead += `<th>${i}</th>`
    }
    tableHead += '</tr>\n'
    tableBody = ''
    for (let i = 1; i <= multiplier; i++) {
        tableBody += `  <tr><th>${i}</th>`
        for (let j = i; j <= multiplier * i; j += i) {
            tableBody += `<td>${j}</td>`
        }
        tableBody += '</tr>\n'
    }
    output += tableHead + tableBody + '</table>'
    console.log(output)
}

multiplicationTable(['5'])