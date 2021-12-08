// --------------page cart "Panier" -------------------------------------
//collect products from cart to local storage - form table
const tableProductsCart = JSON.parse(localStorage.getItem("keyProduct"));
console.table(tableProductsCart);

// alert if cart null
if (tableProductsCart === null | tableProductsCart == 0){
  alert ("Votre panier est vide!")
};

let productTotal=0;
for (let elementCart of tableProductsCart){
//display cart HTML
document.querySelector('#cart__items').innerHTML+= 
`<article class="cart__item" data-id="${elementCart.idProduct}" data-color="${elementCart.colorsProduct}">
<div class="cart__item__img">
  <img src="${elementCart.imageProduct}" alt="${elementCart.altTxtProduct}">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__titlePrice">
    <h2>${elementCart.titleProduct}</h2>
    <p>${elementCart.colorsProduct}</p>
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
};

//modify quantity and reload API ("tableProductsCart")
document.querySelectorAll('.itemQuantity').forEach(element => {
  element.addEventListener('change', function (event) {
    event.stopPropagation();
    event.preventDefault();

    if (this.value == 0 || this.value>100){
      alert("Veuillez choisir quantité entre 1 et 100 ou supprimer votre article !!!");
    }
    else{
    updateLineQuantity(tableProductsCart, this.closest(".cart__item").dataset.id,
     this.closest(".cart__item").dataset.color, this.value);
     displayTotalPrice();
    
    alert("Vous avez bien ajouté/supprimé quantité de votre article");
    window.location.reload();
    }
  });
   }); 
  
   function updateLineQuantity(cart,id,color,quantity)
   {
     let search;
     for(let product of cart ){
        if(product.idProduct == id && product.colorsProduct == color){
          search = cart.indexOf(product);
          break;
        };
     };
     // update "quantity"
       cart[search].quantityProduct = parseInt(quantity); 
     // save new cart 
       localStorage.setItem("keyProduct", JSON.stringify(cart));   
   };

//display total number products
 document.querySelector('#totalQuantity').innerHTML = productTotal;

//display total price cart
const displayTotalPrice = () => {
   if (tableProductsCart) {
    const tableProductsCart = JSON.parse(localStorage.getItem("keyProduct"));
    const totalPrice = tableProductsCart.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue.quantityProduct * currentValue.priceProduct), 0);
      document.querySelector("#totalPrice").innerHTML = totalPrice;
    };
};
displayTotalPrice();

// delete product from cart and reload API ("tableProductsCart")
let deleteProduct = document.querySelectorAll('.deleteItem');

for (let d = 0; d < deleteProduct.length; d++){
deleteProduct[d].addEventListener('click', (event) => {
  event.stopPropagation();
  event.preventDefault();
  console.log(deleteProduct);

  let deleteProductOfCart = deleteProduct[d].closest('.cart__item');
    deleteProductOfCart.remove();
    tableProductsCart.splice(d, 1);
    alert("Votre article est bien supprimer.");
    
localStorage.setItem('keyProduct', JSON.stringify(tableProductsCart));
window.location.reload();
}
)};
 
 // -------------- start --- Form RegEX ------cart.htlm = line 75
  let form = document.querySelector(".cart__order__form");
    // ----firstName
  form.firstName.addEventListener("input", function () {
    checkFirstName(this);
  });                
  const checkFirstName = function (inputFirstName) {
    let nameRegExp = new RegExp("^[a-zA-Z-\s].{2,25}$");//accept azAZ-espace 
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
      inputAdress.nextElementSibling.innerHTML = "Saisissez votre adresse correctement";
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
        "Saisissez votre adresse Email correctement par example: xxxxxxxx@xxxx.xx";
      return false;
    }
  };
 // ----------- end --- Form RegEX

 //---"POST"  (page "confirmation") send informations to API ("tableProductsCart") and notify "order"
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
      const orderId = data.orderId;
      console.log(data.orderId);
//transfer order to "confirmation.html" and clear localStorage
      window.location.href = "confirmation.html" + "?" + "name" + "=" + orderId;
      localStorage.clear();
    });
};
//validation FORM and send ORDER
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

      const products = []
      for (k = 0; k < storage.length; k++) {
        let allIdOrder = storage[k].idProduct;
        products.push(allIdOrder);
      }
//---send ORDER to page "confirmation" with alert
      let sendOrder = {contact,products};

      localStorage.setItem("sendOrder", JSON.stringify(sendOrder));

      preparedOrder(sendOrder);
    } else {
      alert("Veuillez remplir toutes les champs avant d'envoyer le formulaire!!!");
    }
  });
};
notifyOrder();