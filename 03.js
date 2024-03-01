// Arguments à l'envers

// FONCTIONS

function inverseArguments(arguments) {
    let inverseArg = ""
    for (let i = arguments.length - 1; i >= 0; i--) {
        inverseArg += (arguments[i] + '\n')
    }
    return inverseArg
}


// GESTION DES ERREURS

function isValidArguments(arguments) {
    if (arguments.length > 1) {
        return arguments
    } else {
        return console.log("Il faut plus d'un argument !")
    }
}


// PARSING

function getArguments() {
    return process.argv.slice(2)
}

// RESOLUTION

function getInverseArguments() {
    const arguments = isValidArguments(getArguments())
    if (!arguments) {return }
    return console.log(inverseArguments(arguments))
}


// AFFICHAGE RESULTAT

getInverseArguments()