//création d'une requête vers l'api qui est renvoyé au fichier .json
//La console indique en logs : 5 sections de nounours 
let product_sheet = fetch('http://localhost:3000/api/teddies')
  .then(function(response){
    return response.json()
  }).then(function(section){
     console.log(section);
    
});

 //création d'une section ourson dans un div  
// On pointe l'élément div id ourson avec une constante appellé nounours div
 const nounoursDiv = document.getElementById('ourson');
 // On ajoute une section à l'élément div dans une constante appelée nounoursSection
 const nounoursSection = document.createElement('section');
 // On indique que la la constante nounoursdiv est parent de nounourssection 
 nounoursDiv.appendChild(nounoursSection);
 // On ajoute une class à la section appellée affichageoursons 
 nounoursSection.className = 'affichageoursons';
 
