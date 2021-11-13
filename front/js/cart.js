//les questions-utiliser "let" ou "var"?



// --------------page cart "Panier" -------------------------------------
//collect products from cart to local storage - form table
let tableProductsCart = JSON.parse(localStorage.getItem("keyProduct"));
console.log(tableProductsCart)

let productTotal=0;
for (let elementCart of tableProductsCart){

//display cart 

document.querySelector('#cart__items').innerHTML+= `<article class="cart__item" data-id="${elementCart.idProduct}">
<div class="cart__item__img">
  <img src="${elementCart.imageProduct}" alt="${elementCart.altTxtProduct}">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__titlePrice">
    <h2>${elementCart.titleProduct}</h2>
    <p>${elementCart.colorsProduct} €</p>
    <p>${elementCart.priceProduct} €</p>
  </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Qté : </p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${elementCart.quantityProduct}">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
    </div>
  </div>
</div>
</article>`;

productTotal+= parseInt(elementCart.quantityProduct);
 
  }
document.querySelector('#totalQuantity').innerHTML = productTotal;