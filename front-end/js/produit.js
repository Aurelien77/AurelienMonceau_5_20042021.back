
 /* création de la fonction articleid qui aura pour paramêtre 
 L'id retrouné par la fonction getArticleId */
 
 (async function() {
  const articleId = getArticleId()
  console.log(articleId)
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
let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistreDansLocalStorage);

/* localStorage.setItem (
  "Couleur", "selectedcolors",
 
  )
  localStorage.setItem (
    "Id_ourson", 'article._id',
   
    )
    localStorage.setItem (
      "Nom", "article.name",
     
      )btn_envoyerPanier.addEventListener("click", (event) => {

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

 */
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
  ;
    





      
/*     for (let key in localStorage) {
console.log(key)

    }
  */

    /* for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    console.log(key, localStorage.getItem(key))
  }

  window.onstorage = event =>  {
console.log(event)
  }
window.addEventListener('storage', function(event) {
console.log(event)


/* const name = () => {
let nameStorage = localStorage.getItem('nom');
if (nameStorage == )

} */

/* const idForm = document.getElementById("select");
const choixForm = idForm.Value;
const  btn_envoyerPanier = document.getElementById("btn-envoyer");


console.log(choixForm);

btn_envoyerPanier.addEventListener("click", (Event) => {
Event.preventDefault();

})
 */



