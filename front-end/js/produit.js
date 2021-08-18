

 (async function() {
  const articleId = getArticleId()
  console.log(articleId)
  const article = await getArticle(articleId)
  /* console.log(article) */
  displayArticle(article) 
  
  /* console.log(o); */
}) ()

function getArticleId() {
  return new URL(location.href).searchParams.get('id')
}

function getArticle(articleId) {
   return fetch("http://localhost:3000/api/teddies/" + articleId)
    .then(function(httpBodyResponse) {
      return httpBodyResponse.json()
    }) 
    .then(function(article) {
      return article
    }) 
  /*   .catch(function(error) {
      alert(error)
    })  */
}

function displayArticle(article) {
 document.getElementById("nomsours").textContent = article.name
  document.getElementById("prixours").textContent  = article.price / 100 + "€" 
  document.getElementById("imagesours").src = article.imageUrl;
}  