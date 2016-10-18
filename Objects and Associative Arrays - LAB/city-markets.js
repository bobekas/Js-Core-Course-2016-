function cityMarkets(input) {
    let towns = new Map()
    input.forEach(row => {
        let [town, productName, amountAndPrice] = row.split(/\s+\-\>\s+/)
        amountAndPrice = amountAndPrice.split(' : ').map(Number)
        let product = {
            name: productName,
            amount: amountAndPrice[0],
            price: amountAndPrice[1]
        }
        towns.has(town) ? towns.set(town, towns.get(town).concat(product)) : towns.set(town, [product])
    })
    towns.forEach((products, town) => {
        console.log(`Town - ${town}`)
        products.forEach(product => {
            console.log(`$$$${product.name} : ${product.amount * product.price}`)
        })
    })
}

cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
])