// Prochain nombre premier

function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }

    return true;
}

function trouverNbSup (nombre) {
    let nbSupp = nombre + 1;
    while (true) {
        if (estPremier(nbSupp)) {
            return nbSupp;
        }
        nbSupp++;
    }
}

let argument = process.argv[2];

if (isNaN(argument) || argument < 0) {
    console.log("-1");
} else {
    argument = parseInt(argument);
    console.log(`Le prochain nombre supérieur est : ${trouverNbSup(argument)}`);
}