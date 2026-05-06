// 1) Rcupration des champs du formulaire

const erreur = document.getElementById("erreur");
//formulaire inscription
const form_inscription = document.getElementById("form-inscription");

//Connexion / Inscription :
const input_mail = document.getElementById("mail");
const input_mot_de_pass = document.getElementById("mot_de_passe");

//Inscription :
const input_Nom = document.getElementById("nom");
const input_Prenom = document.getElementById("prenom");
const input_pdp = document.getElementById("pdp"); //Photo de Profil
const input_mot_de_pass_conf = document.getElementById("mot_de_passe_conf");

let comptes = [];

chargerComptes();
console.log("salut");

form_inscription.addEventListener("submit", function (event) {
    console.log("BOUTON CLICKER")
    event.preventDefault();
    const nom = input_Nom.value.trim();
    console.log("OK OK")
    const prenom = input_Prenom.value.trim();
    console.log("OK OK")
    //const pdp = itput_pdp.value.trim();
    const mail = input_mail.value.trim();
    console.log("OK OK")
    const mot_de_pass = input_mot_de_pass.value.trim();
    console.log("OK OK")

    // 1) Validation : on s’arrte la premire erreur
    if (nom === "") {
        erreur.textContent = "Le nom est obligatoire.";
        return;
    }
    if (prenom === "") {
        erreur.textContent = "Le prénom est obligatoire.";
        return;
    }
    if (mail === "") {
        erreur.textContent = "Le mail est obligatoire.";
        return;
    }
    if (mot_de_pass === "") {
        erreur.textContent = "Le mot de passe est obligatoire.";
        return;
    }
    if (mot_de_pass !== input_mot_de_pass_conf.value.trim()) {
        erreur.textContent = "Les mots de passes ne correspondent pas !";
        return;
    }
    //verifier si le compte n'existe pas déja  :
    for (let i = 0; i < comptes.length; i++) {
        if (mail === comptes[i].mail) {
            erreur.textContent = "L'adresse email est déja utilisé !";
            console.log("L'adresse email est déja utilisé !")
            return;
        }
    }
    id = comptes.length;
    // 2) Si tout est OK : effacer l’erreur
    erreur.textContent = "";

    comptes.push({
        id,
        nom,
        prenom,
        mail,
        mot_de_pass
    });
    console.log("COMPTE CREER")
    sauvegarderComptes();
});

function chargerComptes() {
    const data = localStorage.getItem("account");
    if (data !== null) {
        comptes = JSON.parse(data);
    }
}

function sauvegarderComptes() {
    localStorage.setItem(
        "account",
        JSON.stringify(comptes)
    );
}