function convertToBinary() {
    // Récupérer la valeur saisie par l'utilisateur à partir du champ avec l'ID "decimalInput"
    let decimalInput = document.getElementById("decimalInput").value;
    
    // Vérifier si l'entrée est un nombre valide
    // La fonction isNaN vérifie si la valeur n'est pas un nombre, et on vérifie aussi si la chaîne est vide
    if (isNaN(decimalInput) || decimalInput === "") {
        // Si l'entrée n'est pas valide, afficher une alerte à l'utilisateur
        alert("Veuillez entrer un nombre décimal valide.");
        return; // Arrêter l'exécution de la fonction
    }
    
    // Convertir la chaîne de caractères en nombre entier en base 10
    let decimalNumber = parseInt(decimalInput, 10);

    // Utiliser la méthode toString(2) pour convertir le nombre décimal en binaire
    let binaryResult = decimalNumber.toString(2);
    
    // Afficher le résultat binaire dans l'élément avec l'ID "binaryResult"
    // innerText met à jour le contenu textuel de l'élément
    document.getElementById("binaryResult").innerText = "Résultat binaire : " + binaryResult;
}



