// --------------page cart "Panier" -------------------------------------
//collect products from cart to local storage - form table
const tableProductsCart = JSON.parse(localStorage.getItem("keyProduct"));
console.table(tableProductsCart)

let productTotal=0;
for (let elementCart of tableProductsCart){
//display cart HTML
document.querySelector('#cart__items').innerHTML+= `<article class="cart__item" data-id="${elementCart.idProduct}">
<div class="cart__item__img">
  <img src="${elementCart.imageProduct}" alt="${elementCart.altTxtProduct}">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__titlePrice">
    <h2>${elementCart.titleProduct}</h2>
    <p>${elementCart.colorsProduct} </p>
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

//Changer la quantité du panier par l'utilisateur
const inputChange = () => {
  const tableProductsCart = JSON.parse(localStorage.getItem("keyProduct"));

  const input = document.getElementById().querySelector(".itemQuantity");
  input.addEventListener("input", (event) => {
    if (tableProductsCart) {
      const id = event.target.getAttribute("data-id");
      const newQuantity = event.target.value;
      console.log(newQuantity);
      console.log(event);
      tableProductsCart
        .filter((product) => product.getId === id)
        .map((focusKeyProduct) => {
          focusProduct.quantity = newQuantity;
          return focusProduct;
        });

      localStorage.setItem("keyProduct", JSON.stringify(tableProductsCart));

      displayTotalPrice();
      displayTotalQuantity();
    }
    window.location.reload();
  });
};

//display total number products
document.querySelector('#totalQuantity').innerHTML = productTotal;

//ok -------- display total price cart
const displayTotalPrice = () => {
   if (tableProductsCart) {
    const tableProductsCart = JSON.parse(localStorage.getItem("keyProduct"));
    const totalPrice = tableProductsCart.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue.quantityProduct * currentValue.priceProduct),
        0
      );
      document.querySelector("#totalPrice").innerHTML = totalPrice;
  }
};
displayTotalPrice();

//Déclaration et création de fonction suppression de l'article au click du bouton "Supprimer"
let supprimer = document.querySelectorAll(".deleteItem");
console.log(supprimer)
for (let s = 0; 1 < supprimer.length; s++) {
  supprimer[s].addEventListener("click", (event) => {
    event.preventDefault();
  
let supprimerSelection = tableProductsCart[s].idProduct;
console.log(supprimerSelection)
tableProductsCart = tableProductsCart.filter(
  (element) => element.idProduct !== supprimerSelection
);
localStorage.setItem("keyProduct", JSON.stringify(tableProductsCart))
window.location.href = "cart.html"
}
  )
};

//   let supprimer = document.querySelectorAll(".deleteItem");
//   console.log(supprimer)
//    for (let s = 0; 1 < supprimer.length; s++){
//    supprimer[s].addEventListener('click', (event) => {
//  event.preventDefault();
// localStorage.setItem("keyProduct", JSON.stringify(tableProductsCart));
// });
//};