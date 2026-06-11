 // 1) Rcupration des champs du formulaire

const erreur = document.getElementById("erreur");
//formulaire inscription
const form_post = document.getElementById("form-poste");

//Inscription :
const input_text = document.getElementById("post-Text");
const input_img = document.getElementById("img"); //Image

let postes = [];

console.log("salut");

chargerPost();

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
    
        window.location.href = "/Projet-IHM-main/pages/html/file_d'actualite.html";
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
});


function chargerPost() {
    const data = localStorage.getItem("post");
    if (data !== null) {
        postes = JSON.parse(data);
    }
}

function sauvegarderPost() {
    localStorage.setItem(
        "post",
        JSON.stringify(postes)
    );
}








// rapport 
// screen /techno utiliser 