// utilisation du fetch
// se rensegner c'est quoi les promesse javascript
// utiliser des fonctions

//declaration de la base de donnees
let productData = [];

const fetchProduct = async() => {
    await fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((promise) => {
         productData = promise;
         console.log(productData);
      });
 };

 // afficher=display les produits
const productDisplay = async () => {
   await fetchProduct();
   document.getElementById("items").innerHTML = `<img class="items a" src="${productData[0].imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1" </img>
   `
   console.log(productDisplay);
};

productDisplay();
 