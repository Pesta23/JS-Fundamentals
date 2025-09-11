if (process.argv.length < 3 || isNaN(parseInt(process.argv[2], 10))) {
    console.log("Missing size");
} else {
    const size = parseInt(process.argv[2], 10);
    let count = 0;
    while (count < size) {
        console.log("X".repeat(size));
        count++;
    }
}
