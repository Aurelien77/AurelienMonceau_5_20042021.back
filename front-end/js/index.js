
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
        } });  
   } catch (error) {
      console.error(error);
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will very depending on browser
    }

 
