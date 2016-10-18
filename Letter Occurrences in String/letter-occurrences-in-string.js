(function([str, letter]) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(letter === str[i]) {
            count++;
        }
    }
    console.log(count);
})(['ivaan', 'a']);