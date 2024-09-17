function pairNumbers(min, max) {
    let result = [];

    // Parcours de min à max
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            result.push(i); // Ajout des nombres pairs
        }
    }

    return result.join(','); // Retourne une chaîne de nombres séparés par des virgules
}

console.log(pairNumbers(1, 10));  // "2,4,6,8,10"
console.log(pairNumbers(5, 15));  // "6,8,10,12,14"

export default pairNumbers

