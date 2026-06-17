
const info = document.getElementById("information");
const publications = document.getElementById("publication");
const statistiques = document.getElementById("statistiques");

const State = {
    info: "info",
    statistiques: "statistiques",
    publications: "publications",
}

let curState = State.info;

updateAffichage();

document.getElementById("onglet_information")
    .addEventListener("click", () => changeState(State.info));

document.getElementById("onglet_statistique")
    .addEventListener("click", () => changeState(State.statistiques));

document.getElementById("modifier_publication")
    .addEventListener("click", () => changeState(State.publications));

    
function changeState(state) {
    curState = state;
    updateAffichage();
}

// Fonction pour mettre à jour l'affichage en fonction de l'état actuel
function updateAffichage() {
    info.style.display = "none";
    publications.style.display = "none";
    statistiques.style.display = "none";

    switch (curState) {
        case State.info:
            info.style.display = "flex";
            break;

        case State.publications:
            publications.style.display = "flex";
            break;

        case State.statistiques:
            statistiques.style.display = "flex";
            break;
    }
}
