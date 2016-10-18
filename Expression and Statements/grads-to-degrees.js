function gradsToDegrees([grads]) {
    grads %= 400;
    if(grads < 0 ) {
        grads += 400;
    }
    return (grads / 400) * 360;
}

console.log(gradsToDegrees([-50]));