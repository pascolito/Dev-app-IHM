const nomprenom = document.getElementById("nomprenom");

let comptes = [];
let currentAccount = 0;

chargerComptes();
afficherCompteCo();

document.getElementById("DECONEXION").addEventListener("click", logout);

function chargerComptes() {
    const data = localStorage.getItem("account");
    const data2 = localStorage.getItem("connectedAccount");
    if (data !== null && data2 !== null) {
        comptes = JSON.parse(data);
        currentAccount = JSON.parse(data2);
    } 
}


function afficherCompteCo() {
    if(currentAccount != null){
        nomprenom.textContent = comptes[currentAccount].nom + " " + comptes[currentAccount].prenom;
    }
}

function logout() {
    localStorage.removeItem("connectedAccount");
    window.location.href = "/Projet-IHM-main/pages/html/page_accueil.html";
}