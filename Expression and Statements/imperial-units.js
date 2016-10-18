function inchesToFootAndInches([inches]) {
    inches = Number(inches);
    return `${Math.floor(inches / 12)}'-${inches%12}"`;
}

console.log(inchesToFootAndInches([33]))