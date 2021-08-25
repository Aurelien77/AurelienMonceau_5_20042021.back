

// Déclaration des variables produit enregistrer dans local storage
let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistreDansLocalStorage);

// Affichage des produits du panier
// Selectionner la classe ou injecter le code HTML

const positionElement3 = document.querySelector("#container-produits-panier");
console.log(positionElement3);

//Si le panier est vide : afficher le panier est vide

if(produitEnregistreDansLocalStorage === null || produitEnregistreDansLocalStorage == 0){
const paniervide = `
<div class="container-panier-vide">
<div> Le panier est vide  </div>
`;
positionElement3.innerHTML = paniervide;
} else{
    //si le panier n'est pas vide il faut afficher les porduit dans le local storage
   let structureProduitPanier = [];
for(k = 0; k < produitEnregistreDansLocalStorage.length; k++){
    structureProduitPanier = structureProduitPanier + `
    <div class="container-recapitulatif">

<div> Quantité - 1 - ${produitEnregistreDansLocalStorage[k].nomProduit} options : ${produitEnregistreDansLocalStorage[k].option_produit} </div>

<div>${produitEnregistreDansLocalStorage[k].prix} € - <button class="btn-supprimer">Supprimer </button>  </div>
</div>


`; 
}
if(k == produitEnregistreDansLocalStorage.length) {
/* console.log(produitEnregistreDansLocalStorage.length) */
// injection HTML dans la page panier 
positionElement3.innerHTML = structureProduitPanier;
}
}

//Séléction des ref boutons supprimer 
let btn_supprimer = document.querySelectorAll(".btn-supprimer");
console.log(btn_supprimer);
// Selection de l'id qui va être supprimé 
for (let b = 0; b < btn_supprimer.length; b++){

btn_supprimer[1].addEventListener("click", (event) => {
event.preventDefault();

   let id_selectionner_suppression = 
   produitEnregistreDansLocalStorage[1].id_ProduitSelectionner;
  /*  console.log(id_selectionner_suppression); */

// avec la méthode filter je séléctionne les éléments à garder et je supprime le btn cliqué

produitEnregistreDansLocalStorage = produitEnregistreDansLocalStorage.filter( 
(el) => el.id_ProduitSelectionner == id_selectionner_suppression
    );
/* console.log(produitEnregistreDansLocalStorage); */

// envoi au local storage
localStorage.setItem(
    "produit",
    JSON.stringify(produitEnregistreDansLocalStorage)
    );

// alert suppression
alert("Ce produit à été supprimer du panier");
window.location.href = "panier.html";
})
}