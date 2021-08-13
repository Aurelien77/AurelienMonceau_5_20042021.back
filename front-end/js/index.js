//création d'une requête vers l'api qui est renvoyé au fichier .json
//La console indique en logs : 5 sections de nounours 
let product_sheet = fetch('http://localhost:3000/api/teddies')
  .then((response) => {
  return response.json();
  })
  
  .then((response) => {
for (let o of response)  {

  const affiche = document.getElementById('ourson');
  affiche.innerHTML += o.imageUrl += "----------------------------------------";
  affiche.innerHTML += o.name += "----------------------------------------" ;
  affiche.innerHTML += o._id += "----------------------------------------" ;
  affiche.innerHTML += o.colors += "----------------------------------------" ;
  affiche.innerHTML += o.price += "----------------------------------------" ;
  affiche.innerHTML += o.description += "----------------------------------------" ;
  console.log (o); 



      
        





}

     
    
console.log (response); 
 
    

 
})









//deuxième méthode


/* fetch('http://localhost:3000/api/teddies')
  .then(response => response.json())

  .then(json => console.log(json))
     */

 //création d'une section ourson dans un div  
// On pointe l'élément div id ourson avec une constante appellé nounours div
 const nounoursDiv = document.getElementById('ourson');
 // On ajoute une section à l'élément div dans une constante appelée nounoursSection
 const nounoursSection = document.createElement('section');
 // On indique que la la constante nounoursdiv est parent de nounourssection 
 nounoursDiv.appendChild(nounoursSection);
 // On ajoute une class à la section appellée affichageoursons 
 nounoursSection.className = 'bg-dark';



