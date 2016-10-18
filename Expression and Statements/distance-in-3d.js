function distanceIn3d([xObj1, yObj1, zObj1, xObj2, yObj2, zObj2]) {
    let obj1 = {
        x: Number(xObj1),
        y: Number(yObj1),
        z: Number(zObj1)
    };
    let obj2 = {
        x: Number(xObj2),
        y: Number(yObj2),
        z: Number(zObj2)
    };
    return Math.sqrt(Math.pow(obj1.x - obj2.x,2) + Math.pow(obj1.y - obj2.y,2) + Math.pow(obj1.z - obj2.z,2));
}

console.log(distanceIn3d([3.5, 0, 1, 0, 2, -1]));