// Majuscule sur deux


// FONCTION

function capitalOutOfTwo(arguments) {
    let result = ""
    for (let i = 0; i < arguments.length; i++) {
        if (i % 2 === 0 && /^[^A-Z]$/.test(arguments[i])) {
            result += String.fromCharCode(arguments[i].charCodeAt(0) - 32)
        } else {
            result += arguments[i]
        }
    }
    return result
}


// PARSING
function getArgument() {
    let arguments = process.argv.slice(2)
    let result = ""
    for (let i = 0; i < arguments.length; i++) {
        result += (arguments[i] + " ")
    }
    return result
}


// GESTION DES ERREURS
function isValidArguments(arguments) {
    if (arguments.length < 1 || !/^[a-zA-Z ]+$/.test(arguments)) {
        return console.log("Error")
    } else {
        return arguments
    }
}


// RESOLUTION
function getResult() {
    const arguments = isValidArguments(getArgument())
    if (!arguments) {return }
    return console.log(capitalOutOfTwo(arguments))
}

// AFFICHAGE
getResult()