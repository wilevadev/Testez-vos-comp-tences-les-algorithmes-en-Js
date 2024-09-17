function calculateAverage(numbers) {
    // Vérifie si numbers est un tableau non vide
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "No numbers to calculate average";
    }

    // Calcule la somme des éléments du tableau
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    // Calcule et retourne la moyenne
    return sum / numbers.length;
}

// Exemples d'utilisation
console.log(calculateAverage([5, 10, 15]));  // Affiche 10
console.log(calculateAverage([10, 20, 30, 20]));  // Affiche 20
console.log(calculateAverage());  // Affiche "No numbers to calculate average"

export default calculateAverage;