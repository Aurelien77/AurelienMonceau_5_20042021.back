
//La console indique en logs : 5 sections Teddies
//Les descritifs des sections de l'API apparaissent dans Postman et dans le console log de la réponse JSON.
// colors, _id, name, price, imageUrl.

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



  // On copie le template HTML dans l'élément pointé avec la commande getelementByid puis on injecte du html avec .textContent suivit de la valeur stocké dans la réponse JSON (variable "o")

  
// Pas de innerHTML pour plus de Securité.
 
 CopieTemplate.getElementById("imagesours").src = o.imageUrl;    //.src pour le lien URL de l'image + variable de la réponse JSON.valeur
            CopieTemplate.getElementById("nomsours").textContent = o.name;
            CopieTemplate.getElementById("prixours").textContent= o.price / 100 + "€";
                CopieTemplate.getElementById("descriptionours").textContent= o.description;


//On récupère l'ID sous la forme d'un lien : .href + on ajoute un GET ID qui enverra l'ID dans L'URL une fois le lien cliqué.
 CopieTemplate.getElementById("link").href += "?id=" + o._id;

//On copie celon le nombre d'itération le Template dans la div "sections"

            document.getElementById("sections").appendChild(CopieTemplate);
        }   
   
   
      }
      
      
      
      
      
      );  
  

    } catch (error) {
      console.error(error);
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }

    /* 
    localStorage.setItem (
      "new4", "nouvelle3",
     
      )
      window.onstorage = event =>  {
        console.log(event)
          }
        window.addEventListener('storage', function(event) {
        console.log(event)
        
        })
  */



                              /* Création du premier élément div  */
  /* ------------------------------------------------------------------------------------ */

 /*  const nounoursDiv = document.querySelector('.ourson');
  // On ajoute une section à l'élément div dans une constante appelée nounoursSection
  const nounoursSection = document.createElement('section' );
  // On indique que la la constante nounoursdiv est parent de nounourssection 
  nounoursDiv.appendChild(nounoursSection);
  // On ajoute une class à la section appellée affichageoursons 
  nounoursSection.className = 'affichourson'; */

/* ------------------------------------------------------------------------------------------ */

                            /* Création du deuxième élément div  */
  /* ------------------------------------------------------------------------------------ */



                            /* Création du troisème élément div  */
  /* ------------------------------------------------------------------------------------ */
  
 



/* ------------------------------------------------------------------------------------------ */

/* const affiche = document.querySelector('.affichourson');

const array = [1,2,3];

document.querySelector('affichourson').innerHTML += o.name +=o.imageUrl +=  o.colors +=  o.price  += o.description+= o._id += "-------<p>Son nom, sa couleur, son prix, l'url de son image sa déscription et son Id</p>-------";
document.querySelector('oursonImg').innerHTML += o.imageUrl; */
/* ------------------------------------------------------------------------------------------ */



//deuxième méthode


/* fetch('http://localhost:3000/api/teddies')
  .then(response => response.json())

  .then(json => console.log(json))
     */

/*  //création d'une section ourson dans un div  
// On pointe l'élément div id ourson avec une constante appellé nounours div
 const nounoursDiv = document.getElementById('ourson');
 // On ajoute une section à l'élément div dans une constante appelée nounoursSection
 const nounoursSection = document.createElement('section');
 // On indique que la la constante nounoursdiv est parent de nounourssection 
 nounoursDiv.appendChild(nounoursSection);
 // On ajoute une class à la section appellée affichageoursons 
 nounoursSection.className = 'bg-dark'; */



