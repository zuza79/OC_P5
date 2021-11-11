//--------page product--------------
//recuperation ID product
var idProduct = new URL(location.href).searchParams.get("_id");
const urlProduct = "http://localhost:3000/api/products/" + idProduct;
// load JSON by product from API
loadProduct(urlProduct);
function loadProduct(urlProduct) {
    fetch(urlProduct)
        .then((response) => response.json())
        .then((product) => {
            displayProduct(product);
        })
        .catch((error) => {
            console.log("erreur get product:" + error);
            alert("Une erreur est survenue! Veuillez contacter l'administrateur du site.");
        });
}
// display image, title, price, description, colors
function displayProduct(oneProduct) {
    //display image
    document.querySelector('.item__img').innerHTML = `<img src="${oneProduct.imageUrl}" alt="${oneProduct.altTxt}">`;
    //display title
    document.getElementById("title").innerHTML = oneProduct.name;
    //display price
    document.getElementById("price").innerHTML = oneProduct.price;
    //display description
    document.getElementById("description").innerHTML = oneProduct.description;
    //display colors option
    for (i = 0; i < oneProduct.colors.length; i++) {
        document.getElementById("colors").innerHTML += `<option value="${oneProduct.colors[i]}">${oneProduct.colors[i]}</option>`;
    }}


    //----------button add to cart---("Ajouter au panier")----------------
    //add to cart 
    document.getElementById("addToCart").addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault();
   //recuperation des constantes qté et color
   const quantity = document.getElementById("quantity").value;
   const colorsOption = document.getElementById("colors").value;

   if (quantity == 0 || colorsOption ==""){
     alert("Veuillez choisir une couleur et une quantité > à 0!!");
   }
   else{
  //product to add to cart
  const productToAdd = { 
    idProduct: idProduct,
    quantityProduct : quantity,
    colorsProduct: colorsOption,
  };
  console.log("product to add: "+productToAdd.colorsProduct);
  let tableProducts= recupererPanier();
   let checkProduct = false;
    //collect info product without double
    for (let product of tableProducts) {
      if (idProduct === product.idProduct && colorsOption === product.colorsProduct) {
        product.quantityProduct = parseInt(product.quantityProduct) + parseInt(quantity);
        checkProduct = true;
      }
    }
  
  // add product load in local storage
  if (!checkProduct) {
    tableProducts.push(productToAdd);
    localStorage.setItem("keyProduct", JSON.stringify(tableProducts));
    console.log(tableProducts);
    alert("Vos articles ont bien été ajouté au panier!");}
  //product not load in local storage 
  else{
    
    localStorage.setItem("keyProduct", JSON.stringify(tableProducts));
  }
}
}); 

function recupererPanier(){
  //load products into local storage -> to table
  return (JSON.parse(localStorage.getItem("keyProduct"))||[]);
 
   }

