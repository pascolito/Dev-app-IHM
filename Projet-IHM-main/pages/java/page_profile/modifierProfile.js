const form = document.getElementById("form-modification");

const input_mail = document.getElementById("mail");

// Inscription :
const input_Nom = document.getElementById("nom");
const input_Prenom = document.getElementById("prenom");

const preview_pdp = document.getElementById("preview_pdp")
const input_pdp = document.getElementById("pdp");

const input_mot_de_pass = document.getElementById("mot_de_passe");
const input_mot_de_pass_conf = document.getElementById("mot_de_passe_conf");

chargerComptes();
chargerDefaultValue();

// Fonction pour charger les comptes depuis le localStorage
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

// foncion pour charger les valeurs par défaut dans le formulaire de modification
function chargerDefaultValue() {

    if (comptes.length > 0 && comptes[currentAccount]) {

        input_Nom.value = comptes[currentAccount].nom;
        input_Prenom.value = comptes[currentAccount].prenom;
        input_mail.value = comptes[currentAccount].mail;
        preview_pdp.src = comptes[currentAccount].pdp;
    }
}

// fonction pour sauvegarder les comptes dans le localStorage
function sauvegarderComptes() {

    localStorage.setItem(
        "account",
        JSON.stringify(comptes)
    );
}

// foncion pour modifier le compte connecté
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

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Vérification mot de passe
    if (input_mot_de_pass.value.trim() !== comptes[currentAccount].mot_de_pass) {
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

        if (input_pdp.files.length > 0) {
            const reader = new FileReader();
        
            reader.onload = function (e) {
                const nvpdp = e.target.result;
                comptes[currentAccount].pdp = nvpdp;
        
                // Modifier le mot de passe si renseigné
                if (input_mot_de_pass_conf.value.trim() !== "") {
                    comptes[currentAccount].mot_de_pass =
                        input_mot_de_pass_conf.value.trim();
                }
        
                sauvegarderComptes();
                alert("Compte modifié !");
            };
        
            reader.onerror = function () {
                alert("Erreur lors de la lecture de l'image.");
            };
        
            reader.readAsDataURL(input_pdp.files[0]);
        } else {
            // Pas d'image sélectionnée
        
            if (input_mot_de_pass_conf.value.trim() !== "") {
                comptes[currentAccount].mot_de_pass =
                    input_mot_de_pass_conf.value.trim();
            }
        
            sauvegarderComptes();
            alert("Compte modifié !");

        }
        location.reload();
});