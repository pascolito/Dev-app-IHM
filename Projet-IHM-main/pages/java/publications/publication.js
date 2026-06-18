function getBasePath() {
    const path = window.location.pathname;
    const index = path.indexOf("Projet-IHM-main/");
    if (index !== -1) return path.substring(0, index + "Projet-IHM-main/".length);
    return "/Projet-IHM-main/";
}

const erreur = document.getElementById("erreur");
const form_post = document.getElementById("form-poste");

const input_text = document.getElementById("post-Text");
const input_img = document.getElementById("img"); //Image


const preview_post_pdp = document.getElementById("preview_post_pdp");//pour la photo de post 

let postes = [];


chargerPost();

// Gestion de l'envoi du formulaire
form_post.addEventListener("submit", function (event) {
    console.log("BOUTON CLIQUÉ");
    event.preventDefault();

    const idUser = currentAccount;
    const text = input_text.value.trim();
    const like = [];
    const comments = [];
    const date = new Date().toLocaleDateString();

    // Validation
    if (text === "") {
        //erreur.textContent = "Le text est obligatoire.";
        return;
    }

    // Fonction qui crée réellement le compte
    function creerPost(img) {
        chargerPost();
        const id = postes.length;
    
        postes.push({
            id,
            idUser,
            text,
            like,
            comments,
            date,
            img
        });
    
        console.log("Post CRÉÉ");
    
        sauvegarderPost();
    
        window.location.href = getBasePath() + "pages/html/file_d'actualite.html";
    }

    // Si une image a été sélectionnée
    if (input_img.files.length > 0) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = e.target.result; // Image en Base64
            creerPost(img);
        };

        reader.onerror = function () {
            erreur.textContent = "Erreur lors de la lecture de l'image.";
        };

        reader.readAsDataURL(input_img.files[0]);
    } else {
        // Pas d'image sélectionnée
        creerPost(null);
    }

    postes=[];
    
});

// Gestion de l'aperçu de l'image sélectionnée
input_img.addEventListener("change", function () {

    if (this.files.length === 0) {
        preview_post_pdp.src = "";
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        preview_post_pdp.src = e.target.result;
    };

    reader.readAsDataURL(this.files[0]);
});

// Fonction pour charger les postes depuis le localStorage
function chargerPost() {
    const data = localStorage.getItem("post");
    if (data !== null) {
        postes = JSON.parse(data);
    }
}

// fonction pour sauvegarder les postes dans le localStorage
function sauvegarderPost() {
    localStorage.setItem(
        "post",
        JSON.stringify(postes)
    );
}
updatenbPost(currentAccount);




