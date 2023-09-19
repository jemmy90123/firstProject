
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';
import "../styles/Product.css";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App" style={{}}>
      <h1 style={{margin:'40px'}}>Products</h1>
      <div className="products " >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} onAddToCart={addToCart}   />
        ))}
      </div>
      <div className='mycart'>
      <Cart cartItems={cartItems}/>
      </div>
    </div>
  );
}


const products = [
  {
    name: 'HP Victus',
    price: 'EGP47,999.00',
    description:'12th Intel Core i7-12700H 14-Cores, 16GB RAM DDR5 4800 MHz, 1TB PCIe NVMe SSD',
    image: 'https://m.media-amazon.com/images/I/71TN45+oJ0L._AC_SX679_.jpg', // Add image URL for Product 1
  },
  {
    name: 'Laptop IdeaPad 5',
    price: '(EGP25,666.00)',
    description:'Laptop IdeaPad 5 15ITL05 (11th Intel® Core™ i7-1165G7 - Ram 16GB - Hard 512GB SSD M.2 )',
    image: 'https://m.media-amazon.com/images/I/41oAtcp2wZL._AC_.jpg', // Add image URL for Product 2
  },
  {
    name: 'Lenovo Legion ',
    price: '(EGP  56,555)',
    description:'Intel Core i7-11800H 11th Generation RAM 32GB and 1 TB SSD NVIDIA GeForce RTX 3060 6GB GDDR6 Displays',
    image: 'https://m.media-amazon.com/images/I/61gTpHzJmsL.__AC_SX300_SY300_QL70_ML2_.jpg', // Add image URL for Product 3
  },
  {
    name: 'Apple iPhone 14',
    price: '(EGP14,999.00)',
    description:'Screen: 6.1 inches , 1170 x 2532 pixels RAM: 6GB Internal memory: 128GB Rear Camera: Dual: 12MP + 12MP Selfie Camera: 12MP',
    image: 'https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/i/p/iphone14-6.jpg', // Add image URL for Product 3
  },
  {
    name: 'Samsung Galaxy A13',
    price: 20,
    description:'Screen: 6.6 inches 1080 x 2408 pixels RAM: 4 GB Internal memory: 64 GB Rear Camera: Quad: 50 MP + 5 MP + 2 MP + 2 MP Selfie Camera: 8 MP',
    image: 'https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/a/1/a13-128black-1_1.jpg', // Add image URL for Product 3
  },
  {
    name: 'Oppo Reno 8T',
    price: '(EGP14,999.00)',
    description:'Screen: 6.7 inches 1080 x 2412 pixels  RAM: 8 GB  Internal Memory: 256 GB  Rear Camera: Triple: 108 MP + 2 MP + 2 MP  Selfie Camera: 32 MP',
    image: 'https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/b/mb848-117-9-2023_1.jpg', // Add image URL for Product 3
  },
  {
    name: 'G2000 Headphones',
    price: '(EGP590.00)',
    description:'Soft Memory Foam Earpads, Compatible with Xbox One, PlayStation 4, Nintendo Switch, PC',
    image: 'https://m.media-amazon.com/images/I/61vLYc0DQAL._AC_SL1500_.jpg', // Add image URL for Product 3
  },
  {
    name: 'Onikuma K20',
    price: '(EGP350)',
    description:'Gaming Headset with Noise Canceling Microphone, Over-Ear, Black',
    image: 'https://m.media-amazon.com/images/I/81+ddXrkIdL._AC_SX679_.jpg', // Add image URL for Product 3
  },
  {
    name: 'Havit H2029U',
    price: '(EGP750)',
    description:'On-Ear Gaming Headset, Size 50 mm, Features 3D Stereo Surround Sound, RGB Multi-Color Effect with Unidirectional Microphone, Black',
    image: 'https://m.media-amazon.com/images/I/71ztsQaSQLL.__AC_SY300_SX300_QL70_ML2_.jpg', // Add image URL for Product 3
  },
];

// ... (rest of the code)


export default App;
