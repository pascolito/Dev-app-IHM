const inputRecherche = document.getElementById("recherche");
const listePosts = document.getElementById("postsListe");
const datalistPosts = document.getElementById("liste-data");
const formRecherchePost = document.getElementById("form-post");

//fonction pour charger les posts depuis le localStorage
function chargerPosts() {
    const data = localStorage.getItem("post");
    return data ? JSON.parse(data) : [];
}

//fonction pour remplir la liste des suggestions de recherche
function remplirSuggestions() {
    if (!datalistPosts) return;

    const posts = chargerPosts();
    datalistPosts.innerHTML = "";

    const textes = [];
    for (let i = 0; i < posts.length; i++) {
        const texte = posts[i].text;
        if (texte && textes.indexOf(texte) === -1) {
            textes.push(texte);
        }
    }

    const derniersTextes = textes.slice(-20);
    for (let i = 0; i < derniersTextes.length; i++) {
        const option = document.createElement("option");
        option.value = derniersTextes[i];
        datalistPosts.appendChild(option);
    }
}

//fonction pour filtrer les posts en fonction du terme de recherche
function filtrerPosts(terme) {
    if (!listePosts) return;

    const recherche = terme.toLowerCase().trim();
    const items = listePosts.children;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const contenu = item.querySelector(".post-content")?.textContent.toLowerCase() || "";
        const auteur = item.querySelector(".post-info .name")?.textContent.toLowerCase() || "";
        const affiche = recherche === "" || contenu.indexOf(recherche) !== -1 || auteur.indexOf(recherche) !== -1;
        item.style.display = affiche ? "" : "none";
    }
}

//fonction pour démarrer la recherche de posts
function demarrerRecherchePost() {
    if (!inputRecherche || !listePosts || !formRecherchePost) {
        return;
    }

    formRecherchePost.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    remplirSuggestions();

    inputRecherche.addEventListener("input", function () {
        filtrerPosts(inputRecherche.value);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", demarrerRecherchePost);
} else {
    demarrerRecherchePost();
}

