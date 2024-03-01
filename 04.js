// Suite de Fibonacci

// FONCTION

function fiboAtPosition(position) {
    let fiboTab = [0, 1]
    let resultFibo = 0

    for (let i = 1; i < position; i++) {
        resultFibo = fiboTab[i] + fiboTab[i - 1]
        fiboTab.push(resultFibo)
    }

    return fiboTab[position]
}


//GESTION DES ERREURS

function isValidArgument(argument) {
    if (argument.length !== 1 || isNaN(argument)) {
        return console.log("-1")
    } else {
        return argument
    }
}


// PARSING

function getArgument() {
    return process.argv.slice(2)
}


// RESOLUTION

function getFiboAtPosition() {
    const position = isValidArgument(getArgument())
    if (!position) {return }
    return console.log(fiboAtPosition(Number(position)))
}

// AFFICHAGE RESULATAT

getFiboAtPosition()