// Chiffre seulement


// FONCTION

function isNumber(arguments) {
    const regex = /^[0-9 ]+$/
    let condition = true
    for (const element of arguments) {
        condition = regex.test(element);
    }
    return condition
}


// PARSING
function getArguments() {
    return process.argv.slice(2)
}


// GESTION DES ERREURS
function isValidArguments(arguments) {
    if (arguments.length >= 1) {
        return arguments
    } else {
        return console.log("Error")
    }
}


// RESOLUTION
function getResult() {
    const arguments = isValidArguments(getArguments())
    if (!arguments) {return }
    return console.log(isNumber(arguments))
}


// AFFICHAGE
getResult()