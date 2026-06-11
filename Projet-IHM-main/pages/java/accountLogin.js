// 1) Rcupration des champs du formulaire

const erreur = document.getElementById("erreur");
//formulaire connexion
const form_connexion = document.getElementById("form-connexion");

//Connexion :
const input_mail = document.getElementById("mail");
const input_mot_de_pass = document.getElementById("mot_de_passe");

let comptes = [];

chargerComptes();
console.log("salut");

form_connexion.addEventListener("submit", function (event) {
    console.log("BOUTON CLICKER")
    event.preventDefault();
    const mail = input_mail.value.trim();
    console.log("OK OK")
    const mot_de_pass = input_mot_de_pass.value.trim();
    console.log("OK OK")

    if (mail === "") {
        erreur.textContent = "Le mail est obligatoire.";
        return;
    }
    if (mot_de_pass === "") {
        erreur.textContent = "Le mot de passe est obligatoire.";
        return;
    }

    let trv = false;
    for (let i = 0; i < comptes.length; i++) {
        if(mail == comptes[i].mail){
            trv = true;
            if(mot_de_pass == comptes[i].mot_de_pass){
                console.log("COMPTE CONNECTER")
                id = i;
                localStorage.setItem(
                    "connectedAccount",
                    JSON.stringify(id)
                );
                window.location.href = "/../pages/html/file_d'actualite.html";
                erreur.textContent = "";
                return;
            }
        }
    }
    if(trv === false){
        erreur.textContent = "L'adresse mail n'as pas de compte associer";
    }
    else{
        erreur.textContent = "Mot de passe incorrect";
    }
    return;
});

function chargerComptes() {
    const data = localStorage.getItem("account");
    if (data !== null) {
        comptes = JSON.parse(data);
    }
}
