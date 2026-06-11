const postsListe = document.getElementById("postsListe");

afficherPosts();

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
            <div class="post">
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

                    ${
                        post.img
                            ? `<img src="${post.img}" alt="Image du post">`
                            : ""
                    }
                </div>

                <div class="post-bottom">
                    <div class="action">
                        <i class="far fa-thumbs-up"></i>
                        <span>Like (${post.like})</span>
                    </div>

                    <div class="action"> 
                    <i class="far fa-comment"></i>
                         <button id="btncommentaires"> 
                            Commenter (${post.comments.length})
                        </button> 
                    </div>

                    <div class="action">
                        <i class="fa fa-share"></i>
                        <span>Share</span>
                    </div>
                </div>
            </div>
        `;

        postsListe.appendChild(li);
    });
}