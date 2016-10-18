function composeImgTag([src, alt]) {
    return `<img src="${src}" alt="${alt}">`;
}

console.log(composeImgTag(['smiley.gif', 'Smiley Face']))