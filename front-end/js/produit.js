try {
  // On stocke L'ID envoyé par L'URL ---
  function getArticleId() {
    return new URL(location.href).searchParams.get("id");
  }
  // AFFICHER Le produit par ID
  //fonction getArticle ( ID )  Renvoi les données de l'API par ID

  function getArticle(articleId) {
    return fetch("http://localhost:3000/api/teddies/" + articleId)
      .then(function (response) {
        return response.json();
      })
      .catch((err) => {
        alert("Le serveur ne reponds pas");
      });
  }

  // Puis on pointe les éléments HTML pour injecter le contenu de l'API lié à L'id.
  function displayArticle(article) {
    document.getElementById("nomsours").textContent = article.name; // article.name = réponse JSON+ID .name
    document.getElementById("prixours").textContent = article.price / 100 + "€";
    document.getElementById("imagesours").src = article.imageUrl;
    // Itération celon le nombre de couleurs présentes dans la réponse JSON + injection dans des balises HTML
    for (const couleurs of article.colors) {
      document.getElementById("option_produit").innerHTML +=
        "<option value ='" + couleurs + "'>" + couleurs + "</option>";
    }
  }
  // La fonction asynchrone
  //  Distribut les paramêtres de l'ID aux fonctions qui appellent articleId
  //  Distribut la réponse JSON aux fonctions qui appellent article
  // Déploit le code HTML par l'appelle de la fonction displayArticle(article)
  (async function () {
    const articleId = getArticleId();
    const article = await getArticle(articleId);
    // On appelles la focntion qui injecte le code HTML
    displayArticle(article);
  })();

  // fonction pour passer à des nombres décimaux

  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }
  //  AddEventListener : Bouton envoyer vers le panier
  //Ecouter le bouton envoyer vers le panier
  document.getElementById("btn-envoyer").addEventListener("click", (event) => {
    event.preventDefault(); //Pour ne pas changer de page au clic du bouton

    const articleId = getArticleId(); // Id
    //Pointer les élements HTML pour récupérer les valeurs qui s'y trouvent
    const couleurChoisi = document.getElementById("option_produit").value; // Pointe le div  Select +  sa . value
    const qte = parseInt(document.getElementById("qte_produit").value); //Pointe l'élement html avec parseInt : Si l'argument string n'est pas une chaîne de caractères, elle sera convertie en une chaîne (Pour Envoi au local storage)
    const nomprd = document.getElementById("nomsours").textContent; // On notes .textcontent car on recupère du texte et non plus les valeurs.
    const prixXquantite = roundToTwo(
      parseInt(document.getElementById("prixours").textContent) * qte
    );
    //  Récupérer les valeurs du formulaire dans un objet

    let products = {
      nomProduit: nomprd,
      idProduitSelectionner: articleId,
      option_produit: couleurChoisi,
      quantite: qte,
      prix: prixXquantite,
    };

    // Récupérer les valeurs dans le local storage puis définition d'une nouvelle liste de produits a enregistrer
    let nouvelleListeProduit = [];
    //test si le local storage n'est pas vide
    if (localStorage !== null) {
      //recuperation de la liste des produits deja enregistrés dans le local storage
      let produitEnregistreDansLocalStorage = JSON.parse(
        localStorage.getItem("products")
      ); //.parse permet de convertir les données JSON en JS

      nouvelleListeProduit = produitEnregistreDansLocalStorage;
      //parcourir la liste des produits deja enregistrés
      for (let indexTab in produitEnregistreDansLocalStorage) {
        // indextab ou I (...) est identique
        //teste si le produit enregistré dans le local storage a le meme id que le produit que je veux enregistrer
        if (
          produitEnregistreDansLocalStorage[
            indexTab
          ].idProduitSelectionner.localeCompare(
            products.idProduitSelectionner
          ) == 0
        ) {
          //dans la copie de la liste des produits je retire ce produit que je veux enregister
          nouvelleListeProduit.splice(indexTab, 1);
        }
      }
    }
    if (products.quantite > 0) {
      // tester si la nouvelle liste n'est pas nulle
      if (nouvelleListeProduit !== null) {
        nouvelleListeProduit.push(products);
      } else {
        //sinon elle est vide
        nouvelleListeProduit = [];
        nouvelleListeProduit.push(products);
      }
      //finalement j'enregistre la nouvelle liste dans le localstorage
      localStorage.setItem("products", JSON.stringify(nouvelleListeProduit)); //.stringify permet de convertir les données JS en JSON
      popupConfirmation(products);
    } else {
      alert("La quantite voulu doit etre supérieure à 0");
    }
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
        <div class="flexlign"><div class="container-panier-vide card5 flexlign">
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
    // Aller chercher les prix dans le panier
    for (let i = 0; i < produitEnregistreDansLocalStorage.length; i++) {
      let prixProduits = produitEnregistreDansLocalStorage[i].quantite;
      produitsCalcul.push(prixProduits);
    }
    const reducer2 = (accumulator, currentValue) => accumulator + currentValue;
    const quantTotal = produitsCalcul.reduce(reducer2, 0);
    // Le code html du prix total à afficher :
    const affichagequantite = `<div class="flexlign"><div class="affichage-quantite  card5 "> <a href="panier.html"> ${prixTotal} € et   ${quantTotal} article(s)
&nbsp dans le panier  </a>


</div></div>`;
    positionElement3.insertAdjacentHTML("beforeend", affichagequantite);
  }
  //fonction fenêtre pop up
  const popupConfirmation = (products) => {
    if (
      window.confirm(`${products.nomProduit} option : ${products.option_produit} à bien été ajouté au panier 
          Consultez le panier OK ou revenir à l'accueil ANNULER`)
    ) {
      window.location.href = "panier.html";
    } else {
      window.location.href = "index.html";
    }
  };
} catch (e) {
  console.log("ERREUR protocol  ()");
  console.log(e);
  alert(`ERREUR de code ()${e}`);
}
