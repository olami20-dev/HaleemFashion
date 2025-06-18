import React from 'react';
import '../WomenShoes/WomenShoes.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../CartContext';


const shoes = [
  { name: 'Hamptons medium worn-out', brand: 'Balenciaga', price: '$850', image: 'Women1.avif' },
  { name: 'GG Trainer', brand: 'Gucci', price: '$100.00', image: 'Women6.avif' },
  { name: 'Easy Rider Pride', brand: 'Nike', price: '$100.00', image: 'Women4.avif' },
  { name: 'Nike Air Max Bella', brand: 'Balenciaga', price: '$130', image: 'Women2avif.avif' },
  { name: 'RS-X Suede Multi', brand: 'Nike', price: '$890', image: 'Women3.avif' },
  { name: 'Platform Slide Sandal', brand: 'Gucci', price: '$71.19', image: 'Women5.avif' },
  { name: 'Cali Wedge', brand: 'Puma', price: '$61.19', image: 'Women7.avif' },
  { name: 'Nike Air Force 1 07 LX', brand: 'Nike', price: '$129.99', image: 'Women8.avif' },
  { name: 'Monday shoe', brand: 'Balenciaga', price: '$109.99', image: 'Women9.avif' },
  { name: 'Gucci Ace Trainer', brand: 'Gucci', price: '$750', image: 'Women10.avif' },
  { name: 'Runner 2.0', brand: 'Balenciaga', price: '$550', image: 'Women11.avif' },
  { name: 'Speedcat OG', brand: 'Puma', price: '$100', image: 'women12.avif' },
];

const WomenShoes = () => {
    const {addToCart} = useCart();

  return (
    <div className="women-shoes-container">
      <h2 className="title">Women's Shoe Collection</h2>
      <div className="shoe-grid">
        {shoes.map((shoe, index) => (
          <div className="shoe-card" key={index}>
            <img src={shoe.image} alt={shoe.name} className="shoe-image" />
            <h3 className="shoe-name">{shoe.name}</h3>
            <p className="shoe-brand">{shoe.brand}</p>
            <p className="shoe-price">{shoe.price}</p>

            <div className="card-overlay">
              <div className="overlay-content">
                <p className="overlay-text">{shoe.brand}</p>
                <button className="overlay-btn" onClick={() => addToCart(shoe)}>
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenShoes;