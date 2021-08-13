//création d'une requête vers l'api qui est renvoyé au fichier .json
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
 


let product_sheet =   fetch('http://localhost:3000/api/teddies')
  .then((response) => {
  return response.json();
  })
  
  .then((response) => {
for (let o of response)  {
                              /* Création du premier élément div  */
  /* ------------------------------------------------------------------------------------ */

  const nounoursDiv = document.getElementById('ourson');
  // On ajoute une section à l'élément div dans une constante appelée nounoursSection
  const nounoursSection = document.createElement('section' );
  // On indique que la la constante nounoursdiv est parent de nounourssection 
  nounoursDiv.appendChild(nounoursSection);
  // On ajoute une class à la section appellée affichageoursons 
  nounoursSection.id = 'affichourson';

/* ------------------------------------------------------------------------------------------ */

                            /* Création du deuxième élément div  */
  /* ------------------------------------------------------------------------------------ */
  const nounoursDiv1 = document.getElementById('ourson1');
  // On ajoute une section à l'élément div dans une constante appelée nounoursSection
  const nounoursSection1 = document.createElement('section');
  // On indique que la la constante nounoursdiv est parent de nounourssection 
  nounoursDiv1.appendChild(nounoursSection1);
  
  // On ajoute une class à la section appellée affichageoursons 
  
  nounoursSection1.id = 'affichourson1'; 


/* ------------------------------------------------------------------------------------------ */


                            /* Création du troisème élément div  */
  /* ------------------------------------------------------------------------------------ */
  const nounoursDiv2 = document.getElementById('ourson2');
  // On ajoute une section à l'élément div dans une constante appelée nounoursSection
  const nounoursSection2 = document.createElement('section');
  // On indique que la la constante nounoursdiv est parent de nounourssection 
  nounoursDiv2.appendChild(nounoursSection2);
  
  // On ajoute une class à la section appellée affichageoursons 
  
  nounoursSection2.id = 'affichourson2'; 


/* ------------------------------------------------------------------------------------------ */

                            /* Création du quatrième élément div  */
  /* ------------------------------------------------------------------------------------ */
  const nounoursDiv3 = document.getElementById('ourson3');
  // On ajoute une section à l'élément div dans une constante appelée nounoursSection
  const nounoursSection3 = document.createElement('section');
  // On indique que la la constante nounoursdiv est parent de nounourssection 
  nounoursDiv3.appendChild(nounoursSection3);
  
  // On ajoute une class à la section appellée affichageoursons 
  
  nounoursSection3.id = 'affichourson3'; 


/* ------------------------------------------------------------------------------------------ */

                            /* Création du conquième élément div  */
  /* ------------------------------------------------------------------------------------ */
  const nounoursDiv4 = document.getElementById('ourson4');
  // On ajoute une section à l'élément div dans une constante appelée nounoursSection
  const nounoursSection4 = document.createElement('section');
  // On indique que la la constante nounoursdiv est parent de nounourssection 
  nounoursDiv4.appendChild(nounoursSection4);
  
  // On ajoute une class à la section appellée affichageoursons 
  
  nounoursSection4.id = 'affichourson4'; 


/* ------------------------------------------------------------------------------------------ */

const affiche = document.getElementById('affichourson');

const array = [1,2,3];
  
document.getElementById('affichourson').innerHTML += o.name  +=  o.colors +=  o.price  +=  o.imageUrl += o.description+= o._id += "-------<p>Son nom, sa couleur, son prix, l'url de son image sa déscription et son Id</p>-------";

/* ------------------------------------------------------------------------------------------ */

const affiche1 = document.getElementById('affichourson1');

  
  
document.getElementById('affichourson1').innerHTML +=o.name +=  o.name +=  o.colors +=  o.price  +=  o.imageUrl += o.description+= "-------Son nom et sa couleur-------";

/* ------------------------------------------------------------------------------------------ */

const affiche2 = document.getElementById('affichourson2');

  
  
document.getElementById('affichourson2').innerHTML   +=  o.name +=  o.colors +=  o.price  += o.imageUrl += o.description+= "-------Son nom et sa couleur-------";


/* ------------------------------------------------------------------------------------------ */
const affiche3 = document.getElementById('affichourson3');

  
  
document.getElementById('affichourson3').innerHTML +=  o.name +=  o.colors +=  o.price  +=  o.imageUrl += o.description+= "-------Son nom et sa couleur-------";
  /* ------------------------------------------------------------------------------------------ */

const affiche4 = document.getElementById('affichourson4');

  
  
document.getElementById('affichourson4').innerHTML +=  o.name +=  o.colors +=  o.price  +=  o.imageUrl += o.description+= "-------Son nom et sa couleur-------";
  console.log (o); 



      

  




}

     
    
console.log (response); 
 
    

 
})









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



