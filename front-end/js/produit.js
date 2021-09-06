

try {
// n° 1 stocke L'ID envoyé par L'URL --- 
 function getArticleId() {
  return new URL(location.href).searchParams.get('id')}
//  n° 2- fonction getArticle ( ID )  Renvoi les données de l'API par ID  
//  fonction getArticleId + paramêtre de la constante articleId ( = id).
function getArticle(articleId) {
  return fetch("http://localhost:3000/api/teddies/" + articleId)   
   .then(function(response) {
     return response.json()} )}
console.log();
 //  n° 3- fonction displayArticle + paramètee de article (= id )
// Puis on pointe les éléments HTML pour injecter le contenu de l'API lié à L'id. 
function displayArticle(article) {
  document.getElementById("nomsours").textContent = article.name   // article.name = réponse JSON+ID .name
   document.getElementById("prixours").textContent  = article.price / 100 + "€" 
   document.getElementById("imagesours").src = article.imageUrl;
   // Itération celon le nombre de couleurs présentes dans la réponse JSON + injection dans des balises HTML
   for (const couleurs of article.colors) { 
   document.getElementById("option_produit").innerHTML +=  "<option value ='"+couleurs+"'>" + couleurs + "</option>";
 }}
 // Objet n° 4- La fonction asynchrone
//  Distribut les paramêtres de l'ID aux fonctions qui appellent articleId +
 //  Distribut la réponse JSON aux fonctions qui appellent article  
 // Déploit le code HTML par l'appelle de la fonction displayArticle(article) 
 (async function() {
  const articleId = getArticleId() 
const article = await getArticle(articleId)
// On appelles la focntion qui injecte le code HTML
displayArticle(article)}) ()

// fonction pour passer des centimes aux euros

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
 //  5- addEventListener : Bouton envoyer vers le panier
//Ecouter le bouton envoyer vers le panier
document.getElementById("btn-envoyer").addEventListener("click", (event) => {
event.preventDefault();  //Pour ne pas changer de page au clic du bouton

  const articleId = getArticleId(); // Id   
  //Pointer les élements HTML pour récupérer les valeurs qui s'y trouvent
  const couleurChoisi = document.getElementById("option_produit").value;   // Pointe le div  Select . value 
  const qte = parseInt(document.getElementById("qte_produit").value);   //Pointe l'élement html avec parseInt : Si l'argument string n'est pas une chaîne de caractères, elle sera convertie en une chaîne (Pour Envoi au local storage) 
 const nomprd = document.getElementById("nomsours").textContent;    // On notes .textcontent car on recupère du texte et non plus les valeurs.
 const prixXquantite = roundToTwo((parseInt(document.getElementById("prixours").textContent))*qte);
   //  Objet n° 6- Récupérer les valeurs du formulaire dans un objet
  let optionProduit = {
      nomProduit: nomprd,
      idProduitSelectionner: articleId,
      option_produit : couleurChoisi,
      quantite: qte,
      prix: prixXquantite
	  }
// n° 7- Récupérer les valeurs dans le local storage puis définition d'une nouvelle liste des produits a enregistrer
	let nouvelleListeProduit = [];
//test si le local storage n'est pas vide
	if (localStorage !== null) {
		//recuperations de la liste des produits deja enregistrés dans le local storage
		let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("products")); //.parse permet de convertir les données JSON en JS
		nouvelleListeProduit = produitEnregistreDansLocalStorage;
//parcourir la liste des produits deja enregistrés
		 for (let indexTab in produitEnregistreDansLocalStorage) {   // indextab ou I (...) est identique 
			//teste si le produit enregistré dans le local storage a le meme id que le produit que je veux enregistrer
			if(produitEnregistreDansLocalStorage[indexTab].idProduitSelectionner.localeCompare(optionProduit.idProduitSelectionner) == 0){
				//dans la copie de la liste des produits je retire ce produit que je veux enregister 
				nouvelleListeProduit.splice(indexTab, 1);
			}} }
	// tester si la nouvelle liste n'est pas nulle
	if (nouvelleListeProduit !== null) {
		nouvelleListeProduit.push(optionProduit);
	}else{ //sinon elle est vide
		nouvelleListeProduit = [];
		nouvelleListeProduit.push(optionProduit);
	}
	//finalement j'enregistre la nouvelle liste dans le localstorage
	localStorage.setItem("products",JSON.stringify(nouvelleListeProduit)); //.stringify permet de convertir les données JS en JSON 
   popupConfirmation(optionProduit);
  });

  
    //fonction fenêtre pop up 
    const popupConfirmation = (optionProduit) =>{
      if(window.confirm( `${optionProduit.nomProduit} option : ${optionProduit.option_produit} à bien été ajouté au panier 
          Consultez le panier OK ou revenir à l'accueil ANNULER` ))
          {
      window.location.href = "panier.html";
          }else{
      window.location.href = "index.html";
          } 
      } 
} catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
