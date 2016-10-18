function storeCatalogue(input) {
    let products = []
    input.forEach(row => {
        let [productName, productPrice] = row.split(' : ')
        products.push({
            name: productName.trim(),
            price: Number(productPrice.trim())
        })
    })
    products = products.sort((a, b) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    })
    let prevLetter = ''
    products.forEach(product => {
        if(prevLetter !== product.name[0]) {
            prevLetter = product.name[0]
            console.log(prevLetter)
        }
        console.log(`  ${product.name}: ${product.price}`)
    })
}
storeCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
])