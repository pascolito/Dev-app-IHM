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
const preview_pdp = document.getElementById("preview_pdp");
const input_pdp = document.getElementById("pdp"); //Photo de Profil
const input_mot_de_pass_conf = document.getElementById("mot_de_passe_conf");

let comptes = [];

chargerComptes();
console.log("salut");

input_pdp.addEventListener("change", function () {

    if (this.files.length === 0) {
        preview_pdp.src = "";
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        preview_pdp.src = e.target.result;
    };

    reader.readAsDataURL(this.files[0]);
});

form_inscription.addEventListener("submit", function (event) {
    console.log("BOUTON CLIQUÉ");
    event.preventDefault();

    const nom = input_Nom.value.trim();
    const prenom = input_Prenom.value.trim();
    const mail = input_mail.value.trim();
    const mot_de_pass = input_mot_de_pass.value.trim();
    const mot_de_pass_conf = input_mot_de_pass_conf.value.trim();

    // Validation
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

    if (mot_de_pass !== mot_de_pass_conf) {
        erreur.textContent = "Les mots de passe ne correspondent pas !";
        return;
    }

    // Vérifier si l'email existe déjà
    for (let i = 0; i < comptes.length; i++) {
        if (mail === comptes[i].mail) {
            erreur.textContent = "L'adresse email est déjà utilisée !";
            console.log("L'adresse email est déjà utilisée !");
            return;
        }
    }

    erreur.textContent = "";

    // Fonction qui crée réellement le compte
    function creerCompte(pdp) {
        const id = comptes.length;

        comptes.push({
            id,
            nom,
            prenom,
            mail,
            mot_de_pass,
            pdp
        });

        console.log("COMPTE CRÉÉ");

        sauvegarderComptes();

        localStorage.setItem(
            "connectedAccount",
            JSON.stringify(id)
        );

        window.location.href = "/Projet-IHM-main/pages/html/file_d'actualite.html";
    }

    // Si une image a été sélectionnée
    if (input_pdp.files.length > 0) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const pdp = e.target.result; // Image en Base64
            creerCompte(pdp);
        };

        reader.onerror = function () {
            erreur.textContent = "Erreur lors de la lecture de l'image.";
        };

        reader.readAsDataURL(input_pdp.files[0]);
    } else {
        // Pas d'image sélectionnée
        creerCompte(null);
    }
});
//


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