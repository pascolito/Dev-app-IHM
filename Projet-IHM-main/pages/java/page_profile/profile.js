const info = document.getElementById("information");
const publications = document.getElementById("publication");

const State = {
	info: "info",
	publications: "publications",
}

let curState = State.info;

updateAffichage();

document.getElementById("onglet_information").addEventListener("submit", changeState(State.info));
document.getElementById("modifier_publication").addEventListener("submit", changeState(State.publications));



function changeState(state){
    curState = state;
    console.log(curState);
    updateAffichage();
}

function updateAffichage(){
    switch(curState){
        case "info":
            info.style.display = "flex";
            publications.style.display = "none";
            break;
        case "publications":
            info.style.display = "none";
            publications.style.display = "flex";    
            break;
    }
}