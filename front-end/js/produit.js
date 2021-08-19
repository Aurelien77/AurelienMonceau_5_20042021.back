
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
}  


for (const couleur of article) {
  document.getElementById("couleurs").innerHTML +=
      "<option>" + couleur + "</option>";
}
