
/*     try {   */
//La console indique en logs : 5 sections Teddies
try {



//création d'une requête vers l'api qui est une réponse au format .json
const product_sheet = fetch("http://localhost:3000/api/teddies")  

    .then((response) => {
        return response.json();
    })
    // Itération sur la réponse 
    
    .then((response) => {
        for (let o of response) {      //création d'une variable appelée "O" avec les résultats de l'itération de la requête.json
            console.log(o);
            











            
             //On pointe l'id "OursonTemplate"
            const Template = document.getElementById("OursonTemplate");
//On crée une constante avec l'importation de tous les éléments HTML qui se trouvent dans "<template> .. .. </template>" (noeuds)
            const CopieTemplate = document.importNode(Template.content, true);
// On copie le template HTML dans l'élément pointé
// Pas de innerHTML pour plus de Securité.
 CopieTemplate.getElementById("imagesours").src = o.imageUrl;    
CopieTemplate.getElementById("nomsours").textContent = o.name;
CopieTemplate.getElementById("prixours").textContent= o.price / 100 + "€";
CopieTemplate.getElementById("descriptionours").textContent= o.description;
//On récupère l'ID sous la forme d'un lien href puis on ajoute un ID qui sera envoyé dans L'URL une fois le lien cliqué.
 CopieTemplate.getElementById("link").href += "?id=" + o._id;
//On copie celon le nombre d'itération le Template dans la div "sections"
document.getElementById("sections").appendChild(CopieTemplate);
        } 
}
    
) // fin du .then 

/* if(response.ok){
    

    console.log("ok");
    
      }else {
        console.log(`Réponse du serveur : ${response.status}  `);
        alert(`Problème avec la réponse du serveur : ${response.status}  ` )
      
      }
      }catch(e) {
        console.log("ERREUR qui vient du catch()");
        console.log(e);
        alert(`ERREUR qui vient du catch()${e}`);
      
      } */
     
      
      
    
    ;
    
    
    




        

        let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("products"));
        let nombre_produit_dans_panier = JSON.parse(localStorage.getItem("products"));
        // Affichage des produits du panier
        // Selectionner la classe ou injecter le code HTML pour l'affichage des produits
        const positionElement3 = document.querySelector("#nombre_panier");
        //Si le panier est vide : afficher le panier est vide
        if(nombre_produit_dans_panier === null || nombre_produit_dans_panier == 0)
        
        {
        const paniervide = `
        <div class="flexlign"><div class="container-panier-vide card7 flexlign">
       Le panier est vide  </div></div>
        `;
        positionElement3.innerHTML = paniervide;
} else{
    //si le panier n'est pas vide il faut afficher les porduit du storage

let prixTotalCalcul = [];
// Aller chercher les prix dans le panier
for (let m = 0; m < produitEnregistreDansLocalStorage.length; m++){
let prixProduitsDansLePanier = produitEnregistreDansLocalStorage[m].prix;
prixTotalCalcul.push(prixProduitsDansLePanier)}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = prixTotalCalcul.reduce(reducer,0);
// Le code html du prix total à afficher : 
/* const affichagePrixHtml = `<div class="affichage-prix-html card7">  ${prixTotal} €
</div>`
positionElement3.insertAdjacentHTML("beforeend", affichagePrixHtml); */

let produitsCalcul = [];
// Aller chercher les prix dans le panier
for (let i = 0; i < produitEnregistreDansLocalStorage.length; i++){
let prixProduits = produitEnregistreDansLocalStorage[i].quantite;
produitsCalcul.push(prixProduits)}
const reducer2 = (accumulator, currentValue) => accumulator + currentValue;
const quantTotal = produitsCalcul.reduce(reducer2,0);
// Le code html du prix total à afficher : 
const affichagequantite = `<div class="flexlign"><div class="affichage-quantite flexlign card7 ">  ${prixTotal} € et   ${quantTotal} article(s) 
<a href="panier.html">&nbsp dans le panier  </a>


</div></div>`
positionElement3.insertAdjacentHTML("beforeend", affichagequantite);




}

   
}


catch(e) {

    console.log("ERREUR protocol comptage produits dans le panier ()");
    console.log(e);
    alert(`ERREUR de code ()${e}`);
  
  };

  
 
