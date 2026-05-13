
const listeResultats = document.getElementById("liste-resultats");

let comptes = [];


function chargerComptes() {
    const data = localStorage.getItem("account");
    if (data !== null) {
        comptes = JSON.parse(data);
    }
}

function chargerLiComptesInit(){
    for (let i = 0; i < comptes.length; i++) {
    }
}
