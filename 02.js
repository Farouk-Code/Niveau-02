function combination () {
    let result = '';
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            for (let k = 0; k <= 9; k++){
                for (let l = 0; l <= 9; l++) {
                    result += i.toString() + j.toString() + ' ' + k.toString() + l.toString() + ', ';
                }
            }
        }
    }
    return result.slice(0, -2);
}

console.log(combination());