import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    
     const [products, setProducts] = useState([]);

     useEffect( ()=>{
          fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
          // fetch('products.json')
          .then(res=> res.json())
          .then(data => setProducts(data))
     }, []); 
     
     const handleAddToCart = (product)=>{
          console.log(product);
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
                    <h2>Order Summary </h2>
                    <p>Select Items: 5</p>
                    <p>Total Price: 5</p>
                    <p>Total Shipping charge: 5</p>
                    <p>Tax: 5</p>
                    <p>Grand Total: $5</p>
                    <button>Clear Cart</button>
                    <button>Review Order</button>
               </div>
          </div>
          
     );
     
};

export default Shop;