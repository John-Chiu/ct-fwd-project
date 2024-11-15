import products from '/js/products.js';

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


// DEBUG
console.log('load cart from localStorage:', getCartFromLocalStorage());
// get container where cart items render
const cartItemListHTML = document.querySelector('.purchased-items');

renderCartHTML();

// clear and render shopping cart content:
// item, price, quantity, subtotal, total
function renderCartHTML() {
    const cart = getCartFromLocalStorage();
    console.log('runtime cart', cart);
    cartItemListHTML.innerHTML = '';
    let totalPrice = 0;
  
    cart.forEach((item) => {
      const product = getProduct(item.id);
      totalPrice += product.price * item.quantity;
  
      const newItem = document.createElement('div');
      newItem.classList.add('purchased-items-box');
  
      newItem.innerHTML = `
      <div>
        <img src="${product.imagePath}" class="item-img" alt="item-img">
      </div>  
      <div class="item-info">
        <ul class="item-info-details">
            <li><h3>${product.chineseName}</h3></li>
        </ul>
      </div>  
      <div class="item-amount">
        <div class="btn-item-plmi">
            <button class=${BTN_PLUS_CLASSNAME} data-id=${product.id}>
              <i class="fa-solid fa-plus"></i>
            </button>
            <p>${item.quantity}</p>
            <button class=${BTN_MINUS_CLASSNAME} data-id=${product.id}>
              <i class="fa-solid fa-minus"></i>
            </button>
        </div>
      </div>
      <div class="item-price">
        <p>$<span>${product.price * item.quantity}</span></p>
      </div>
      <div class="btn-item-remove">
        <label class="${BTN_REMOVE_CLASSNAME}" data-id=${product.id}><i class="ph ph-trash"></i></label>
      </div>
      `;
      cartItemListHTML.append(newItem);
    });

    document.querySelector('.total-price > span').innerText = totalPrice;

    // + button onclick handler for updating cart item quantity
    const handleClickPlusQuantityBtn = (e) => {
      const btn = e.target.parentElement;
      const id = btn.dataset.id;
      updateQuantity(id, ADD);
    };

    // - button onclick handler for updating cart item quantity
    const handleClickMinusQuantityBtn = (e) => {
      const btn = e.target.parentElement;
      const id = btn.dataset.id;
      updateQuantity(id, MINUS);
    };
  
    // add onclick listener for + button to increase cart item quantity
    const btnsPlus = document.querySelectorAll(`.${BTN_PLUS_CLASSNAME} > i`);
    btnsPlus.forEach((btn) => {
      btn.addEventListener('click', handleClickPlusQuantityBtn);
    });
  
    // add onclick listener for - button to decrease cart item quantity
    const btnsMinus = document.querySelectorAll(`.${BTN_MINUS_CLASSNAME} > i`);
    btnsMinus.forEach((btn) => {
      btn.addEventListener('click', handleClickMinusQuantityBtn);
    });
  
  
    // handler for remove button
    const handleClickRemoveButton = (e) => {
      const btn = e.target.parentElement;
      const id = btn.dataset.id;
      updateQuantity(id, REMOVE);
    }
  
    // add listener to all remove btn
    const btnsRemove = document.querySelectorAll(`.${BTN_REMOVE_CLASSNAME} > i`);
    btnsRemove.forEach((btn) => {
      btn.addEventListener('click', handleClickRemoveButton);
    });
  }
  
  // update quantity of item in cart
  function updateQuantity(productId, action) {
    let cart = getCartFromLocalStorage();
    const cartItem = getCartItem(productId, cart);
    
    switch (action) {
      case ADD:
        cartItem.quantity++;
        break;
      case MINUS:
        cartItem.quantity--;
        if (cartItem.quantity <= 0) {
          cart = cart.filter(x => x !== cartItem);
        }
        break;
      case REMOVE:
        cart = cart.filter(x => x !== cartItem);
        break;
      default:
        break;
    }
    updateLocalStorage(cart);
    renderCartHTML();
  }
  
  // =======  helper function =======
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
  
  function getProduct(productId) {
    return products.find((p) => {
      return p.id == productId;
    });
  }
  
  function getCartItem(productId, cart) {
    return cart.find((item) => item.id == productId);
  }
  // =======  helper function END =======
  