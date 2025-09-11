function add(a, b) {
    return a + b;
}

if (process.argv.length !== 4 || isNaN(parseInt(process.argv[2], 10)) || isNaN(parseInt(process.argv[3], 10))) {
    console.log("NaN");
} else {
    const a = parseInt(process.argv[2], 10);
    const b = parseInt(process.argv[3], 10);
    console.log(add(a, b));
}
