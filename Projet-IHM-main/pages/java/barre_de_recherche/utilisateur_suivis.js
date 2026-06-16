const liste_utilisateur = document.getElementById("liste-utilisateur-resultats");

let comptes_suivis = JSON.parse(localStorage.getItem("comptes_suivis")) || {};

// function chargerComptes() {
//     const data2 = localStorage.getItem("connectedAccount");

//     if (data2 !== null) {
//         currentAccount = JSON.parse(data2);
//     }

//     // Création du tableau de suivi si inexistant
//     if (!comptes_suivis[currentAccount]) {
//         comptes_suivis[currentAccount] = [];
//     }
// }

liste_utilisateur.addEventListener("click", function (event) {
    
    event.preventDefault();
    
    if (event.target.tagName === "BUTTON") {

        const id = Number(event.target.value);

        // sécurité anti undefined
        if (!comptes_suivis[currentAccount]) {
            comptes_suivis[currentAccount] = [];
        }

        const suivis = comptes_suivis[currentAccount];

        if (!suivis.includes(id)) {

            suivis.push(id);
            event.target.textContent = "✓";

        } else {

            comptes_suivis[currentAccount] =
                suivis.filter(userId => userId !== id);

            event.target.textContent = "Suivre";
        }

        localStorage.setItem(
            "comptes_suivis",
            JSON.stringify(comptes_suivis)
        );

        //mets a jours les statistiques
        updateSuivis(currentAccount);
    }
});



