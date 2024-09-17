// Fonction pour ajouter du texte au champ d'affichage
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Fonction pour effacer le champ d'affichage
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Fonction pour calculer le résultat de l'expression dans le champ d'affichage
function calculateResult() {
    const display = document.getElementById('display');
    
    try {
        // Vérifie si l'expression contient une division par zéro ("/0")
        if (display.value.includes('/0')) {
            display.value = "La division par zéro n'est pas autorisée";
        } else {
            // Sinon, on évalue l'expression mathématique
            display.value = eval(display.value);
        }
    } catch (e) {
        // En cas d'erreur, afficher un message générique
        display.value = "Erreur dans l'expression";
    }
}




