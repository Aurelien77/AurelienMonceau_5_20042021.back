// Récupération de l'id de la commande (provenant du serveur) dans le local storage
try {
  const orderId = localStorage.getItem("responseId");
  console.log(`responseId : ${orderId}`);
  //récupération du pric total du panier
  const prixTotal = localStorage.getItem("prixTotal");
  console.log(`prixTotal: ${prixTotal}`);
  //La strucutre HTML de la page confirmation commande
  const positionElement5 = document.querySelector(
    "#container-recapitulatif-commande"
  );
  const structureConfirmationCommande = `
<h2>Récapitulatif de votre commande</h2>
<div class="recapCommande">
<p>Merci pour votre commande</p>
<p>
Votre numéro de commande est le : <span>${orderId}</span></p>
<p>Le montant de votre commande est de : <span>${prixTotal}</span>€</p>
</div>
`;
  //Injection HTML
  positionElement5.insertAdjacentHTML(
    "afterbegin",
    structureConfirmationCommande
  );

  //effacer tout le local storage
  function enleverCleLocalStorage(Key) {
    localStorage.removeItem(Key);
  }

  enleverCleLocalStorage("responseId");
  enleverCleLocalStorage("contact");
  enleverCleLocalStorage("products");
  enleverCleLocalStorage("prixTotal");
  //on va vers l'index si order id et ou prix total sont null
  if (orderId == null || prixTotal == null) {
    window.location.href = "index.html";
  }
} catch (e) {
  console.log("ERREUR protocol  ()");
  console.log(e);
  alert(`ERREUR de code ()${e}`);
}
