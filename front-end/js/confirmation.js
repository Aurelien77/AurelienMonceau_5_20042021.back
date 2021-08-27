// Récupération de l'id de la commande (provenant du serveur) dans le local storage



const responseId = localStorage.getItem("responseId");
console.log(`responseId : ${responseId}`);

///récupération du pric total du panier

const prixTotal = localStorage.getItem("prixTotal");
console.log(`prixTotal: ${prixTotal}`);

//La strucutre HTML de la page confirmation commande

const positionElement5 =  document.querySelector("#container-recapitulatif-commande");

const structureConfirmationCommande = `

<h2>Récapitulatid de votre commande</h2>
<div class="recapCommande">
<p>Merci pour votre commande</p>
<p>
Votre numéro de commande :<span>${responseId}</span></p>
<p>Le montant de votre commande est de :<span>${prixTotal}</span>€</p>
<p>A bientôt</p>
</div>
`;

//Injection HTML
positionElement5.insertAdjacentHTML("afterbegin",structureConfirmationCommande);


//effacer tout le local storage sauf le formaulaire
function enleverCleLocalStorage(Key) {

localStorage.removeItem(Key);

};

enleverCleLocalStorage("prixTotal");
enleverCleLocalStorage("produit");
enleverCleLocalStorage("responseId");
 

if (responseId == null || prixTotal == null)
{
    window.location.href= "index.html";

}
