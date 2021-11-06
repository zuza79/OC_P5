//--------page product--------------

const searchIdApiUrl = window.location.search;
console.log(searchIdApiUrl);
const idApi = searchIdApiUrl.slice (5);
console.log(idApi);

const idApiUrl= "http://localhost:3000/api/products/" + idApi;

let product = [];

//function imageSelectProduct() 
//    fetch(idApiUrl)
//.then((response) => response.json())
//.then((product) => {
//    console.log(product);
//   let imageSelect = document.createElement("imageUrl");
//    imageSelect.src = product[''];
//   let newDiv = document.getElementsByClassName("items__img");
//   newDiv.innerHTML = '';
//    newDiv.appendChild(imageSelectProduct);
//});
//};
//imageSelectProduct();


let selectProduct = function(){
    fetch(idApiUrl)
.then((response) => response.json())
.then((product) => {
    console.log(product);

//afficher image
let imageSelectProduct = document.querySelector('.item__img').innerHTML += ` <img src="${productObject.imageUrl}" alt="${productObject.altTxt}">`;
console.log(imageSelectProduct);

//afficher title
let nameSelectProduct = document.getElementById("title");
nameSelectProduct.innerHTML = product.name;
console.log(nameSelectProduct);

//afficher prix
let priceSelectProduct = document.getElementById("price");
priceSelectProduct.innerHTML = product.price;
console.log(priceSelectProduct);

//afficher description
let descriptionSelectProduct = document.getElementById("description");
descriptionSelectProduct.innerHTML = product.description;
console.log(descriptionSelectProduct);

//afficher color
let colorSelectProduct = document.getElementById("colors");
for (i = 0; i < product.colors.lenght; i++){
colorSelectProduct+= '<option value="${product.colors[i]}">'+product.colors+'</option>';   
}
console.log(colorSelectProduct);
});
};
selectProduct();

//faire message erreur quantité negativ ou +100
//faire message erreur non remplisage coleur ou quantités