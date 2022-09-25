import React from 'react';
import './Product.css';

const Product = (props) => {
     // console.log(props.product);
     const {name, img, seller, price, ratings} = props.product;
     
     
     return (
          
          <div className="product-carts">
               
               <img className="product-photo" src={img} alt="" />
               <h2>Name: {name} </h2>
               <h2>Seller: {seller} </h2>
               <h2>Price: ${price} </h2>
               <h2>Ratings: {ratings} </h2>

               
               <div className="btn-cart">
             <button>Add to Carts</button> 
             </div>
          </div>
         
         
         
       
     );
};

export default Product;