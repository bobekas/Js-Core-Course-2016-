function asignProperties(keyValueArr) {
    let object = {};

    for (let i = 0; i < keyValueArr.length; i += 2) {
        object[keyValueArr[i]] = keyValueArr[i+1];
    }
    console.log(object);
}

asignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);