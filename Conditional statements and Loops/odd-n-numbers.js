function oddNumbers([count]) {
    count = Number(count)
    for (let i = 1; i <= count; i+=2) {
        console.log(i)
    }
}

oddNumbers(['5'])