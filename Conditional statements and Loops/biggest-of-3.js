function biggestOne([num1, num2, num3]) {
    let maxCallBack = (pre, cur) => Math.max(pre, cur)
    let biggest = [num1, num2, num3].reduce(maxCallBack)
    return biggest
}

biggestOne(['1', '2', '3']);