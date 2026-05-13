const recherche = document.getElementById("recherche-utilisateur");
const listeResultats = document.getElementById("liste-resultats");
const totalRecherche = document.getElementById("total-recherche");

const totalUtilisateurs = document.getElementById("total-utilisateurs");
recherche.addEventListener("input", function () {

    const texte = recherche.value.toLowerCase().trim();

    const items = listeResultats.querySelectorAll("li");

    let compteur = 0;

    items.forEach(item => {

        const contenu = item.textContent.toLowerCase();

        if (contenu.includes(texte)) {
            item.style.display = "list-item";
            compteur++;
        } else {
            item.style.display = "none";
        }

    });

    totalUtilisateurs.textContent = compteur;
});