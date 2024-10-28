import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';
import loading from '../assets/loading.gif';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetch('https://fakestoreapi.com/products/'+id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoad(false);
      });
  }, []);

  return (
    <div className="product-detail" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {load ?
        <img width={300} src={loading}/> :
        <>
          <img src={product.image} alt={product.title} width={200} />
          <h2>{product.title}</h2>
          <p>Цена: ${product.price}</p>
          <p>{product.description}</p>
          <StarRating rating={product.rating ? Math.round(product.rating.rate) : 0} />
          <button onClick={() => navigate(-1)}>Назад</button>
        </>
      }
    </div>
  );
}

export default ProductDetail;
