// Différence minimum absolue

// FONCTIONS

function minimumAbsoluteDifference(arrayNumber) {
    let firstDiffFound = false
    let minAbsoluteDifference = 0
    for (let i = 0; i < arrayNumber.length; i++) {
        for (let j = i + 1; j < arrayNumber.length; j++) {
            const currentDifference  = Number(arrayNumber[j]) - Number(arrayNumber[i])
            const absoluteDifference = (currentDifference < 0) ? -currentDifference : currentDifference

            if (!firstDiffFound || absoluteDifference < minAbsoluteDifference) {
                firstDiffFound = true;
                minAbsoluteDifference = absoluteDifference;
            }
        }
    }
    return minAbsoluteDifference
}



// PARSING

function getArguments() {
    return process.argv.slice(2)
}


// GESTION DES ERREURS

function isValidArguments(arguments) {
    // return (arguments.length > 1) ? arguments : console.log("Error")
    if (arguments.length > 1) {
        for (const element of arguments) {
            if (isNaN(element)) {
                return console.log("Error")
            }
        }
        return arguments
    } else {
        return console.log("Error")
    }
}


// RESOLUTION

function getResult() {
    const arguments = isValidArguments(getArguments())
    if (!arguments) {return }
    return console.log(minimumAbsoluteDifference(arguments))
}


// AFFICHAGE

getResult()