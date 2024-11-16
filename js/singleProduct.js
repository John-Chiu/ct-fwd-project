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


// Message to display when the cart is clicked



const body = document.body;

const style = document.createElement('style');
style.textContent = `
.message {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #CB997E;
  color: white;
  font-size : 24px;
  padding: 12px 24px;
  border-radius: 5px;
  display: none; 
  transition: opacity 0.5s ease-in-out;
}

.message.show {
  display: block; /* Show the message */
  opacity: 1; /* Fully visible */
}
`;
body.appendChild(style);

const button = document.querySelector(".addToCartBtn");

const message = document.createElement('div');
message.className = 'message';
message.textContent = '成功！產品已加入購物車！';
body.appendChild(message);


function showMessage() {
  const message = document.createElement('div');
  message.className = 'message';
  message.textContent = '成功！產品已加入購物車！';
  
  body.appendChild(message);
  
  message.classList.add('show');

  setTimeout(() => {
    message.classList.remove('show');
    

    setTimeout(() => {
      body.removeChild(message);
    }, 500)
  }, 3000);
}
button.addEventListener('click', showMessage);
