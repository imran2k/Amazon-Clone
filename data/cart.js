export let cart = JSON.parse(localStorage.getItem('cart')) || [{
    productId:'1a',
    quantity: 2,
    deliveryOptionId: '1',
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 2,
    deliveryOptionId: '2',
  }];





function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart)); 
}

export function addToCart(productId) {
  let matchingItem;

      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      })

      const selectorQuantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value)

      if (matchingItem) {
        matchingItem.quantity += selectorQuantity;
      } else {
        cart.push({
          productId,
          quantity: 0 + selectorQuantity,
          deliveryOptionId: '1'
        })
      }
      saveToStorage();
}




export function displayAddedMessage(productId) {
  const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`)

      addedMessage.classList.add('is-visible')

      const existingTimeoutId = addedMessage.dataset.timeoutId;

     
        if (existingTimeoutId) {
          clearTimeout(existingTimeoutId)
        }

        const timeoutID = setTimeout(() => {
          addedMessage.classList.remove('is-visible')
        }, 2000);
        
        addedMessage.dataset.timeoutId = timeoutID;
}

export function removeFromCart(productId) {

  const newCart = [];

  cart.forEach((cartItem)=>{
    if (cartItem.productId != productId) {
      newCart.push(cartItem);
    }
    
  });


  
  cart = newCart;
  saveToStorage();
  
  
}







function updateCartItemQuan() {
  var cartQuantity = 0;
  
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
      
    });
    return cartQuantity;

}



export function calculateCartQuantity() {
  document.querySelector('.js-cart-quantity').innerHTML = updateCartItemQuan();
}

export function calculateCheckoutQuantity() {
    document.querySelector('.js-checkout-header').innerHTML = `${updateCartItemQuan()} items`
}

export function calculatePaymentSummaryItems() {
    document.querySelector('.js-item-count').innerHTML = `Items: (${updateCartItemQuan()})`;
}












export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {

  if (productId === cartItem.productId) {
    matchingItem = cartItem;
  }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}

export function updateDeliveryOption (productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}