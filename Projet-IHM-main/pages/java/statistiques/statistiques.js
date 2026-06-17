
const valsuivis      = document.getElementById("nbsuivis");
const valabo         = document.getElementById("nbabonee");
const vallikes       = document.getElementById("nblikes");
const valnbPostlikes = document.getElementById("nbPostlikes");
const valnbPost      = document.getElementById("nbPost");

updateSuivis(currentAccount);
updateAbonnee(currentAccount);
updateNbPostLikes(currentAccount);
updateLikes(currentAccount);
updatenbPost(currentAccount);

// Fonction pour mettre à jour le nombre de comptes suivis
function updateSuivis(currentAccount) {
    let comptes_suivis = JSON.parse(localStorage.getItem("comptes_suivis")) || {};

    valsuivis.textContent = comptes_suivis[currentAccount].length;
}

// Fonction pour mettre à jour le nombre d'abonnés
function updateAbonnee(currentAccount) {
    let comptes_suivis = JSON.parse(localStorage.getItem("comptes_suivis")) || {};

    let compteur = 0;

    for (let key in comptes_suivis) {
        if (comptes_suivis[key].includes(currentAccount)) {
            compteur++;
        }
    }

    valabo.textContent = compteur;
}

// fonction pour mettre à jour le nombre de postes likes par l'utilisateur
function updateNbPostLikes(currentAccount) {
    let postes = JSON.parse(localStorage.getItem("post")) || {};

    let tableauLike = []; 
    postes.forEach(post => {
        tableauLike.push(post.like)
    });

    const resultat = tableauLike.flat().filter(x => x === currentAccount);
    valnbPostlikes.textContent = resultat.length;
}

// fonction pour mettre à jour le nombre de likes sur les posts de l'utilisateur
function updateLikes(currentAccount) {
    let postes = JSON.parse(localStorage.getItem("post")) || {};
    let tableauLike = []; 
    postes.forEach(post => {
        if(post.idUser===currentAccount)
        tableauLike.push(post.like);
    });

    vallikes.textContent = tableauLike.flat().length;
}

// fonction pour mettre à jour le nombre de postes de l'utilisateur
function updatenbPost(currentAccount) {
    let postes = JSON.parse(localStorage.getItem("post")) || {};
    let compteur = 0;
    postes.forEach(post => {
        if(post.idUser===currentAccount)
            compteur++;
        });

    valnbPost.textContent = compteur;
}