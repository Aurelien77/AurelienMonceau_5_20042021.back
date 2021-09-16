try {
  //  Déclaration d'une variable qui récupère les produits du local storage
  let produitEnregistreDansLocalStorage = JSON.parse(
    localStorage.getItem("products")
  );
  // Affichage des produits du panier
  // Selectionner la classe ou injecter le code HTML pour l'affichage des produits
  const positionElement3 = document.querySelector("#container-produits-panier");
  //Si le panier est vide : afficher le panier est vide
  if (
    produitEnregistreDansLocalStorage === null ||
    produitEnregistreDansLocalStorage == 0
  ) {
    const paniervide = `
<div class="container-panier-vide">
<div> Le panier est vide  </div>
`;
    positionElement3.innerHTML = paniervide;
  } else {
    //si le panier n'est pas vide il faut afficher les porduit du storage
    let structureProduitPanier = ""; //On crée une liste vide
    for (k = 0; k < produitEnregistreDansLocalStorage.length; k++) {
      //itération pour chaques éléments JSON (localStorage.getItem("produit").
      // structureProduitPanier = structureProduitPanier +  peut être écrit  structureProduitPanier =+ injection du code html ( permet la création du div pour chaque itération)
      structureProduitPanier =
        structureProduitPanier +
        `    
    <div class="container-recapitulatif">
<div> Quantité - ${produitEnregistreDansLocalStorage[k].quantite} - ${produitEnregistreDansLocalStorage[k].nomProduit} options : ${produitEnregistreDansLocalStorage[k].option_produit} </div>
<div>${produitEnregistreDansLocalStorage[k].prix} € - <button class="btn-supprimer">Supprimer </button>  </div>
</div>
`;
    }
    // injection HTML dans l'element #container-produits-panier
    positionElement3.innerHTML = structureProduitPanier;
  }
  //----------------------------------------------------
  // La suppréssion des articles
  //recuperer la liste des bouttons supprimer et cela va etre stocké sous forme de tableau
  let btn_supprimer = document.querySelectorAll(".btn-supprimer");
  // Selection de l'id qui va être supprimé
  for (let indexTab = 0; indexTab < btn_supprimer.length; indexTab++) {
    btn_supprimer[indexTab].addEventListener("click", (event) => {
      event.preventDefault();
      // retrouver le produit dont on a cliqué sur supprimer
      let id_selectionner_suppression =
        produitEnregistreDansLocalStorage[indexTab].idProduitSelectionner;

      // avec la méthode filter je séléctionne les éléments à garder et je supprime le btn cliqué
      produitEnregistreDansLocalStorage =
        produitEnregistreDansLocalStorage.filter(
          (el) =>
            el.idProduitSelectionner.localeCompare(
              id_selectionner_suppression
            ) != 0
        );

      // envoi au local storage
      localStorage.setItem(
        "products",
        JSON.stringify(produitEnregistreDansLocalStorage)
      );
      // alert suppression
      alert("Ce produit à été supprimer du panier");
      window.location.href = "panier.html";
    });
  }

  //----------- Le montant total du panier
  // Déclaration de la variable pour pouvoir y mettre des prix
  let prixTotalCalcul = [];
  // Aller chercher les prix dans le panier
  for (let m = 0; m < produitEnregistreDansLocalStorage.length; m++) {
    let prixProduitsDansLePanier = produitEnregistreDansLocalStorage[m].prix;
    prixTotalCalcul.push(prixProduitsDansLePanier);
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const prixTotal = prixTotalCalcul.reduce(reducer, 0);
  // Le code html du prix total à afficher :
  const affichagePrixHtml = `<div class="affichage-prix-html"> Le prix total est de : ${prixTotal} €
</div>`;
  positionElement3.insertAdjacentHTML("beforeend", affichagePrixHtml);
  const btn_tous_supprimer_panier_html = `
<button class="btn_tous_supprimer_panier_html"> vider le panier </button>`;
  //insertion du bouton dans le html du panier
  positionElement3.insertAdjacentHTML(
    "beforeend",
    btn_tous_supprimer_panier_html
  );
  // La séléection de la référence du bouton "btn_tous_supprimer_panier_html"
  const btn_tous_supprimer_panier = document.querySelector(
    ".btn_tous_supprimer_panier_html"
  );
  //suppression de la clé porduit du local storage pour vider le panier
  btn_tous_supprimer_panier.addEventListener("click", (e) => {
    e.preventDefault();
    //.removeItem pour vider le panier
    localStorage.removeItem("products");
    alert("Le panier à été vidé");
    //rechargement de la page panier
    window.location.href = "panier.html";
  });

  const afficherFormulaireHtml = () => {
    // selection element dom
    const positionElement4 = document.querySelector(
      "#container-produits-panier"
    );

    const structureFormulaire = `
  <!--    Le formulaire dans le html-->
  <div id="formulaireCommande" class="gradient-custom">

  <h2>Remplissez le formulaire pour valider la commande </h2>
  
  
  <form>
  <label for="prenom">Prénom : </label> <span id="prenomManquant"> </span>
  <input type="text" id="prenom" name="prenom" required>
  
  <label for="nom">nom : </label>  <span id="nomManquant"> </span>
  <input type="text" id="nom" name="nom" required>
  
  <label for="adresse">adresse : </label> <span id="adresseManquant"> </span>
  <textarea  id="adresse" name="adresse" required>
    </textarea>
  
  
  <label for="ville">ville: </label>  <span id="villeManquant"> </span>  
  <input type="text" id="ville" name="ville" required>
  
  <label for="codePostal">codePostal : </label>  <span id="codePostalManquant"> </span>
  <input type="number" id="codePostal" name="codePostal" required>
  
  <label for="email">email: </label>  <span id="emailManquant"> </span>
  <input type="text" id="email" name="email" required> <br>
  <button id="envoyerFormulaire" type="submit" name="envoyerFormulaire" class="titre5 flexlign mt-3 mb-3 btn-primary" >  
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

  //fonction envoi les données vers le serveur
  function envoieVersServeur(aEnvoyer) {
    //Envoie de l'objet "a envoyer" vers le serveur

    const promise01 = fetch("http://localhost:3000/api/teddies/order", {
      method: "POST",
      body: JSON.stringify(aEnvoyer),
      headers: {
        "Content-Type": "application/json",
      },
    });
    promise01
      .then(async (response) => {
        try {
          const contenu = await response.json();

          if (response.ok) {
            localStorage.setItem("responseId", contenu.orderId);
            //aller vers la page confirmation commmande
            window.location = "confirmation.html";
          } else {
            console.log(`Réponse du serveur : ${response.status}  `);
            alert(`Problème avec la réponse du serveur : ${response.status}  `);
          }
        } catch (e) {
          console.log("ERREUR qui vient du catch()");
          console.log(e);
          alert(`ERREUR qui vient du catch()${e}`);
        }
      })
      .catch((err) => {
        alert("Le serveur ne reponds pas");
      });
  }

  //----------addEventListener-----------
  btnEnvoyerFormulaire.addEventListener("click", (e) => {
    e.preventDefault();

    const contact = {
      firstName: document.querySelector("#prenom").value,
      lastName: document.querySelector("#nom").value,
      address: document.querySelector("#adresse").value,
      /*  codePostal : document.querySelector("#codePostal").value, */
      city: document.querySelector("#ville").value,
      email: document.querySelector("#email").value,
    };
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
    //----------------------------*****************************-------------
    // Gestion validation du formulaire :
    const textAlert = (value) => {
      return `${value} : chiffres et symboles ne sont pas autorisés \n Ne pas dépasser 20 caractères, \n minium 3 caractères`;
    };

    const regExEmail = (value) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    };
    const regExAdresse = (value) => {
      return /^[A-Za-z0-9\s]{5,50}$/.test(value);
    };

    const regExNom = (value) => {
      return /^[a-z ,.'-]+$/i.test(value);
    };

    const regExPrenomNomVille = (value) => {
      return /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(value);
    };

    const regExNomVille = (value) => {
      return /^[A-Za-z]{3,20}$/.test(value);
    };

    /* const regExcodePostal = (value) => {
return /^[0-9]{5}$/.test(value);

}; */

    function adresseControle() {
      // contole de la validiter du prenom
      const leAdresse = contact.adress;
      dataChampManquantTextVide("adresseManquant");
      if (regExAdresse(leAdresse)) {
        console.log("OK");
        return true;
      } else {
        dataChampManquantText("adresseManquant");
        console.log("KO");
        alert("L'adresse n'est pas valide");
        return false;
      }
    }

    function emailControle() {
      // contole de la validiter du prenom
      const leEmail = contact.email;
      if (regExEmail(leEmail)) {
        dataChampManquantTextVide("emailManquant");
        return true;
      } else {
        dataChampManquantText("emailManquant");
        alert("L'email n'est pas valide");
        return false;
      }
    }

    //fonction pour gérer l'affichage du text à coté de l'input pour indiquer de le remplir

    function dataChampManquantTextVide(querySelectorId) {
      document.querySelector(`#${querySelectorId}`).textContent = "";
    }

    function dataChampManquantText(querySelectorId) {
      document.querySelector(`#${querySelectorId}`).textContent =
        "Veuillez bien remplir ce champs";
    }

    function prenomControle() {
      // contole de la validiter du prenom
      const lePrenom = contact.firstName;
      if (regExPrenomNomVille(lePrenom)) {
        dataChampManquantTextVide("prenomManquant");
        console.log("OK");
        return true;
      } else {
        dataChampManquantText("prenomManquant");
        alert(textAlert("Prénom"));
        return false;
      }
    }

    function villeControle() {
      // contole de la validiter de la ville
      const laville = contact.city;
      if (regExNomVille(laville)) {
        dataChampManquantTextVide("villeManquant");

        return true;
      } else {
        dataChampManquantText("villeManquant");

        alert(textAlert("ville"));
        return false;
      }
    }
    function nomControle() {
      // contole de la validiter du prenom
      const lenom = contact.lastName;
      if (regExNom(lenom)) {
        dataChampManquantTextVide("nomManquant");
        return true;
      } else {
        dataChampManquantText("nomManquant");
        alert(textAlert("Nom"));
        return false;
      }
    }

    console.table(contact);
    console.log("contact");
    console.log(produitEnregistreDansLocalStorage.idProduitSelectionner);
    console.table(produitEnregistreDansLocalStorage);

    //controle validiter formulaire avant envoi dans le local storage
    if (
      prenomControle() &&
      nomControle() &&
      emailControle() /* &&codePostalControle() */ &&
      adresseControle() &&
      villeControle()
    ) {
      localStorage.setItem("contact", JSON.stringify(contact));
      localStorage.setItem("prixTotal", JSON.stringify(prixTotal));

      let products = [];
      for (k = 0; k < produitEnregistreDansLocalStorage.length; k++) {
        products.push(
          produitEnregistreDansLocalStorage[k].idProduitSelectionner
        );
      }

      //Mettre les valeurs et produit selectionner dans un objet et envoyer vers serveur
      const aEnvoyer = {
        products,
        contact,
      };

      envoieVersServeur(aEnvoyer);
    } else {
      alert("Veuillez bien remplir le formulaire");
    }
    //fin Gestion validation du formulaire :
  });
} catch (e) {
  console.log("ERREUR protocol  ()");
  console.log(e);
}
