const form = document.getElementById("form-modification");

const input_mail = document.getElementById("mail");

// Inscription :
const input_Nom = document.getElementById("nom");
const input_Prenom = document.getElementById("prenom");

const input_pdp = document.getElementById("pdp");

const input_mot_de_pass = document.getElementById("mot_de_passe");
const input_mot_de_pass_conf = document.getElementById("mot_de_passe_conf");

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

    if (comptes.length > 0 && comptes[currentAccount]) {

        input_Nom.value = comptes[currentAccount].nom;
        input_Prenom.value = comptes[currentAccount].prenom;
        input_mail.value = comptes[currentAccount].mail;
    }
}

function sauvegarderComptes() {

    localStorage.setItem(
        "account",
        JSON.stringify(comptes)
    );
}

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Vérification mot de passe
    if(input_mot_de_pass.value.trim() !== comptes[currentAccount].mot_de_pass){
        alert("Mot de pass incorrect");
        return;
    }
    // Modification du compte connecté
    comptes[currentAccount].nom =
        input_Nom.value.trim();

    comptes[currentAccount].prenom =
        input_Prenom.value.trim();

    comptes[currentAccount].mail =
        input_mail.value.trim();

    // Modifier uniquement si rempli
    if (input_mot_de_pass_conf.value.trim() !== "") {

        comptes[currentAccount].mot_de_pass =
            input_mot_de_pass_conf.value.trim();
    }

    sauvegarderComptes();

    alert("Compte modifié !");
});