// String dans String


// FONCTION
function isInTheString(firstString, stringToCompar) {
    for (let i = 0; i <= firstString.length - stringToCompar.length; i++) {
        let correspondence = true
        for (let j = 0; j < stringToCompar.length; j++) {
            if (firstString[i + j] !== stringToCompar[j]) {
                correspondence = false
                break
            }
        }
        if (correspondence) {
            return true
        }
    }
    return false
}


// PARSING
function getArgument() {
    return process.argv.slice(2)
}


// GESTION DES ERREURS
function isValidArguments(arguments) {
    if (arguments.length !== 2) {
        return console.log("Error")
    } else {
        return arguments
    }
}


// RESOLUTION
function getResult() {
    const arguments = isValidArguments(getArgument())
    if (!arguments) {return }
    return console.log(isInTheString(arguments[0], arguments[1]))
}


// AFFICHAGE
getResult()