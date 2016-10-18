function agregateTable(input) {
    input = input.map(rows => rows.split('|').map(item => item.trim()).filter(row => row !== ''))
    console.log(input.map(row => row[0]).join(', '))
    console.log(input.map(row => Number(row[1])).reduce((cur, next) => cur + next))
}

agregateTable(
    ['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)