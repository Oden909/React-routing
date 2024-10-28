import React from 'react';
import NotFoundImg from '../assets/NotFoundImg.png';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
      <div className="content">
        <img width={400} src={NotFoundImg} alt="Страница не найдена" />
        <Link to="/products">
          <button>Перейти к товарам</button>
        </Link>
      </div>
    );
}

export default NotFoundPage;
