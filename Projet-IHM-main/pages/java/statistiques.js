
const valsuivis = document.getElementById("nbsuivis");
const valabo = document.getElementById("nbabonee");
const vallikes = document.getElementById("nblikes");


updateSuivis(currentAccount);
updateAbonnee(currentAccount);
updateLikes(currentAccount);

function updateSuivis(currentAccount) {
    let comptes_suivis = JSON.parse(localStorage.getItem("comptes_suivis")) || {};

    valsuivis.textContent = comptes_suivis[currentAccount].length;
}


function updateAbonnee(currentAccount) {
    let comptes_suivis = JSON.parse(localStorage.getItem("comptes_suivis")) || {};

    let compteur = 0;

    for (let key in comptes_suivis) {
        if (comptes_suivis[key].includes(currentAccount)) {
            compteur++;
        }
    }

    valabo.textContent = compteur;
}

function updateLikes(currentAccount) {
    let postes = JSON.parse(localStorage.getItem("post")) || {};

    let compteur = 0;
    let tableauLike = []; 
    postes.forEach(post => {
        tableauLike.push(post.like)
    });

    const resultat = tableauLike.flat().filter(x => x === currentAccount);
    vallikes.textContent = resultat.length;
}
