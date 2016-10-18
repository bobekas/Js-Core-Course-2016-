function lowestPricesInCities(input) {
    let towns = new Map()
    input.forEach(row => {
        let [town, productName, productPrice] = row.split(' | ')
        if(!towns.has(town)) towns.set(town, new Map())
        towns.get(town).set(productName, Number(productPrice))
    })
    let products = new Map()
    towns.forEach((townProducts, townName) => {
        townProducts.forEach((productPrice, productName) => {
            if(!products.has(productName)) {
                products.set(productName, {price: productPrice, townName: townName})
            } else {
                if(products.get(productName).price > productPrice) {
                    products.set(productName, {price: productPrice, townName: townName})
                }
            }
        })
    })
    products.forEach((product, productName) => {
        console.log(`${productName} -> ${product.price} (${product.townName})`)
    })
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Orange | 100',
    'Sofia | Orange | 1',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])