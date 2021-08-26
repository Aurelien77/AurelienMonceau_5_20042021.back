

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

btn_supprimer[b].addEventListener("click", (event) => {
event.preventDefault();

   let id_selectionner_suppression = 
   produitEnregistreDansLocalStorage[b].id_ProduitSelectionner;
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
};

//----------------
//----------- Le montant total du panier 
// Déclaration de la variable pour pouvoir y mettre des prix 
let prixTotalCalcul = [];
// Aller cherche les prix dans le panier
for (let m = 0; m < produitEnregistreDansLocalStorage.length; m++){
let prixProduitsDansLePanier = produitEnregistreDansLocalStorage[m].prix;
prixTotalCalcul.push(prixProduitsDansLePanier)


}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = prixTotalCalcul.reduce(reducer,0);
// Le code html du prix total à afficher : 

const affichagePrixHtml = `<div class="affichage-prix-html"> Le prix total est de : ${prixTotal} €
</div>`
positionElement3.insertAdjacentHTML("beforeend", affichagePrixHtml);
/* console.log(affichagePrixHtml); */

//
const btn_tous_supprimer_panier_html = `
<button class="btn_tous_supprimer_panier_html"> vider le panier </button>

` ;
//insertion du bouton dans le html du panier
positionElement3.insertAdjacentHTML("beforeend",btn_tous_supprimer_panier_html) ;
// La séléection de la référence du bouton "btn_tous_supprimer_panier_html"
const btn_tous_supprimer_panier = document.querySelector(".btn_tous_supprimer_panier_html");


//suppression de la clé porduit du local storage pour vider le panier
btn_tous_supprimer_panier.addEventListener('click', (e) => {            
e.preventDefault();   
//.removeItem pour vider le panier
localStorage.removeItem("produit");
alert("Le panier à été vidé");
//rechargement de la page panier
window.location.href = "panier.html";

});

const afficherFormulaireHtml = () => {
// selection element dom
const positionElement4 = document.querySelector("#container-produits-panier");

const structureFormulaire = `
<!--    Le formulaire dans le html-->
<div id="formulaireCommande">

<h2>Remplissez le formulaire pour valider la commande </h2>


<form>
<label for="prenom">Prénom : </label>
<input type="text" id="prenom" name="prenom" required>

<label for="nom">nom : </label>
<input type="text" id="nom" name="nom" required>

<label for="adresse">adresse : </label>
<textarea  id="adresse" name="adresse" required>
  </textarea>


<label for="ville">ville: </label>
<input type="text" id="ville" name="ville" required>

<label for="codePostal">codePostal : </label>
<input type="text" id="codePostal" name="codePostal" required>

<label for="email">email: </label>
<input type="text" id="email" name="email" required>
<button id="envoyerFormulaire" type="submit" name="envoyerFormulaire">  
  Confirmation de la commande
</button>

</form>

</div>
`;
// injection html
positionElement4.insertAdjacentHTML("afterend", structureFormulaire);
};
//Affichage du formulaire
afficherFormulaireHtml();
//---selection du bouton envoyer le formulaire
const btnEnvoyerFormulaire = document.querySelector("#envoyerFormulaire");
//----------addEventListener-----------
btnEnvoyerFormulaire.addEventListener("click", (e)=>{
    e.preventDefault();

    const formulaireValues = {
        prenom : document.querySelector("#prenom").value,
        nom : document.querySelector("#nom").value,
        adresse : document.querySelector("#adresse").value,
        codePostal : document.querySelector("#codePostal").value,
        email : document.querySelector("#email").value
    }
    /* localStorage.setItem("prenom", document.querySelector("#prenom").value);
    localStorage.setItem("nom", document.querySelector("#nom").value);
    localStorage.setItem("adresse", document.querySelector("#adresse").value);
    localStorage.setItem("ville", document.querySelector("#ville").value);
    localStorage.setItem("codePostal", document.querySelector("#codePostal").value);
    localStorage.setItem("email", document.querySelector("#email").value);
    const formulaire = {
        prenom : localStorage.getItem("prenom"),
        nom : localStorage.getItem("nom"),
        adresse : localStorage.getItem("adresse"),
        codePostal : localStorage.getItem("codePostal"),
        email : localStorage.getItem("email")
        
         */
     //metre l'objet formulaire vlaue dans local storage

     localStorage.setItem("formulaireValues", JSON.stringify(formulaireValues)   );
        //Mettre els valuer et produit selectionner dans un objet et envoyer vers serveur
        const aEnvoyer = {
produitEnregistreDansLocalStorage,
formulaireValues
        }
      /*   console.log("aEnvoyer");
        console.log(aEnvoyer); */
        //envoi de l'objet envoyer vers le serveur

})

// mettre les valuers du formulaire dans un objet 
