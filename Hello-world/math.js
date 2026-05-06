function add(a, b) {
    return a + b;

}
function sub(a, b) {
    return a - b;
}

//default export..

// module.exports = {
//    addFn: add,
//    subFn: sub,
// }


module.exports = {
    add,
    sub,
}

// another type

// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;