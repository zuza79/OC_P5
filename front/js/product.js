//--------page product--------------
//idProduct à modifier - urlProduct : url du produit à charger
let idProduct = new URL(location.href).searchParams.get("_id");
const urlProduct= "http://localhost:3000/api/products/" + idProduct;
// charger le json du produit 
chargerProduit(urlProduct);

// charger le json du produit depuis l'api
function chargerProduit(url){
fetch(url)
.then((reponse) => reponse.json())
.then((product) => {
    afficherProduit(product);
})
.catch((error) => {
    console.log("erreur get product:"+error);
    alert("Une erreur est survenue! Veuillez contacter l'administrateur du site."); });
}

// afficher image, title, prix, description, quantite
function afficherProduit(produit){
//afficher image
document.querySelector('.item__img').innerHTML = ` <img src="${produit.imageUrl}" alt="${produit.altTxt}">`;
//afficher title
document.getElementById("title").innerHTML = produit.name;
//afficher prix
 document.getElementById("price").innerHTML = produit.price;
//afficher description
document.getElementById("description").innerHTML = produit.description;

for (i = 0; i < produit.colors.length; i++){
    document.getElementById("colors").innerHTML+= ` <option value="${produit.colors[i]}">${produit.colors[i]}</option>`;   
}
document.getElementById("addToCart").addEventListener('click', function(event){
    event.stopPropagation();
    event.preventDefault();

    let idProduit=produit._id;
    let colorProduit= document.getElementById("colors").value;
    let quantiteProduit =document.getElementById("quantity").value;
    
    ajouterArticleDansPanier(idProduit,colorProduit, quantiteProduit);
});
}
// Ajouter le produit dans le local Storage 
function ajouterArticleDansPanier(id, color,quantite){

    // gerer le local Storage 
    console.log(id, color,quantite);
}

