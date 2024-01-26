import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";

import { loadFromStorage, cart } from "../../data/cart.js";


describe('Test Suite: Render Order Summary', () => {
  const prodcutId1 = '1a';
  const prodcutId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  beforeEach(() => {

    spyOn(localStorage, 'setItem');

    
    document.querySelector('.js-test-container').innerHTML = 
      `<div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
      <div class="js-checkout-header"></div>
      `;

      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify(
          [{
            productId: prodcutId1,
            quantity: 2,
            deliveryOptionId: '1',
          }, {
            productId: prodcutId2,
            quantity: 2,
            deliveryOptionId: '2',
          }]
        );
        });
      loadFromStorage();

      renderOrderSummary();
  });

  afterEach(() => {
    document.querySelector('.js-test-container').innerHTML = '';
  })


  it('Displays The Cart', () => {

      expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(2);

      expect(document.querySelector(`.js-product-quantity-${prodcutId1}`).innerText).toContain('Quantity: 2');

      expect(document.querySelector(`.js-product-quantity-${prodcutId2}`).innerText).toContain('Quantity: 2');

      expect(document.querySelector(`.js-product-name-${prodcutId1}`).innerText).toEqual('Red Dead Redemption 2 PC (Rockstar Social Club - PC Code - No CD/DVD)');

      expect(document.querySelector(`.js-product-price-${prodcutId1}`).innerText).toEqual('$28.40');

      expect(document.querySelector(`.js-product-price-${prodcutId2}`).innerText).toEqual('$20.95');

      
  });


  it('Removes a product', () => {

      document.querySelector(`.js-delete-link-${prodcutId1}`).click();
      
      expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);

      expect(document.querySelector(`.js-cart-item-container-${prodcutId1}`)).toEqual(null);

      expect(document.querySelector(`.js-cart-item-container-${prodcutId2}`)).not.toEqual(null);

      expect(cart.length).toEqual(1)
      expect(cart[0].productId).toEqual(prodcutId2);

  })

})

