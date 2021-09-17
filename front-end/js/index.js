
//La console indique en logs : 5 sections de nounours 
/* class Teddies {
constructor(jsonTeddies){

  jsonTeddies  && Object.assign(this, jsonTeddies);
}


} */





/* fetch('http://localhost:3000/api/teddies')
.then( data => data.json())


.then ( jsonListTeddies=> {
/* console.log(jsonListArticle); */
/* for {let jsonTeddies  of jsonListTeddies) {
let Teddie = new Teddies (jsonTeddies);
document.getElementById('ourson1').innerHTML += data.name ;


}

}); */

//création d'une requête vers l'api qui est renvoyé au fichier .json
const product_sheet = fetch("http://localhost:3000/api/teddies")
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        for (let o of response) {      //création d'une variable appelée "O" avec les résultats de la requête.json
            console.log(o);
             //On pointe l'id "OursonTemplate"
           
            const Template = document.getElementById("OursonTemplate");

            //On cré uone constante avec l'importation de tous les noeuds "<template> .. .. </template>" 
            const CopieTemplate = document.importNode(Template.content, true);
 //les noeuds du templates sont importés pour accueillir la constante "o" du fichier.json + les sections de l'API
 /* sections de l'API reccueillit lors du  "console.log(o)" */

  /* <!> pas de innerHTML += Securité */
  /* Varialbe o + informations récupérées lors du concole.log */
 CopieTemplate.getElementById("imagesours").src = o.imageUrl;
            CopieTemplate.getElementById("nomsours").textContent = o.name;
            CopieTemplate.getElementById("prixours").textContent= o.price / 100 + "€";
            /* Création de l'appendchild (élément enfant) sous le calque avec l'ID "sections" => ici la copie du template x 5*/
                CopieTemplate.getElementById("descriptionours").textContent= o.description;
  /* absence de guillemet ou de cotes pour o + valeurs / afin d'ajouter du texte et l'opération qui divise les centimes*/

/* Définition de l'envoi de l'ID vers l'url */
 CopieTemplate.getElementById("link").href += "?id=" + o._id;


            document.getElementById("sections").appendChild(CopieTemplate);
        }   
    });  
  
  

 



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



