import products from './products.js';

// DEBUG
console.log('load products:', products);

// action const for updateQuantity()
const ADD = 1;
const MINUS = 2;
const REMOVE = 3;
// class name
const BTN_PLUS_CLASSNAME = 'btn-plus';
const BTN_MINUS_CLASSNAME = 'btn-minus';
const BTN_REMOVE_CLASSNAME = 'btn-remove';
const BTN_ADD_TO_CART_CLASSNAME = 'addToCartBtn';


let cart = [];
if (localStorage.getItem('cart')) {
  cart = JSON.parse(localStorage.getItem('cart'));
}
// DEBUG
console.log('load cart from localStorage:', cart);

const cartItemListHTML = document.querySelector('.cart-items-list');

displayProducts();
renderCartHTML();

(function () {
  const onclickHandler = (e) => {
    const btn = e.target;
    addToCart(btn.dataset.id);
  };
  const addToCartBtns = document.querySelectorAll(`.${BTN_ADD_TO_CART_CLASSNAME}`);
  addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', onclickHandler);
  });
})();

function addToCart(productId) {
  // const product = cart.find((item) => item.id === productId);
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  updateLocalStorage();
  renderCartHTML();
}

function updateLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// display all products in specify html element
function displayProducts() {
  let productListHTML = document.querySelector('.products-list');
  productListHTML.innerHTML = '';

  products.forEach((product) => {
    let productHTML = document.createElement('div');
    productHTML.classList.add('product');
    productHTML.innerHTML = `
      <a href="#">
        <img src="${product.imagePath}" class="product">
      </a>
      <p>${product.chineseName}</p>
      <p>$${product.price}</p>
      <button class=${BTN_ADD_TO_CART_CLASSNAME} data-id='${product.id}'>
        Add To Cart
      </button>`;
    productListHTML.appendChild(productHTML);
  });  
}  

// clear and render shopping cart content:
// item, price, quantity, subtotal, total
function renderCartHTML() {
  console.log('runtime cart', cart);
  cartItemListHTML.innerHTML = '';
  let totalPrice = 0;

  cart.forEach((item) => {
    const product = getProduct(item.id);
    totalPrice += product.price * item.quantity;

    let newItem = document.createElement('div');
    newItem.classList.add('cart-item');

    newItem.innerHTML = `
    <div>
      <img src="${product.imagePath}" alt="">
    </div>  
    <div class="item-info">
      <p>${product.chineseName}</p>
      <p>${product.englishName}</p>
      
      <p>選項: TODO? </p>
      <p>$${product.price}</p>
    </div>  
    <div>
      <button class=${BTN_PLUS_CLASSNAME} data-id=${product.id}>+</button>
      <span>${item.quantity}</span>
      <button class=${BTN_MINUS_CLASSNAME} data-id=${product.id}>-</button>
    </div>
    <button class="${BTN_REMOVE_CLASSNAME}" data-id=${product.id}>remove</button>
    <p>Subtotal: <span>${product.price * item.quantity}</span></p>
    `;
    cartItemListHTML.append(newItem);
  });
  document.getElementById('totalPrice').innerText = totalPrice;


  // +,- button onclick handler for updating cart item quantity
  const handleClickQuantityBtn = (e) => {
    let btn = e.target;
    let id = btn.dataset.id;
    if (btn.classList.contains(BTN_PLUS_CLASSNAME)) {
      updateQuantity(id, ADD)
    } else if (btn.classList.contains(BTN_MINUS_CLASSNAME)) {
      updateQuantity(id, MINUS);
    }
  };

  // add onclick listener for + button to increase cart item quantity
  const btnsPlus = document.querySelectorAll(`.${BTN_PLUS_CLASSNAME}`);
  btnsPlus.forEach((btn) => {
    btn.addEventListener('click', handleClickQuantityBtn);
  });

  // add onclick listener for - button to decrease cart item quantity
  const btnsMinus = document.querySelectorAll(`.${BTN_MINUS_CLASSNAME}`);
  btnsMinus.forEach((btn) => {
    btn.addEventListener('click', handleClickQuantityBtn);
  });


  // handler for remove button
  const handleClickRemoveButton = (e) => {
    let btn = e.target;
    let id = btn.dataset.id;
    updateQuantity(id, REMOVE);
  }

  // add listener to all remove btn
  const btnsRemove = document.querySelectorAll(`.${BTN_REMOVE_CLASSNAME}`);
  btnsRemove.forEach((btn) => {
    btn.addEventListener('click', handleClickRemoveButton);
  });
}

// update quantity of item in cart
function updateQuantity(productId, action) {
  // let item = cart.find((cartItem) => cartItem.id == productId);
  let item = getCartItem(productId);
  
  switch (action) {
    case ADD:
      item.quantity++;
      break;
    case MINUS:
      item.quantity--;
      if (item.quantity <= 0) {
        cart = cart.filter(cartItem => cartItem !== item);
      }
      break;
    case REMOVE:
      cart = cart.filter(cartItem => cartItem !== item);
      break;
    default:
      break;
  }
  updateLocalStorage();
  renderCartHTML();
}

// =======  helper function =======
function getProduct(productId) {
  return products.find((p) => {
    return p.id == productId;
  });
}

function getCartItem(productId) {
  return cart.find((item) => item.id == productId);
}
// =======  helper function END =======
