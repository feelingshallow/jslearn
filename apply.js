function sum(a,b) {
    return a+b;
}

console.log(sum.call({}, 2, 3));
