import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    
     const [products, setProducts] = useState([]);
     const [cart, setCart] = useState([]);
     useEffect( ()=>{
          fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
          // fetch('products.json')
          .then(res=> res.json())
          .then(data => setProducts(data))
     }, []); 
     
     const handleAddToCart = (product)=>{
          console.log(product);
          const newCart =[...cart, product]
          setCart(newCart);
     }
     
     return (
          <div className="shop-container">
               <div className="shop-content">
                    <div className="shop-info">
                         {
                              products.map(product=><Product 
                                   key= {product.id} 
                                   product ={product}  
                                   handleAddToCart = {handleAddToCart}                                 
                                   > </Product>)
                             
                         } 

                                          
                    </div> 
                                     
               </div>
               <div className="order-content">
                    <h2>Order Summary</h2>
                    <p>Select Items: {cart.length} </p>
                    <p>Total Price: $5</p>
                    <p>Total Shipping charge: $5</p>
                    <p>Tax: $5</p>
                    <p className="grand-total">Grand Total: $5</p>
                   <div className="cart-btn">
                         <button>Clear Cart  <FontAwesomeIcon icon={faTrash} /></button>
                         <button>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
                   </div>
               </div>
          </div>
          
     );
     
};

export default Shop;