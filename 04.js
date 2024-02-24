// Suite de Fibonacci

if (process.argv.length != 3) {
    console.log("-1");
} else if (isNaN(process.argv[2]) || parseInt(process.argv[2]) < 0) {
    console.log("-1");
} else {
    let element = parseInt(process.argv[2]);
    let tableauFibo = [0, 1];
    let resultatFibo = 0;

    for (let i = 1; i < element; i++) {
        resultatFibo = tableauFibo[i] + tableauFibo[i - 1];
        tableauFibo.push(resultatFibo);
    }

    console.log(tableauFibo[element]);
}