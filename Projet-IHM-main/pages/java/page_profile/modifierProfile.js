const input_mail = document.getElementById("mail");

//Inscription :
const input_Nom = document.getElementById("nom");
const input_Prenom = document.getElementById("prenom");

const input_pdp = document.getElementById("pdp"); //Photo de Profil

const input_mot_de_pass = document.getElementById("mot_de_passe");
const input_mot_de_pass_conf = document.getElementById("mot_de_passe_conf");

let currentAccount = 0;

chargerComptes();
chargerDefaultValue();

function chargerComptes() {
    const data = localStorage.getItem("account");
    const data2 = localStorage.getItem("connectedAccount");

    if (data !== null) {
        comptes = JSON.parse(data);
    }

    if (data2 !== null) {
        currentAccount = JSON.parse(data2);
    }
}

function chargerDefaultValue() {

    console.log(comptes);
    console.log(currentAccount);

    if (comptes.length > 0 && comptes[currentAccount]) {

        input_Nom.value = comptes[currentAccount].nom;
        input_Prenom.value = comptes[currentAccount].prenom;
        input_mail.value = comptes[currentAccount].mail;
    }
}

