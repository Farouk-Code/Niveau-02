// Trie par selection


// FONCTION

function sortSelection (array) {
    for (let i = 0; i < array.length; i++) {
        let min = i

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        permute(array, i, min)
    }

    return array
}


function permute(array, index, min) {
    let tmp = array[index]
    array[index] = array[min]
    array[min] = tmp

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
    if (!arguments) {
        return
    }
    return console.log(sortSelection(arguments))
}


// AFFICHAGE

getResult()