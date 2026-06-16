const postsListe = document.getElementById("postsListe");

const State = {
    PourToi: "PourToi",
    Suivis: "Suivis",
}

let curStatePulbication = State.PourToi;

stat();

document.getElementById("onglet_PourToi")
    .addEventListener("click", () => changeState(State.PourToi));

document.getElementById("onglet_Suivis")
    .addEventListener("click", () => changeState(State.Suivis));

function changeState(newState) {
    curStatePulbication = newState;
    stat();
}

function stat() {
    postsListe.innerHTML = "";
    switch (curStatePulbication) {
        case State.PourToi:
            afficherPostsPourToi();
            break;
        case State.Suivis:
            afficherPostsSuivis();
            break;
    }
}

function afficherPostsPourToi() {
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
                <button class="btnlike" data-id="${post.id}" style="color: ${post.like.includes(currentAccount) ? 'red' : 'gray'}">
                     ❤(${post.like.length})
                </button>
            </div>

            
            <div class="action">
                <button class="btnCommentaire" data-id="${post.id}">
                    Commenter (${post.comments.length})
                </button>
            </div>
            
            <div class="action">
                <button class="supprimerPost" data-id="${post.id}" style="display: ${post.idUser === currentAccount ? 'block' : 'none'}">
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

function afficherPostsSuivis() {
    const data = localStorage.getItem("post");

    if (!data) {
        postsListe.innerHTML = "<p>Aucun post disponible.</p>";
        return;
    }

    const postes = JSON.parse(data);

    // Affiche les plus récents en premier
    postes.reverse();


    let comptes_suivis = JSON.parse(localStorage.getItem("comptes_suivis")) || {};

    postes.forEach(post => {

        if (comptes_suivis[currentAccount] && comptes_suivis[currentAccount].includes(post.idUser)) {
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
                <button class="btnlike" data-id="${post.id}" style="color: ${post.like.includes(currentAccount) ? 'red' : 'gray'}">
                     ❤(${post.like.length})
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
        }
    });
}


function refreshPosts() {
    stat();
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