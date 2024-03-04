// Tri à bulles


// FONCTION

function bubbleSort(array) {
    let newArray = array
    let i = 0

    while (i < newArray.length) {
        if (newArray[i] > newArray[i + 1]) {
            newArray = permute(array, i)
            i = 0
            continue
        }
        i++
    }
    return newArray
}


function permute(array, index) {
    let tmp = array[index]
    array[index] = array[index + 1]
    array[index + 1] = tmp

    return array
}


// PARSING

function getArguments() {
    return process.argv.slice(2)
}


// GESTION DES ERREURS

function isValidArguments(arguments) {
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
    return console.log(bubbleSort(arguments))
}


// AFFICHAGE

getResult()