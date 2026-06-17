
const listpost = JSON.parse(localStorage.getItem("post")) || {};
const CommentairesList = document.getElementById("liste-commentaires-resultats");

document.addEventListener("click", function(event) {

    // Afficher / masquer la zone de commentaire

    //élément qui a été cliqué, regarde ensuite la classe correspondante
    if (event.target.classList.contains("btnCommentaire")) {

        const post = event.target.closest(".post");
    
        //trouve la zone commentaire
        const zone = post.querySelector(".zoneCommentaire");
    
        //change la valeur pour l'affichage ou le dé-affichage
        zone.style.display =
            zone.style.display === "block" ? "none" : "block";
    
        afficherCommentaire(post.dataset.id, zone);
    }
    // Envoyer un commentaire
    if (event.target.classList.contains("envoyerCommentaire")) {

        const textarea = event.target.parentElement.querySelector("textarea");
        const commentaire = textarea.value.trim();

        if (commentaire === "") return;

        const postId = event.target.closest(".envoyerCommentaire").dataset.id; 

        const postes = JSON.parse(localStorage.getItem("post")) || [];

        postes.forEach(post => {
            if (post.id == postId) {
                post.comments.push({
                    idUser: currentAccount,
                    commentaire: commentaire
                });
                localStorage.setItem("post", JSON.stringify(postes));
            }
        });
        textarea.value="";
        location.reload();
}});

// Fonction pour afficher les commentaires d'un post
function afficherCommentaire(postId, zone) {

    const postes = JSON.parse(localStorage.getItem("post")) || [];

    const post = postes.find(p => p.id == postId);

    if (!post) return;

    const liste = zone.querySelector(".liste-commentaires-resultats");

    liste.innerHTML = "";

    const commentaires = post.comments || [];

    commentaires.forEach(comment => {

        const li = document.createElement("li");
        const photo_profile = document.createElement("img");
        photo_profile.src =  comptes[comment.idUser].pdp;
        photo_profile.classList.add("preview_pdp_petit"); //ajout un ID a la nouvelle image

        
        
        const texte = document.createTextNode(
            comptes[comment.idUser].nom +" " +comptes[comment.idUser].prenom +
            " : " + comment.commentaire
            );
        
            li.appendChild(photo_profile);
             li.appendChild(texte);
        liste.appendChild(li);
      

        
    });
}
        
    



    
