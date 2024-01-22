export const cart = []

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