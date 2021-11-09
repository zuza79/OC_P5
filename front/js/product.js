//--------page product--------------
//recuperation ID product
let idProduct = new URL(location.href).searchParams.get("_id");
const urlProduct = "http://localhost:3000/api/products/" + idProduct;
// load json by product 
loadProduct(urlProduct);
// load json by product from API
function loadProduct(url) {
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
  //cart variables
  let cartVariable = {
    idOneProduct : idProduct,
    titleProduct : document.getElementById("title").innerHTML,
    colorProduct : document.getElementById("colors").value,
    quantityProduct : document.getElementById("quantity").value,
    };
addProductToCart(cartVariable);
});     
// add product to local Storage 
function addProductToCart(id, title, color, quantity) {
    // administer local Storage 
    console.log(id, title, color, quantity);
};
//declaration de variable addproductstorage dans la quelle on met les key et les value qui sont dans le local storage----------
let addProductStorage = JSON.parse(localStorage.getItem("keyProduct"));
//JSON c'est pour convertir les données au format JSON qui sont dans le local storage en objet JS
console.log(addProductStorage); 
//produit déja enregirre dans storage
if(addProductStorage){
    addProductStorage.push(cartVariable);
    localStorage.setItem("keyProduct", JSON.stringify(addProductStorage)); 
    console.log(addProductStorage);  
}
// pas enregistre dans storage
else {
    addProductStorage = [];
    addProductStorage.push(cartVariable);
    localStorage.setItem("keyProduct", JSON.stringify(addProductStorage)),
    console.log(addProductStorage)}