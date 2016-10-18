function calculateNeededBoxes([bottles, fits]) {
    return Math.round(bottles/fits + 0.5);
}

console.log(calculateNeededBoxes([41, 5]));