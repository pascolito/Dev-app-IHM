
const valabo = document.getElementById("nbsuivis");


updateAbonnes();

function updateAbonnes() {
    let comptes_suivis = JSON.parse(localStorage.getItem("comptes_suivis")) || [];

    valabo.textContent = comptes_suivis[1].length;
}
