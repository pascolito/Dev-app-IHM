const liste_utilisateur = document.getElementById("liste-utilisateur-resultats");

let comptes_suivis = JSON.parse(localStorage.getItem("comptes_suivis")) || {};

//Permet de faire le total
liste_utilisateur.addEventListener("click", function (event) {
    
    event.preventDefault();
    
    if (event.target.tagName === "BUTTON") {

        const id = Number(event.target.value);

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



