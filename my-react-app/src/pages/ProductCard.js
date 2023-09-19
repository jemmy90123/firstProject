import React from 'react';
import "../styles/Product.css";
import 'bootstrap/dist/css/bootstrap.css';
function ProductCard({ product, onAddToCart }) {
  return (
  <div >

      <div class="card " style={{ width: '18rem', height: "500px",marginLeft:'50px', }}>
          <div style={{ height: '200px', marginBottom:'80px' }}>
          <img src={product.image} alt={product.name} height='300px' class="card-img-top"/>
          </div>
          <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">{product.description} Price: ${product.price}</p>
           
           <button className='bottom-button-container ' onClick={() => onAddToCart(product)}>Add to Cart</button>
          </div>
        </div>


      
    </div>
  );
}

export default ProductCard;




