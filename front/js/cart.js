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


//---a corriger ----Changer la quantité du panier par l'utilisateur
const inputChange = (id) => {
const tableProductsCart = JSON.parse(localStorage.getItem("keyProduct"));
const novaHodnota = document.getElementById(id).querySelector(".itemQuantity");///
novaHodnota.addEventListener('input', (e) => {
  if (tableProductsCart) {
     const id = e.target.getAttribute("data-id");
     console.log(id);
      
      const newQuantity = e.target.value;
      console.log(newQuantity);
      console.log(e);
     tableProductsCart
       .filter((keyProduct) => keyProduct.IdProduct === id)
       .map((focusKeyProduct) => {
        focusProduct.quantity = newQuantity;
         return focusKeyProduct;
      });
      localStorage.setItem("keyProduct", JSON.stringify(tableProductsCart));
      displayTotalPrice();
     inputChange();
   }
   window.location.reload();
  });
};
//--------ok------display total number products
document.querySelector('#totalQuantity').innerHTML = productTotal;


//---------ok -------- display total price cart
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

//---a corriger ---- delete product of cart by button "Supprimer"
let supprimer = document.querySelector(".deleteItem")
supprimer.addEventListener("click", function(event)  {
   event.stopPropagation();
   event.preventDefault();
       if (quantityProduct == 0 || colorsProduct ==""){
         alert("Votre panier est vide!!!");
       }
       else{
   const item = document.getElementById(supprimer);   
   const idItem = item.getAttribute("id");
   tableProductsCart = tableProductsCart.filter(
     (p) => p.idProduct !== idItem 
         );}
   localStorage.setItem("keyProduct", JSON.stringify(tableProductsCart));
   displayCart();
   displayTotalPrice();
    });
 // -------------- start --- Form RegEX ------cart.htlm = line 75
  let form = document.querySelector(".cart__order__form");
    // ----firstName
  form.firstName.addEventListener("input", function () {
    checkFirstName(this);
  });                
  const checkFirstName = function (inputFirstName) {
    let nameRegExp = new RegExp("^[a-zA-Z-\s].{2,25}$");//j'accepte azAZ-espace plusiersfois
    let testFirstName = nameRegExp.test(inputFirstName.value);
    if (testFirstName) {
      inputFirstName.nextElementSibling.innerHTML = "";
      return true;
    } else {
      inputFirstName.nextElementSibling.innerHTML = "Votre prénom doit comporter les lettres de 'a' à 'z' au moins 2 caractères et un maximum de 25 caractères!!!";
      return false;
    }
  };
    //-----lastName
  form.lastName.addEventListener("input", function () {
    checkLastName(this);
  });
    const checkLastName = function (inputLastName) {
    let nameRegExp = new RegExp("^[a-zA-Z-\s].{2,25}$");
    let testLastName = nameRegExp.test(inputLastName.value);
    if (testLastName) {
      inputLastName.nextElementSibling.innerHTML = "";
      return true;
    } else {
      inputLastName.nextElementSibling.innerHTML = "Votre nom doit comporter les lettres de 'a' à 'z' au moins 2 caractères et un maximum de 25 caractères!!!";
      return false;
    }
  };
  //-----adress
  form.address.addEventListener("input", function () {
    checkAddress(this);
  });
  const checkAddress = function (inputAdress) {
    let addressRegExp = new RegExp("^[0-9]{1,4}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+$");
    let testAdress = addressRegExp.test(inputAdress.value);
    if (testAdress) {
      inputAdress.nextElementSibling.innerHTML = "";
      return true;
    } else {
      inputAdress.nextElementSibling.innerHTML = "Saisissez votre adresse";
      return false;
    }
  };
  //-----city
  form.city.addEventListener("input", function () {
    checkCity(this);
  });
  const checkCity = function (inputCity) {
    let cityRegExp = new RegExp("^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$");
    let testCity = cityRegExp.test(inputCity.value);
    if (testCity) {
      inputCity.nextElementSibling.innerHTML = "";
      return true;
    } else {
      inputCity.nextElementSibling.innerHTML = "Saisissez votre ville";
      return false;
    }
  };
  //----email
  form.email.addEventListener("input", function () {
    checkEmail(this);
  });
    const checkEmail = function (inputEmail) {
    let emailRegExp = new RegExp(
      "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$");
    let testEmail = emailRegExp.test(inputEmail.value);
  
    if (testEmail) {
      inputEmail.nextElementSibling.innerHTML = "";
      return true;
    } else {
      inputEmail.nextElementSibling.innerHTML =
        "Saisissez votre adresse Email";
      return false;
    }
  };
 // --- end --- Form RegEX

 //------------------"POST" send informations to API and notify "order"
 const preparedOrder = (sendOrder) => {
  fetch("http://localhost:3000/api/products/order", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/JSON",
    },
    body: JSON.stringify(sendOrder),   
  })
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      console.log(data.orderId);
      const orderId = data.orderId;

      //transfer order to "confirmation.html" and clear localStorage
      window.location.href = "confirmation.html" + "?" + "name" + "=" + orderId;
      localStorage.clear();
    });
};
//validation form and send order
const notifyOrder = () => {
  document.querySelector("#order").addEventListener("click", (event) => {
    event.preventDefault();
    if (
      checkFirstName(form.firstName) &&
      checkLastName(form.lastName) &&
      checkAddress(form.address) &&
      checkCity(form.city) &&
      checkEmail(form.email)
    ) {
      const contact = {
        lastName: form.lastName.value,
        firstName: form.firstName.value,
        address: form.address.value,
        city: form.city.value,
        email: form.email.value,
      };

      const storage = JSON.parse(localStorage.getItem("keyProduct"));

      const products = [];
      for (k = 0; k < storage.length; k++) {
        let allId = storage[k].idProduct;
        products.push(allId);
      }

      let sendOrder = {contact,products};

      localStorage.setItem("sendOrder", JSON.stringify(sendOrder));

      preparedOrder(sendOrder);
    } else {
      alert("Veuillez remplir tous les champs avant d'envoyer le formulaire!!!");
    }
  });
};
notifyOrder();