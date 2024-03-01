// Prochain nombre premier

// FONCTIONS

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= number/2; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function findSuperiorPrimeNumber (number) {
    let superiorNumber = number + 1
    while (true) {
        if (isPrime(superiorNumber)) {
            return superiorNumber
        }
        superiorNumber++
    }
}


// GESTION DES ERREURS

function isValidArguments(arguments) {
    if (arguments.length > 1 || isNaN(arguments) || Number(arguments[0]) < 0) {
        return console.log("-1")
    } else {
        return arguments
    }
}


// PARSING

function getArgument() {
    return process.argv.slice(2)
}


// RESOLUTION
function getSperiorPrimeNumber() {
    const number = isValidArguments(getArgument())
    if (!number) {return }
    return console.log(`Le prochain nombre premier pour ${getArgument()} est : ${findSuperiorPrimeNumber(Number(number))}`)
}


// AFFICHARGE RESULTAT

getSperiorPrimeNumber()