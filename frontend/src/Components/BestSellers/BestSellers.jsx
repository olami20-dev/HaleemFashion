import React from 'react';
import './BestSellers.css';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import '../BestSellers/BestSellers.css'

const bestSellers = [
  {
    name: 'Air Max Pro',
    price: '$120',
    image: 'Gucci.avif',
    category: 'Men',
    link: '/Men',
  },
  {
    name: 'Classic Runner',
    price: '$95',
    image: 'Gucci1.avif',
    category: 'Men',
    link: '/Men',
  },
  {
    name: 'Nike Field General',
    price: '$99.99',
    image: 'Nike.png',
    category: 'Women',
    link: '/Women',
  },
  {
    name: 'Nike Air Max Muse',
    price: '€159.99',
    image: 'Nike1.png',
    category: 'Women',
    link: '/Women',
  },
];

const BestSellers = () => {
  return (
    <div className="bestsellers-container">
      <h2 className="bestsellers-title">OUR BEST SELLERS</h2>
      <div className="bestsellers-grid">
        {bestSellers.map((shoe, index) => (
          <div className="bestseller-card" key={index}>
            <div className="bestseller-image-container">
              <img src={shoe.image} alt={shoe.name} className="bestseller-image" />
              <div className="bestseller-overlay">
                <span className="bestseller-category">{shoe.category}</span>
                <a href={shoe.link} className="bestseller-arrow">
                  <BsArrowUpRightCircleFill />
                </a>
              </div>
            </div>
            <h3 className="bestseller-name">{shoe.name}</h3>
            <p className="bestseller-price">{shoe.price}</p>
            <p className="bestseller-desc">
              Top-quality and stylish design for everyday wear.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
