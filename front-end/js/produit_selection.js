

// récupération de la requête URL 

const  queryString_url_id = window.location.search;

// On enlève le point d'interogation 


const urlSearchParams = new URLSearchParams(queryString_url_id);

// puis on met l'id dans une constante.
const id =   urlSearchParams.get("id");


/* console.log(id);  */



const idProduitSelectionner = `http://localhost:3000/api/teddies/${id}`;

const iterator =  fetch(idProduitSelectionner);

iterator
  .then(response => response.json())
 console.log(iterator);
;



// On créé la constante de réponse à la promesse fetch + id.
/*  const idProduitSelectionner = fetch(`http://localhost:3000/api/teddies/${id}`)/* ;

 */
/*  console.log(idProduitSelectionner);
 */ 

// selection de la class 
const positionElement2 = document.querySelector(".container-page-produits");



// structure html
const structureProduits2 =`


<span>${idProduitSelectionner.name}</span>
        <span>${idProduitSelectionner.description}</span> 
        <span>${idProduitSelectionner.colors } €</span>
         <span>${idProduitSelectionner.price /100 } €</span>
  

`;


//formulaire sadapte au nombre d'option produit 

const optionQuantite = idProduitSelectionner;
let structureOptions = [];


//La boucle for pour afficher les options du produit 
for (let j = 0; j < optionQuantite.length; j++) {

structureOptions = structureOptions + `
<option value="${optionQuantite[j]}">${optionQuantite[j]}</option>


`;

}


// injection html dans la page produit : 
positionElement2.innerHTML = structureProduits2;


// injection html dans la page produit pour le choix des option  : 
const positionElement3 = document.querySelector("#option_produit");
positionElement3.innerHTML = structureOptions;
/* console.log(positionElement3); */
//----La gestion du panier
//recup des données selectionné par l'utilsiateur + envoir au panier.

//Selection de l'id ud formulaire

const idForm = document.querySelector("#option_produit");



//Selection du bouton ajouter l'article au panier
const btn_envoyerPanier = document.querySelector("#btn-envoyer");





//Ecouter le bouton et envoyer au panier
btn_envoyerPanier.addEventListener("click", (event) => {

event.preventDefault();

//mettre le choix de l'utilisateur dans une variable

const choixForm = idForm.value;

// recuperation des valeurs du formulaire
let optionProduit = {
    nomProduit: idProduitSelectionner.name,
    idProduitSelectionner: idProduitSelectionner._id,
    option_produit : choixForm,
    quantite: 1,
    prix: idProduitSelectionner.price / 100,
    }
    
  console.log(optionProduit);


// local storage 

// Stocker les valeurs séléctionnées dans le local storage 

// Déclaration des variable produit enregistrer dans local storage
/* let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistreDansLocalStorage); */

//fonction fenêtre pop up 
/* const popupConfirmation = () =>{
if(windows.confirm( `${idProduitSelectionner.nameProduit} option : ${choixForm} à bien été ajouté au panier 
    Consultez le panier OK ou revenir à l'accueil ANNULER` ))
    {
window.location.href = "panier.html";
    }else{
window.location.href = "index.html";
    }
} */
//Fonction ajouter un produit séléctionné dans le localStorage 

const ajoutProduitLocalStorage = ()  => {
    //ajout dans le tableau de l'objet avec les values choisi par l'utilsiateur
produitEnregistreDansLocalStorage.push(optionProduit);
//La transformation en format JSON et l'envoyer dans la key "produit" du local storage
localStorage.setItem("produit",JSON.stringify(produitEnregistreDansLocalStorage));
}
// json.parse convertire les données de json du local storage en objet javascrpit

if(produitEnregistreDansLocalStorage){
   
    ajoutProduitLocalStorage();
/* popupConfirmation(); */

} // si il n'y a pas de prpduit enregistré dans local storage

else {

produitEnregistreDansLocalStorage = [];
ajoutProduitLocalStorage();
/* popupConfirmation(); */
}



});


