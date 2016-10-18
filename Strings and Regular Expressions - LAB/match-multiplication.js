function matchMultiplication([text]) {
    let multiPattern = /(\-?[1-9]+)\s*\*\s*(\-?[0-9]+\.?\d*)/g

    text = text.replace(multiPattern, (match, num1, num2) => Number(num1) * Number(num2))
    console.log(text)
}

matchMultiplication(['My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'])