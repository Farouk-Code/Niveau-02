function isInTheString(firstString, stringToCompar) {
    for (let i = 0; i <= firstString.length - stringToCompar.length; i++) {
        let correspondence = true;
        for (let j = 0; j < stringToCompar.length; j++) {
            if (firstString[i + j] !== stringToCompar[j]) {
                correspondence = false;
                break;
            }
        }
        if (correspondence) {
            return true;
        }
    }
    return false;
}

if (process.argv.length < 4) {
    console.log("Erreur1");
} else {
    let firstString = process.argv[2];
    let stringToCompar = process.argv[3];

    console.log(isInTheString(firstString, stringToCompar));
}