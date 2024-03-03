// Majuscule


// FONCTION

function capitalFirstLetter(arguments) {
    let result = []
    for (let i = 0; i < arguments.length; i++) {
        const wordInArguments = arguments[i]
        let word = ""
        for (let j= 0; j < wordInArguments.length; j++) {
            if (j === 0 && /^[^A-Z]$/.test(wordInArguments[j])) {
                word += String.fromCharCode(wordInArguments[j].charCodeAt(0) - 32)
            } else {
                word += wordInArguments[j]
            }
        }
        result.push(word)
    }
    return result
}

function printTableArguments(tableArguments) {
    let sentence = ""
    for (const argument of tableArguments) {
        sentence += (argument + " ")
    }
    return sentence
}


// PARSING
function getArgument() {
    return process.argv.slice(2)
}


// GESTION DES ERREURS
function isValidArguments(arguments) {
    const regex = /^[a-zA-Z]+$/
    if (arguments.length < 1) {
        return console.log("Error")
    } else if (arguments.length === 1 && regex.test(arguments)) {
        return arguments
    } else {
        for (const element of arguments) {
            if (!regex.test(element)) {
                return console.log("Error")
            }
        }
        return arguments
    }
}


// RESOLUTION
function getResult() {
    const arguments = isValidArguments(getArgument())
    if (!arguments) {return }
    return console.log(printTableArguments(capitalFirstLetter(arguments)))
}

// AFFICHAGE
getResult()