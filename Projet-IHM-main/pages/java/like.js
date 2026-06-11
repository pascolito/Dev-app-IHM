
const btnlike = document.getElementById("btnlike");
let post_publies = JSON.parse(localStorage.getItem("post")) || {};


btnlike.addEventListener("click", function (event) {
    const id = event.target.dataset.id;
    console.log("salut",id);
})
  

