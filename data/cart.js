export let cart = JSON.parse(localStorage.getItem('cart')) || [{
    productId:'1a',
    quantity: 2,
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 2
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
          quantity: 0 + selectorQuantity
        })
      }
      saveToStorage();
}

let addedMessageTimeoutId;


export function displayAddedMessage(productId) {
  const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`)

      addedMessage.classList.add('is-visible')

     
        if (addedMessageTimeoutId) {
          clearTimeout(addedMessageTimeoutId)
        }

        const timeoutID = setTimeout(() => {
          addedMessage.classList.remove('is-visible')
        }, 2000);
        
        addedMessageTimeoutId = timeoutID
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