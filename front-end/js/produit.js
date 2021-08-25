



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
  document.getElementById("option_produit").innerHTML +=  "<option value ='"+couleurs+"'>" + couleurs + "</option>";
}  

}

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}


//Ecouter le bouton et envoyer au panier
document.getElementById("btn-envoyer").addEventListener("click", (event) => {

  event.preventDefault();
  const articleId = getArticleId();
  const couleurChoisi = document.getElementById("option_produit").value;
  var qte = parseInt(document.getElementById("qte_produit").value);

  
  // recuperation des valeurs du formulaire
  let optionProduit = {
      nomProduit: document.getElementById("nomsours").textContent,
      idProduitSelectionner: articleId,
      option_produit : couleurChoisi,
      quantite: qte,
      prix: roundToTwo((parseInt(document.getElementById("prixours").textContent))*qte)
	  }
      
    console.log(optionProduit);
	
	// definition de la nouvelle liste des produits a enregistrer
	let nouvelleListeProduit = [];

//test si le local storage n'est pas vide
	if (localStorage !== null) {
		//recuperations de la liste des produits deja enregistre dans le local storage
		let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
		// copie de la liste des produit deja enregistre dans le local storage
		nouvelleListeProduit = produitEnregistreDansLocalStorage;
		
		//parcourir la liste des produit deja enregistre
		for (let indexTab in produitEnregistreDansLocalStorage) { 
			//teste si le produit enregistré dans le local storage a le meme id que le produit que je veux enregistrer
			if(produitEnregistreDansLocalStorage[indexTab].idProduitSelectionner.localeCompare(optionProduit.idProduitSelectionner) == 0){
				//dans la copie de la liste des produits je retire ce produit que je veux enregister 
				nouvelleListeProduit.splice(indexTab, 1);
			}
		}
	}
	
	// tester si la nouvelle liste n'est pas nulle
	if (nouvelleListeProduit !== null) {
		nouvelleListeProduit.push(optionProduit);
	}else{ //sinon c'est a dire elle est nulle ou vide
		nouvelleListeProduit = [];
		nouvelleListeProduit.push(optionProduit);
	}
	//finalement j'enregistre la nouvelle liste dans le localstorage
	localStorage.setItem("produit",JSON.stringify(nouvelleListeProduit));
  
  });
