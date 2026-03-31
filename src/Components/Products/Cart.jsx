import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Cart = ({ cart, removeFromCart, clearCart }) => {
    
    
  const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
       <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">My Cart ({cart.length})</h2>

      {cart.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center">
          <p className=" mb-6 flex justify-center items-center"><ShoppingCart></ShoppingCart></p>
          <h3 className="text-2xl font-medium mb-2">My cart is empty</h3>
          <p className="text-gray-500">Add some premium tools to get started</p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between py-6 border-b last:border-none">
              <div className="flex items-center gap-5">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-500">${item.price} / {item.period}</p>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 cursor-pointer border-2 border-red-500 rounded-2xl py-2 px-2 hover:bg-red-500 hover:text-white font-medium"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-10 flex justify-between items-center text-xl">
            <span className="font-medium">Total</span>
            <span className="font-bold">${total}</span>
          </div>

          <button 
            onClick={clearCart}
            className="w-full mt-8 py-4 bg-linear-to-r from-violet-600 to-purple-600 cursor-pointer text-white font-semibold text-lg rounded-2xl hover:brightness-110 transition-all"
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
    );
};

export default Cart;