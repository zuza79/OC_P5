// --------------page cart "Panier" -------------------------------------
//load products to local storage - form table
let addProductLocalStorage = JSON.parse(localStorage.getItem("keyProduct"));
console.log(addProductLocalStorage)
//--------display cart--------
const positionElements = document.querySelector("#cart__items")
console.log(positionElements)

var productCartTable = '';

//cart is empty ("vide")
if(addProductLocalStorage = null){
    alert("Votre panier est vide!");
positionElements.innerHTML=<article class="cart__item" data-id="{product-ID}"></article>;
 } else {
   for (k = 0; k < addProductLocalStorage.lenght; k++){
productCartTable =
productCartTable +'<img src="${addProductLocalStorage[k].imageUrl}" alt="${addProductLocalStorage[k].altTxt}">';
//<h2>${addProductLocalStorage[k].name}</h2><p>${addProductLocalStorage.price}</p><p>${addProductLocalStorage[k].quantity}</p>;}
   if (k== addProductLocalStorage.lenght){
     positionElements.innerHTML=productCartTable;
   }
 }
//!!!price?????
  //                  <div class="cart__item__content__settings__delete">
   //                   <p class="deleteItem">Supprimer</p>
}