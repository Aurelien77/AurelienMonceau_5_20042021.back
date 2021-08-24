



//----------------------------------------------------

 /* création de la fonction articleid qui aura pour paramêtre 
 L'id retrouné par la fonction getArticleId */
 
 (async function() {
  const articleId = getArticleId()
/*   console.log(articleId) */
  const article = await getArticle(articleId)
  /* console.log(article) */
  displayArticle(article) 
  
  /* console.log(o); */
}) ()



function getArticle(articleId) {
  return fetch("http://localhost:3000/api/teddies/" + articleId)
   .then(function(o) {
     return o.json()
   }) 
   .then(function(article) {
     return article
   }) 
 /*   .catch(function(error) {
     alert(error)
   })  */
}


 /* On stock dans une fonction l'id enregistré dans les paramêtres URL */
function getArticleId() {
  return new URL(location.href).searchParams.get('id')
}



function displayArticle(article) {
 document.getElementById("nomsours").textContent = article.name
  document.getElementById("prixours").textContent  = article.price / 100 + "€" 
  document.getElementById("imagesours").src = article.imageUrl;
 
  for (const couleurs of article.colors) { 
  document.getElementById("select").innerHTML +=  "<option value =1>" + couleurs + "</option>";
}  

}




// récupération de la requête URL 

const  queryString_url_id = window.location.search;

// On enlève le point d'interogation 


const urlSearchParams = new URLSearchParams(queryString_url_id);

// puis on met l'id dans une constante.
const id =   urlSearchParams.get("id");



const idProduitSelectionner = `http://localhost:3000/api/teddies/${id}`;

const iterator =  fetch(idProduitSelectionner);

iterator
  .then(response => response.json())
 console.log(iterator);
;





// structure html
/* const structureProduits =`


<span>${idProduitSelectionner.name}</span>
        <span>${idProduitSelectionner.description}</span> 
        <span>${idProduitSelectionner.colors } €</span>
         <span>${idProduitSelectionner.price /100 } €</span>
  

`; */


//formulaire sadapte au nombre d'option produit 

const optionQuantite = idProduitSelectionner;
let structureOptions = [];


//La boucle for pour afficher les options du produit 
for (let j = 0; j < optionQuantite.length; j++) {

structureOptions = structureOptions + `
<option value="${optionQuantite[j]}">${optionQuantite[j]}</option>


`;

}

let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));



// injection html dans la page produit pour le choix des option  : 
const positionElement3 = document.querySelector("#option_produit");
positionElement3.innerHTML = structureOptions;

const idForm = document.querySelector("#option_produit");



//Selection du bouton ajouter l'article au panier
const btn_envoyerPanier = document.querySelector("#btn-envoyer");





//Ecouter le bouton et envoyer au panier
btn_envoyerPanier.addEventListener("click", (event) => {

event.preventDefault();

//mettre le choix de l'utilisateur dans une variable

const choixForm = idForm.value;






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




    
//---------------------------------------------------------


