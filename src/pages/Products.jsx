import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';
import loadingGif from '../assets/loading.gif';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img width={300} src={loadingGif} alt="Загрузка..." />
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
          <StarRating rating={Math.round(product.rating.rate)} />
        </div>
      ))}
    </div>
  );
};

export default Products;
