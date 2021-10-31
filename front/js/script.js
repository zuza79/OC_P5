 // utilisation du fetch
// se rensegner c'est quoi les promesse javascript
// utiliser des fonctions

//declaration de la base de donnees
const apiUrl = "http://localhost:3000/api/products/";
let product = [];
console.log(product);

//appel d'API  
fetch(apiUrl)
      .then((reponse) => reponse.json())
      .then((product) => {
         console.log(product)
         displayProducts(product);
      });
 
 // afficher les produits
 function displayProducts(products){
   let html='';
   products.forEach(element => {
      html+='<a href="./product.html?_id='+element._id+'"><article><img src="'+
      element.imageUrl+'" alt="'+element.altTxt+
      '"><h3 class="productName">'+element.name+'</h3><p class="productDescription">'+
      element.description+'.</p></article></a>';
   });
   document.getElementById("items").innerHTML= html;
}
