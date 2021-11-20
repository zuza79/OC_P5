 //-----page confirmation 
//recuperation URL and ID order
const urlConfirmation = new URL(window.location.href);
console.table(urlConfirmation)
//fonction recuperation  (confirmation.htlm = line number 49)
const addOrderId = () => {  
    const params = urlConfirmation.searchParams;
    const orderConfirmation =params.get('name');
    document.getElementById('orderId').innerHTML = orderConfirmation;
};
addOrderId();
console.log(addOrderId)

