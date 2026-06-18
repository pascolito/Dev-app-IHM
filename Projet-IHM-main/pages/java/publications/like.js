document.getElementById("postsListe").addEventListener("click", function (event) {

    const btn = event.target.closest(".btnlike");
    if (!btn) return;

    const id = btn.dataset.id;

    const likes = postes[id].like;

    if (likes.includes(currentAccount)) {
        // retire le like
        postes[id].like = likes.filter(user => user !== currentAccount);
    } else {
        // ajoute le like
        postes[id].like.push(currentAccount);
    }
    

    sauvegarderPost();
    refreshPosts();
updateNbPostLikes(currentAccount);
updateLikes(currentAccount);
});


