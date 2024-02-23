// Combinaison de 3 chiffres

function combination() {
    let result = '';
    for (let i = 0; i <= 9; i++) {
        for (let j = i + 1; j <= 9; j++) {
            for (let k = j + 1; k <= 9; k++) {
                result += i.toString() + j.toString() + k.toString() + ', ';
            }
        }
    }
    return result.slice(0, -2);
}

console.log(combination());