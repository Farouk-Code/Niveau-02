// Par ordre ASCII

// FONCTIONS
function sortAscii(array) {
  const asciiArray = {};
  for (let i = 0; i < array.length; i++) {
    const asciiCaracter = array[i].charCodeAt(0);
    asciiArray[asciiCaracter] = array[i];
  }

  return asciiArray;
}

function exctractSequenceFromArray(asciiArray) {
  let sentence = "";

  for (const key in asciiArray) {
    if (asciiArray.hasOwnProperty(key)) {
      sentence += asciiArray[key] + " ";
    }
  }

  return sentence;
}

// PARSING

function getArguments() {
  return process.argv.slice(2);
}

// GESTION DES ERREURS

function isValidArguments(arguments) {
  return arguments.length > 1 ? arguments : console.log("Error");
}

// RESOLUTION

function getResult() {
  const arguments = isValidArguments(getArguments());
  if (!arguments) {
    return;
  }
  return console.log(exctractSequenceFromArray(sortAscii(arguments)));
}

// AFFICHAGE

getResult();
