//declaration database
const apiUrl = "http://localhost:3000/api/products/";
var product = [];
//called API  
fetch(apiUrl)
      .then((response) => response.json())
      .then((product) => {
         console.table(product)
         displayProducts(product);
      });
  // display all products
 function displayProducts(products){
   var html='';
   products.forEach(element => {
      html+='<a href="./product.html?_id='+element._id+'"><article><img src="'+
      element.imageUrl+'" alt="'+element.altTxt+
      '"><h3 class="productName">'+element.name+'</h3><p class="productDescription">'+
      element.description+'.</p></article></a>';
   });
   document.getElementById("items").innerHTML= html;
}