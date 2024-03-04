// Index voulu

// FONCTIONS
function areStringsEqual(firstString, secondString) {
    return firstString === secondString
}

function comparisonInArray(array, argument) {
    let result = "-1"
    for (const indexArray in array) {
        if (areStringsEqual(array[indexArray], argument)) {
            result = indexArray
            break
        }
    }
    return result
}


// PARSING
function getArrayArguments() {
    return process.argv.slice(2)
}


// GESTION DES ERREURS

function isValidArguments(arguments) {
    return (arguments.length < 2) ? console.log("-1") : arguments
}


// RESOLUTION

function getResult() {
    const arguments = isValidArguments(getArrayArguments())
    if (!arguments) {return }
    const array = arguments.slice(0, -1)
    const argument = arguments[arguments.length - 1]
    return console.log(comparisonInArray(array, argument))
}


// AFFICHAGE

getResult()