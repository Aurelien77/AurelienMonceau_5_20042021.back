try {
  //tests génériques

  //création d'une requête fetch vers l'api pour AFFICHER LES PRODUITS
  const product_sheet = fetch("http://localhost:3000/api/teddies")
    .then((response) => {
      return response.json();
    })
    // Itération sur la réponse enregistrée en .json

    .then((response) => {
      for (let o of response) {
        //création d'une variable appelée "O" = résultats la requête.json
        console.log(o);
        //On pointe l'id "OursonTemplate"
        const Template = document.getElementById("OursonTemplate");
        //On crée une constante avec l'importation de tous les éléments HTML qui se trouvent dans "<template> .. .. </template>" (noeuds)
        const CopieTemplate = document.importNode(Template.content, true);
        // On copie le template HTML dans l'élément pointé
        // Pas de innerHTML pour plus de Securité.
        CopieTemplate.getElementById("imagesours").src = o.imageUrl;
        CopieTemplate.getElementById("nomsours").textContent = o.name;
        CopieTemplate.getElementById("prixours").textContent =
          o.price / 100 + "€";
        CopieTemplate.getElementById("descriptionours").textContent =
          o.description;
        //On récupère l'ID sous la forme d'un lien href puis on ajoute un ID qui sera envoyé dans L'URL une fois le lien cliqué.
        CopieTemplate.getElementById("link").href += "?id=" + o._id;
        //On copie celon le nombre d'itération le Template dans la div "sections"
        document.getElementById("sections").appendChild(CopieTemplate);
      }
    }) // fin du .then

    .catch((err) => {
      alert("Le serveur ne reponds pas");
    });

  let produitEnregistreDansLocalStorage = JSON.parse(
    localStorage.getItem("products")
  );
  let nombre_produit_dans_panier = JSON.parse(localStorage.getItem("products"));
  // Affichage des produits du panier
  // Selectionner la classe ou injecter le code HTML pour l'affichage des produits
  const positionElement3 = document.querySelector("#nombre_panier");
  //Si le panier est vide : afficher le panier est vide
  if (nombre_produit_dans_panier === null || nombre_produit_dans_panier == 0) {
    const paniervide = `
        <div class="flexlign"><div class="container-panier-vide card7 flexlign">
       Le panier est vide  </div></div>
        `;
    positionElement3.innerHTML = paniervide;
  } else {
    //si le panier n'est pas vide il faut afficher les porduit du storage

    let prixTotalCalcul = [];
    // Aller chercher les prix dans le panier
    for (let m = 0; m < produitEnregistreDansLocalStorage.length; m++) {
      let prixProduitsDansLePanier = produitEnregistreDansLocalStorage[m].prix;
      prixTotalCalcul.push(prixProduitsDansLePanier);
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const prixTotal = prixTotalCalcul.reduce(reducer, 0);
    // Le code html du prix total à afficher :

    let produitsCalcul = [];
    // Aller chercher les produits dans le panier
    for (let i = 0; i < produitEnregistreDansLocalStorage.length; i++) {
      let prixProduits = produitEnregistreDansLocalStorage[i].quantite;
      produitsCalcul.push(prixProduits);
    }
    const reducer2 = (accumulator, currentValue) => accumulator + currentValue;
    const quantTotal = produitsCalcul.reduce(reducer2, 0);
    // Le code html des produits totaux à afficher :
    const affichagequantite = `<div class="flexlign"><div class="affichage-quantite flexlign card7 ">  ${prixTotal} € et   ${quantTotal} article(s) 
<a href="panier.html">&nbsp dans le panier  </a>


</div></div>`;
    positionElement3.insertAdjacentHTML("beforeend", affichagequantite);
  }
} catch (e) {
  console.log("ERREUR protocol  ()");
  console.log(e);
  alert(`ERREUR de code ()${e}`);
}
