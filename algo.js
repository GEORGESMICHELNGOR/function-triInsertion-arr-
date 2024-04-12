function triInsertion(arr) {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
        // Sélectionnez l'élément à insérer dans la sous-liste triée arr[0...i-1]
        let elementCourant = arr[i];
        let j = i - 1;
        
        // Déplacez les éléments plus grands que l'élément courant vers la droite
        while (j >= 0 && arr[j] > elementCourant) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insérez l'élément courant dans sa position correcte dans la sous-liste triée
        arr[j + 1] = elementCourant;
    }
    
    return arr;
}

// Exemple d'utilisation :
const tableau = [5, 2, 4, 6, 1, 3];
console.log("Tableau non trié :", tableau);
triInsertion(tableau);
console.log("Tableau trié par insertion :", tableau);
