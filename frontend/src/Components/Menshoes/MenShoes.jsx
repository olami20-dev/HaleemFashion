import React from 'react';
import '../Menshoes/MenShoes.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../CartContext';

const shoes = [
  {
    name: 'Mens G75 trainer',
    brand: 'Gucci',
    price: '$795',
    image: 'Men1.avif',
  },
  {
    name: 'Nike P-6000',
    brand: 'Nike',
    price: '$119.99',
    image: 'men2.avif',
  },
  {
    name: 'Balenciaga Triple S',
    brand: 'Balenciaga',
    price: '$995',
    image: 'Men3.avif',
  },
  {
    name: 'Dribble',
    brand: 'Puma',
    price: '$180',
    image: 'men4.avif',
  },
  {
    name: 'Speedcat OG',
    brand: 'Puma',
    price: '$110',
    image: 'men5.avif',
  },
   {
    name: 'Balenciaga Triple S',
    brand: 'Balenciaga',
    price: '$995',
    image: 'men6.avif',
  },
  {
    name: 'Mens Gucci Jordaan loafer',
    brand: 'Gucci',
    price: '$895',
    image: 'men7.avif',
  },
  {
    name: 'Magnetic',
    brand: 'Puma',
    price: '$50.99',
    image: 'men8.avif',
  },
  {
    name: 'Mens driver with Horsebit',
    brand: 'Gucci',
    price: '$780',
    image: 'men9.avif',
  },
   {
    name: 'Suede Classic',
    brand: 'Puma',
    price: '$90.00',
    image: 'men10.avif',
  },
  {
    name: 'Black mesh',
    brand: 'Balenciga',
    price: '$105',
    image: 'men12.avif',
  },
  {
    name: 'Nike Court Vision Low Next Nature',
    brand: 'Puma',
    price: '$79.99',
    image: 'men11.avif',
  },
  


];

const MenShoes = () => {
    const {addToCart} = useCart();
  return (
    <div className="men-shoes-container">
      <h2 className="title">Men's Shoe Collection</h2>
      <div className="shoe-grid">
        {shoes.map((shoe, index) => (
          <div className="shoe-card" key={index}>
            <img src={shoe.image} alt={shoe.name} className="shoe-image" />
            <h3 className="shoe-name">{shoe.name}</h3>
            <p className="shoe-brand">{shoe.brand}</p>
            <p className="shoe-price">{shoe.price}</p>

            <div className="card-overlay">
              <div className="overlay-content">
                {/* <p className="overlay-text">Men's</p> */}
                <p className="overlay-text">{shoe.brand}</p>
                {/* <button className="overlay-btn">
                  <FaShoppingCart /> Add to Cart
                </button> */}
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

export default MenShoes;
