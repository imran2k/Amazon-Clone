import { addToCart , cart, loadFromStorage } from "../../data/cart.js";

describe('Test Suite: Add to Cart', () => {

  beforeEach(() => {
    
    
    spyOn(document, 'querySelector').and.returnValue({value: '1'});

    spyOn(localStorage, 'setItem');

    
  })


  it('Adds a new product to the cart', () => {
    


    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });

    
    
    loadFromStorage();

    

    addToCart('1a')
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('1a');
    expect(cart[0].quantity).toEqual(1);
    
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{ productId: '1a', quantity: 1, deliveryOptionId: '1'}]))

    
    
  })


  it('Adds an existing item to the cart', () => {

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: '1a',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });


    loadFromStorage();

    addToCart('1a')
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('1a');
    expect(cart[0].quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{ productId: '1a', quantity: 2, deliveryOptionId: '1'}]))




  })
});

