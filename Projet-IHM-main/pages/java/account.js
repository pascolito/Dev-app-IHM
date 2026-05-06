// 1) Rcupration des champs du formulaire

//formulaire connexion
const form_connexion = document.getElementById("form-connexion");
//formulaire inscription
const form_inscription = document.getElementById("form-inscription");

//Connexion / Inscription :
const input_mail = document.getElementById("mail");
const input_mot_de_pass = document.getElementById("mot_de_pass");

//Inscription :
const input_Nom = document.getElementById("nom");
const input_Prenom = document.getElementById("prenom");
const intput_pdp = document.getElementById("pdp"); //Photo de Profil
const input_mot_de_pass_conf = document.getElementById("mot_de_pass_conf");

let comptes = [];

chargerComptes();


form_inscription.addEventListener("submit", function (event) {
    event.preventDefault();
    const nom = input_Nom.value.trim();
    const prenom = input_Prenom.value.trim();
    const pdp = inputAge.value;
    const filiere = selectFiliere.value;

    // 1) Validation : on s’arrte la premire erreur
    if (nom === "") {
        erreur.textContent = "Le nom est obligatoire.";
        return;
    }
    if (prenom === "") {
        erreur.textContent = "Le prénom est obligatoire.";
        return;
    }
    if (!Number.isFinite(age) || age < 16 || age > 120) {
        erreur.textContent = "Âge invalide (16-120).";
        return;
    }
    if (filiere === "") {
        erreur.textContent = "Veuillez choisir une filière.";
        return;
    }
    // 2) Si tout est OK : effacer l’erreur
    erreur.textContent = "";
});

function chargerEtuchargerComptesdiants() {
    const data = localStorage.getItem("comptes");
    if (data !== null) {
        comptes = JSON.parse(data);
    }
}

function sauvegarderComptes() {
    localStorage.setItem(
        "comptes",
        JSON.stringify(comptes)
    );
}