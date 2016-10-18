function compoundInterest([sum, interest, compounding, time]) {
    compounding = 12 / compounding;
    interest /= 100;
    return Number((sum * Math.pow((1 + interest / compounding), compounding * time)).toFixed(2));
}

console.log(compoundInterest([1500, 4.3, 3, 6]))