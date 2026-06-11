
const listpost = JSON.parse(localStorage.getItem("post")) || {};


//------------------------------------------------------------------------------------------ RIEN NE MARCHE--------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------ RIEN NE MARCHE--------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------ RIEN NE MARCHE--------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------ RIEN NE MARCHE--------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------ RIEN NE MARCHE--------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------ RIEN NE MARCHE--------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------ RIEN NE MARCHE--------------------------------------------------------------------------------------------

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
            
    }

    // Envoyer un commentaire
    if (event.target.classList.contains("envoyerCommentaire")) {

        const textarea = event.target.parentElement.querySelector("textarea");
        const commentaire = textarea.value.trim();

        if (commentaire === "") return;

        const postId = event.target.dataset.id; // ✔ ICI

        const postes = JSON.parse(localStorage.getItem("post")) || [];

        postes.forEach(post => {
            if (post.id == postId) {
                post.comments.push(commentaire);
            }
        });

        textarea.value="";
        console.log(commentaire,postId);
    }

});

function afficherCommentaire(){

}

