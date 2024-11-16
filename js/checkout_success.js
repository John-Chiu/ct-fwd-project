function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function getCartFromLocalStorage() {
  let cart = [];
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  return cart;
}


// empty shopping cart when payment succeed
console.log('cart:', getCartFromLocalStorage());
let cart = [];
updateLocalStorage(cart);
console.log('cart:', getCartFromLocalStorage());
