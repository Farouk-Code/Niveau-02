// Combinaison de 3 chiffres

// FONCTION
function combination() {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    for (let j = i + 1; j <= 9; j++) {
      for (let k = j + 1; k <= 9; k++) {
        result.push(i.toString() + j.toString() + k.toString());
      }
    }
  }
  return result;
}

// RESOLUTION
function showTable() {
  // return console.log(combination().join(', '))
  let sequence = "";
  let array = combination();
  for (element of array) {
    sequence += element + " ";
  }
  return console.log(sequence);
}

// AFFICHAGE RESULTAT

showTable();
