// Combinaison de 2 nombres

// FONCTION
function combination () {
    let result = '';
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            for (let k = 0; k <= 9; k++){
                for (let l = 0; l <= 9; l++) {
                    if (Number(i.toString() + j.toString()) <= Number(k.toString() + l.toString())) {
                        result += i.toString() + j.toString() + ' ' + k.toString() + l.toString() + ', ';
                    }
                }
            }
        }
    }
    return result.slice(0, -2);
}


// RESOLUTION
function showResult() {
    return console.log(combination());
}

// AFFICHAGE RESULTAT

showResult();