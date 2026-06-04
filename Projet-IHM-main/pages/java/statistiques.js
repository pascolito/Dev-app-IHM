
const valsuivis = document.getElementById("nbsuivis");
const valabo = document.getElementById("nbabonee");


updateSuivis(currentAccount);
updateAbonnee(currentAccount);

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
