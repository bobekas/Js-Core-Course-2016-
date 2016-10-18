function employeeData(input) {
    let employeePat = /^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([A-Za-z\- 0-9]+)$/
    let match
    let results = []
    for(line of input) {
        match = employeePat.exec(line)
        if(match) {
            results.push(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`)
        }
    }
    results.forEach(row => console.log(row))
}

employeeData(
    [
        'Isacc - 1000 - CEO'
    ]
)