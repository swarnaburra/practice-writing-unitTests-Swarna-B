//Add item to the cart
//Use push function to add at the end of the array

function addItem(cart, item, quantity) {
    if (quantity <= 0) {
        return `the value of quantity is invalid`;
    }
    if (item === ""){
        return `The value of item is invalid`;
    }
    cart.push({ item: item, quantity: quantity });
    return cart;

}

function removeItem(cart, item) {
    return cart.filter(element => element.item !== item);
}

// Finding total = total + element.quantity 
//Using Addition Assignment Operator +=
function getTotalItems(cart) {
    let total = 0;
    cart.forEach(element => {
        total += element.quantity;
    });

    return total;
}

module.exports = { addItem, removeItem, getTotalItems };