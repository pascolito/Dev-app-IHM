const recherche = document.getElementById("recherche-utilisateur");
const listeResultats = document.getElementById("liste-utilisateur-resultats");
const totalUtilisateurs = document.getElementById("total-utilisateurs");

let comptes_suivies = JSON.parse(localStorage.getItem("comptes_suivis")) || {};



AfficherListeUtilisateurs(comptes);

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



function AfficherListeUtilisateurs(comptes) {

    const data = localStorage.getItem("account");
    if (data !== null) {
        comptes = JSON.parse(data);
    }

    listeResultats.innerHTML = "";

    const suivis = comptes_suivies[currentAccount] || [];

    for (let i = 0; i < comptes.length; i++) {

        const li = document.createElement("li");

        const button = document.createElement("button");
        button.value = comptes[i].id;
        button.classList.add("btn_suivre_petit");

        if (suivis.includes(comptes[i].id)) {
            button.innerText = "✓";
        } else {
            button.innerText = "Suivre";
        }

        li.textContent =
            comptes[i].nom + " " +
            comptes[i].prenom + " ";

        li.appendChild(button);
        listeResultats.appendChild(li);
    }
}