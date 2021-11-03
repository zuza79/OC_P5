//--------page product--------------

//afficher photo de canape choisi dans index, remplir title prix et description
//choisir la couleur - zobrazit fotku vybraneho objektu a musi to byt propojene do panier
//declaration de la base de donnees
const apiUrl = "http://localhost:3000/api/products/";
let product = [];
console.log(product);

//afficher image
fetch(apiUrl)
.then((response) => response.json())
.then((product) => {
    console.log(product)
    displayOneImage(product);      
    });
function displayOneImage(products){
    let htmlImage='';
products.forEach(element => {
htmlImage='<img src="${element.imageUrl}" alt="${element.altTxt}">';   
});

document.getElementsByClassName("item__img").innerHTML=htmlImage;
}

//afficher title
fetch(apiUrl)
.then((response) => response.json())
.then((product) => {
    console.table(product)
    displayOneTitle(product);      
    });
function displayOneTitle(products){
    let htmlTitle='';
products.forEach(element => {
htmlTitle='<h1 id="title">'+element.name+'</h1>'    
});

document.getElementById("title").innerHTML=htmlTitle;
}


//afficher price
fetch(apiUrl)
.then((response) => response.json())
.then((product) => {
    console.table(product)
    displayOnePrice(product);      
    });
function displayOnePrice(products){
let htmlPrice='';
products.forEach(element => {
htmlPrice='<span id="price">'+element.price+'</span>'    
});

document.getElementById("price").innerHTML=htmlPrice;
}

//afficher description
fetch(apiUrl)
.then((response) => response.json())
.then((product) => {
    console.log(product)
    displayOneDescription(product);      
    });
function displayOneDescription(products){
let htmlDescription='';
products.forEach(element => {
htmlDescription='<p id="description">'+element.description+'</p>'    
});

document.getElementById("description").innerHTML=htmlDescription;
}
//choisir color
fetch(apiUrl)
.then((response) => response.json())
.then((product) => {
    console.log(product)
    displayColors(product);      
    });
function displayColors(products){
let htmlColors='';
products.forEach(element => {
htmlColors='<select name="color-select" id="colors"><option value="">--SVP, choisissez une couleur --</option>'+element.colors+'</select>'    
});

document.getElementById("colors").innerHTML=htmlColors;
}

//options colour
//message erreur quantité negativ ou +100
//message erreur non remplisage coleur ou quantités