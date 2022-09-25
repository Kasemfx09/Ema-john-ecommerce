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
     
     return (
          <div className="shop-container">
               <div className="shop-content">
                    <div className="shop-info">
                         {
                              products.map(product=><Product 
                                   key= {product.id} 
                                   product ={product}                                   
                                   > </Product>)
                             
                         } 

                                          
                    </div> 
                                     
               </div>
               <div className='order-content'>
                    <h2>Order Summary </h2>
                    <p>Select Items: 5</p>
               </div>
          </div>
          
     );
     
};

export default Shop;