function round([number, precision]) {
    number = Number(number);
    precision = Number(precision);
    if(precision > 15) {
        precision = 15;
    }
    console.log(Number(number.toFixed(precision)));
}

round([3.1415926535897932384626433832795, 2]);