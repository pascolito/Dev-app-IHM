const recherche = document.getElementById("recherche-utilisateur");
const listeResultats = document.getElementById("liste-utilisateur-resultats");
const totalUtilisateurs = document.getElementById("total-utilisateurs");

let comptes = [];

AfficherListeUtilisateurs();




recherche.addEventListener("input", function () {

    const texte = recherche.value.toLowerCase().trim();

    const items = listeResultats.children;

    let compteur = 0;


    //si l'entrée est vide
    if (texte.trim() === "") {
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = "flex";
        }
        totalUtilisateurs.textContent = 0;
        return;
    }

    for (let i = 0; i < items.length; i++) {

        const contenu = items[i].textContent.toLowerCase();

        // Si le texte correspond
        if (contenu.includes(texte)) {
            items[i].style.display = "flex";
            compteur++;
        }

        // Sinon on cache
        else {
            items[i].style.display = "none";
        }
    }
    totalUtilisateurs.textContent = compteur;
});



function AfficherListeUtilisateurs() {

    const data = localStorage.getItem("account");
    if (data !== null) {
        comptes = JSON.parse(data);
    }

    listeResultats.innerHTML = " ";
    for (let i = 0; i < comptes.length; i++) {
        li = document.createElement("li");
        li.textContent = comptes[i].nom + " "+ comptes[i].prenom;
        listeResultats.appendChild(li);
    }
}