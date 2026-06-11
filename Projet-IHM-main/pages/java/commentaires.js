
const commentaire = document.getElementById("commentaire");
const btncommentaires = document.getElementById("btncommentaire");
let post_publies = JSON.parse(localStorage.getItem("post")) || {};


document.addEventListener("click", function(event) {

    if(event.target.classList.contains("btnCommentaire")) {

        const post = event.target.closest(".post");
        const zone = post.querySelector(".zoneCommentaire");

        if(zone.style.display === "none") {
            zone.style.display = "block";
        } else {
            zone.style.display = "none";
        }
    }

});
  

