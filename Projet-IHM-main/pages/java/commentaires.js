
const commentaire = document.getElementById("commentaire");
const btncommentaires = document.getElementById("btncommentaire");
let post_publies = JSON.parse(localStorage.getItem("post")) || {};


btncommentaires.addEventListener("click", function (event) {
    //extractin du contenu du localstorage de account
    const data = localStorage.getItem("post");
    if (data !== null) {
        btncommentaires = JSON.parse(data);
    }

        const li = document.createElement("li");

        const input = document.createElement("input");
        input.value = "Commentez";
        // input.classList.add("btn_suivre_petit");

        //sur le clique on change le contenu du bouton pour dire "suivis"
       



        // const photo_profile = document.createElement("img");
        // photo_profile.src = comptes[i].pdp;
        // photo_profile.setAttribute('id','preview_pdp_petit'); //ajout un ID a la nouvelle image
        
    

        //permet d'jouter les balises li pour afficher chaque utilisateur
        const texte = document.createTextNode(
            comptes[i].nom + " " + comptes[i].prenom + " "
        );
        li.appendChild(photo_profile);
        li.appendChild(texte);
        li.appendChild(button);
    
        listeResultats.appendChild(li);
    
})
  

