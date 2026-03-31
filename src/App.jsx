
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Stats from './Components/Stats/Stats'
import Steps from './Components/Steps/Steps'
import Price from './Components/Price/Price'
import Workflow from './Components/Workflow/Workflow'
import Footer from './Components/Footer/Footer'
import ProductCard from './Components/Products/ProductCard'
import Cart from './Components/Products/Cart'

import { useState } from 'react';



function App() {


  const [activeTab, setActiveTab] = useState('products');   // Default: Products
  const [cart, setCart] = useState([]);

  
  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
    toast.info("Item removed from cart");
  };

  
  const clearCart = () => {
    setCart([]);
    toast.success("Thank you! Order placed successfully 🎉");
    setActiveTab('products');        
  };
  


  return (
    <>
    <NavBar cartCount={cart.length}/>
    <Banner></Banner>
    <Stats></Stats>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-10 py-3.5 font-semibold cursor-pointer rounded-full transition-all text-lg ${
              activeTab === 'products'
                ? 'bg-linear-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab('cart')}
            className={`px-10 py-3.5 font-semibold cursor-pointer rounded-full transition-all text-lg flex items-center gap-3 ${
              activeTab === 'cart'
                ? 'bg-linear-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Cart
            {cart.length > 0 && (
              <span className="bg-white  text-violet-600 text-sm font-bold px-3 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        
        {activeTab === 'products' ? (
          <ProductCard addToCart={addToCart} />
        ) : (
          <Cart
            cart={cart} 
            removeFromCart={removeFromCart} 
            clearCart={clearCart} 
          />
        )}
      </div>

    <Steps></Steps>
    <Price></Price>
    <Workflow></Workflow>
    <Footer></Footer>

    <ToastContainer />
    </>
  )
}

export default App
