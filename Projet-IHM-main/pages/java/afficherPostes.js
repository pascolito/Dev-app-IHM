const postsListe = document.getElementById("postsListe");
// const postsListeCurrentAccount = document.getElementById("publication");

afficherPosts();

function refreshPosts() {
    postsListe.innerHTML = "";
    afficherPosts();
}

function afficherPosts() {
    const data = localStorage.getItem("post");

    if (!data) {
        postsListe.innerHTML = "<p>Aucun post disponible.</p>";
        return;
    }

    const postes = JSON.parse(data);

    // Affiche les plus récents en premier
    postes.reverse();

    postes.forEach(post => {
        const li = document.createElement("li");

        li.innerHTML = `
    <div class="post" data-id="${post.id}">
        <div class="post-top">
            <div class="dp">
                <img src="${comptes[post.idUser].pdp}" alt="Photo profil">
            </div>
            <div class="post-info">
                <p class="name">${comptes[post.idUser].nom} ${comptes[post.idUser].prenom}</p>
                <span class="time">${post.date}</span>
            </div>
            <i class="fas fa-ellipsis-h"></i>
        </div>

        <div class="post-content">
            ${post.text}
            ${post.img ? `<img src="${post.img}" alt="Image du post">` : ""}
        </div>

        <div class="post-bottom">
            <div class="action">
                <button class="btnlike" data-id="${post.id}">
                    Like (${post.like.length})
                </button>
            </div>
            <div class="action">
                <button class="btnCommentaire" data-id="${post.id}">
                    Commenter (${post.comments.length})
                </button>
            </div>
            
            <div class="action">
                <button class="supprimerPost" data-id="${post.id}">
                    Supprimer le post
                </button>
            </div>
        </div>

        <div class="zoneCommentaire" style="display:none; margin-top:10px;">
            <textarea placeholder="Votre commentaire..." rows="3" style="width:100%;"></textarea>
            <button class="envoyerCommentaire" data-id="${post.id}">
                Envoyer
            </button>
            <ul class="liste-commentaires-resultats"></ul>
        </div>
    </div>
`;

        postsListe.appendChild(li);
    });
}


//supprimer Post
document.addEventListener("click", function (event) {

    if (!event.target.closest(".supprimerPost")) return;

    let postes = JSON.parse(localStorage.getItem("post")) || [];
    const postId = event.target.closest(".supprimerPost").dataset.id; 

    postes = postes.filter(post => post.id !== Number(postId));
    
    localStorage.setItem("post", JSON.stringify(postes));
    refreshPosts();
        
    }
)   