document.addEventListener('DOMContentLoaded', (event) => {
  const BTN_ADD_TO_CART_CLASSNAME = 'addToCartBtn';

  document.querySelectorAll(`.${BTN_ADD_TO_CART_CLASSNAME}`)
    .forEach(btn => {
      btn.addEventListener('click', handleClickAddToCartBtn);
    });
});


function handleClickAddToCartBtn(e) {
  const btn = e.target;
  const productId = btn.dataset.id;
  const quantity = Number(document.querySelector('.Cake_number').innerText);
  addToCart(productId, quantity);
  btn.disabled = true;
  btn.innerText = 'Item added to cart';
}

function addToCart(productId, quantity) {
  if (quantity == undefined)
    quantity = 1;
  const cart = getCartFromLocalStorage();
  const cartItem = getCartItem(productId, cart);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity: quantity });
  }
  updateLocalStorage(cart);
}



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

function getCartItem(productId, cart) {
  return cart.find((item) => item.id == productId);
}

