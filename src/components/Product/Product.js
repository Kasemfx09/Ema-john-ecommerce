import React from 'react';
import './Product.css';

const Product = (props) => {
     // console.log(props.product);
     // const {handleAddToCart}=props;
     const {name, img, seller, price, ratings} = props.product;
     
    console.log(props);
     
     return (
          
         <div className="products">
               <img className="product-photo" src={img} alt="" />
               <div className="product-carts"> 
                   <p> <span className="product-name">Name:</span> {name} </p>
                    <p> <span className="product-name">Seller:</span>  {seller} </p>
                    <p><span className="product-name">Price:</span> ${price} </p>
                    <p><span className="product-name">Ratings:</span> {ratings} Stars</p>
               </div>
               <div onClick={()=>props.handleAddToCart(props.product)} className="btn-cart">
                    <button>Add to Carts</button> 
               </div>
         </div>
         
         
         
       
     );
};

export default Product;