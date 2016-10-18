function calculateDistance([speedObj1, speedObj2, period]) {
    speedObj1 = Number(speedObj1);
    speedObj2 = Number(speedObj2);
    function calculateDistanceToObject(speed, period) {
        return speed * (period / 3.6);
    }
    return Math.abs(calculateDistanceToObject(speedObj1, period) - calculateDistanceToObject(speedObj2, period));
}

console.log(calculateDistance([5, -5, 40]));