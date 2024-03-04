// Entre min et max


// FONCTION

function betweenMinMax(min, max) {
    const minimum = Number(min)
    const maximum = Number(max)
    let result = ""
    for (let i = minimum; i < maximum; i++) {
        result += (i + " ")
    }
    return result
}



// PARSING
function getArguments() {
    return process.argv.slice(2)
}


// GESTION DES ERREURS
function isValidArguments(arguments) {
    if (arguments.length !== 2 || isNaN(arguments[0]) || isNaN(arguments[1])) {
        return console.log("Error")
    } else {
        return arguments
    }
}


// RESOLUTION
function getResult() {
    const arguments = isValidArguments(getArguments())
    if (!arguments) {return }
    let min, max
    if (Number(arguments[0]) < Number(arguments[1])) {
        min = arguments[0]
        max = arguments[1]
    } else {
        min = arguments[1]
        max = arguments[0]
    }
    return console.log(betweenMinMax(min, max))
}


// AFFICHAGE

getResult()