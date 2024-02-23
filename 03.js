if (process.argv.length < 2) {
    console.log("Erreur");
} else {
    let arguments = '';
    for (let i = process.argv.length - 1; i >= 0; i--) {
        arguments += (process.argv[i] + '\n');
    }

    console.log(arguments);
}