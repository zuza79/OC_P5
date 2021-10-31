//--------page product--------------

//afficher photo de canape choisi dans index, remplir title prix et description
//choisir la couleur - zobrazit fotku vybraneho objektu a musi to byt propojene do panier

//je dois cherche "id" de produit
const search = window.location.search;
console.log(search);

const id = search.slice();
console.log(id);

const idApiUrl = 'http://localhost:3000/api/products/' + id;

let product = [];

let displaySelectProduct = function() {
    fetch(idApiUrl)
      .then((response) => response.json())
      .then((product) => {
        console.log(product);
    });
    //photo
        let imageSelectProduct = document.querySelector(".items__img");
        imageSelectProduct.innerHTML ='<img src="${product.imagerUrl_id}" alt=${"product, altTxt)"}>';
       
        //title
       let nameSelectProduct = document.getElementById("title");
       nameSelectProduct.innerHTML = product.nameSelectProduct;
       console.log(nameSelectProduct);

       //prix
       let priceSelectProduct = document.getElementById("price");
       priceSelectProduct.innerHTML = '$(product.priceSelectProduct)';
       console.log(priceSelectProduct);
  }
       displaySelectProduct(product);