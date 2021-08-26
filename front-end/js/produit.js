


// ON STOCK L'ID récupéré dans l'URL dans une fonction Asynchrone
//----------------------------------------------------
 // Objet n° 1- Objet getArticleId
 //----------------------------------
// stocke L'ID envoyé par L'URL --- searchParams.get('id') permet de rechercher la valeur ID dans les paramètres location de la page.
 /* console.log(location); */ // log les paramêtres location de la page web
 function getArticleId() {
  return new URL(location.href).searchParams.get('id')
}


 // Objet n° 2- Objet  getArticle ( ID )    
//----------------------------------
// Renvoi les donnée de l'API  choisit par ID  
//NB : Param articleId est une constante dans une fonction ( asynchrone + await  )   
//articleId (renvoit les données API)  = ArticleId (renvoit l'ID )      ArticleId = getArticleId
function getArticle(articleId) {
  return fetch("http://localhost:3000/api/teddies/" + articleId)   //http://localhost:3000/api/teddies/   numéro de L'ID
   .then(function(response) {
     return response.json()
     
   } 
   ) 
  
}
console.log();
//--------------------------------------------------
 // Objet n° 3- Objet displayArticle + article ( id )
 //----------------------------------
// On pointe les élément HTML pour injecter le contenu de l'API lié à L'id. 
function displayArticle(article) {
  document.getElementById("nomsours").textContent = article.name   // article.name = réponse JSON+ID .name
   document.getElementById("prixours").textContent  = article.price / 100 + "€" 
   document.getElementById("imagesours").src = article.imageUrl;
   // Itération celon le nombre de couleurs présentes dans la réponse JSON + injection dans des balises HTML
   for (const couleurs of article.colors) { 
   document.getElementById("option_produit").innerHTML +=  "<option value ='"+couleurs+"'>" + couleurs + "</option>";
 }  
 
 }

 //--------------------------------------------------
 // Objet n° 4- La fonction asynchrone
//  Distribut les paramêtres de l'ID aux fonctions qui appellent articleId +
 //  Distribut la réponse JSON aux fonctions qui appellent article  
 // Déploit le code HTML par l'appelle de la fonction displayArticle(article) 
 (async function() {
  const articleId = getArticleId() 

  const article = await getArticle(articleId)
  

  displayArticle(article) 
  

}) ()







function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

 //--------------------------------------------------
 //  5- addEventListener : Bouton envoyer vers le panier
//Ecouter le bouton envoyer vers le panier
document.getElementById("btn-envoyer").addEventListener("click", (event) => {

  event.preventDefault();  //Pour ne pas changer de page au clic du bouton



  // définition des Constantes pour Objet n°6 
  const articleId = getArticleId();    
  //Pointer les élements HTML pour récupérer les valeurs qui s'y trouvent
  const couleurChoisi = document.getElementById("option_produit").value;   // Pointe le div  Select . value = <OptionS>
  const qte = parseInt(document.getElementById("qte_produit").value);   //Pointe l'élement html avec parseInt : Si l'argument string n'est pas une chaîne de caractères, elle sera convertie en une chaîne (Pour Envoi au local storage) 
 const nomprd = document.getElementById("nomsours").textContent;    // On notes .textcontent car on recupère du texte et non plus les valeurs ( sous catégories ) d'un éléments.
 const prixXquantite = roundToTwo((parseInt(document.getElementById("prixours").textContent))*qte);

  //--------------------------------------------------
   //  Objet n° 6- Récupérer les valeur du formulaire dans un objet
  
  let optionProduit = {
      nomProduit: nomprd,
      idProduitSelectionner: articleId,
      option_produit : couleurChoisi,
      quantite: qte,
      prix: prixXquantite
	  }
      
    console.log(optionProduit); 
	
  //--------------------------------------------------
   // n° 7- Récupérer les valeur dans le local storage


	// definition de la nouvelle liste des produits a enregistrer
	let nouvelleListeProduit = [];

//test si le local storage n'est pas vide
	if (localStorage !== null) {
		//recuperations de la liste des produits deja enregistre dans le local storage
		let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit")); //.parse permet de convertir les données JSON en JS, produit et le nom donnée à la clée dans le local storage
		// copie de la liste des produit deja enregistre dans le local storage
		nouvelleListeProduit = produitEnregistreDansLocalStorage;
		
		//parcourir la liste des produit deja enregistre
		/* for (let indexTab in produitEnregistreDansLocalStorage) {   // indextab ou I (...) est identique 
			//teste si le produit enregistré dans le local storage a le meme id que le produit que je veux enregistrer
			if(produitEnregistreDansLocalStorage[indexTab].idProduitSelectionner.localeCompare(optionProduit.idProduitSelectionner) == 0){
				//dans la copie de la liste des produits je retire ce produit que je veux enregister 
				nouvelleListeProduit.splice(indexTab, 1);
			}
		} */
	}
	
	// tester si la nouvelle liste n'est pas nulle
	if (nouvelleListeProduit !== null) {
		nouvelleListeProduit.push(optionProduit);
	}else{ //sinon elle est vide
		nouvelleListeProduit = [];
		nouvelleListeProduit.push(optionProduit);
	}
	//finalement j'enregistre la nouvelle liste dans le localstorage
	localStorage.setItem("produit",JSON.stringify(nouvelleListeProduit)); //.stringify permet de convertir les données JS en JSON 
  
  });
