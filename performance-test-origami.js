function dimensiOrigami(n) {
    let height = 20;
    let width = 20;

    for (let i = 0; i < n; i++) {
        if (height > width) {
            height /= 2;
        } else {
            width /= 2;
        }
    }

    return [height, width];
}

console.log(dimensiOrigami(1)); // first fold
console.log(dimensiOrigami(2)); // second fold
console.log(dimensiOrigami(3)); // third fold
