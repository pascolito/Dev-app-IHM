const recherche = document.getElementById("recherche-utilisateur");
const listeResultats = document.getElementById("liste-utilisateur-resultats");
const totalUtilisateurs = document.getElementById("total-utilisateurs");

recherche.addEventListener("input", function () {

    const texte = recherche.value.toLowerCase().trim();

    const items = document.getElementById("liste-utilisateur-resultats").children;

    let compteur = 0;


    //si l'entrée est vide
    if (texte.trim() === "") {
        listeResultats.innerHTML = "";
        totalUtilisateurs.textContent = 0;
        return;
    }

    listeResultats.innerHTML = "";

    totalUtilisateurs.textContent = compteur;

   
    let noResults = true;
    for (i = 0; i < items.length; i++) { 
        if (!items[i].innerHTML.toLowerCase().includes(texte) || input === "") {
            items[i].style.display="none";
            compteur++;
            continue;
        }
        else {
            items[i].style.display="block";
            noResults = false;              
        }
    }
    listContainer.style.display = noResults ? "none" : "block";




});