// Fonction qui effectue des opérations arithmétiques de base entre deux nombres
function calculate(a, b, operator) {
    a = Number(a);  // Convertit a en nombre
    b = Number(b);  // Convertit b en nombre

    switch (operator) {
        case '+':
            return a + b;  // Addition
        case '-':
            return a - b;  // Soustraction
        case '*':
            return a * b;  // Multiplication
        case '/':
            if (b === 0) {
                return "Division by zero is not allowed";  // Gestion de la division par zéro
            }
            return a / b;  // Division
        default:
            return "Invalid operator";  // Opérateur non valide
    }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Addition: 8
console.log(calculate(10, 4, '-'));  // Soustraction: 6
console.log(calculate(7, 2, '*'));   // Multiplication: 14
console.log(calculate(12, 3, '/'));  // Division: 4
console.log(calculate(8, 0, '/'));   // Erreur: "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Erreur: "Invalid operator"

export default calculate;

