import React from 'react';
import './Products.css';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate =  useNavigate();
    const handleCart = () =>{
        navigate("/cart")
    }
    const products = [
        { id: 1, name: 'Classic T-Shirt', price: '$20', image: 'https://via.placeholder.com/300' },
        { id: 2, name: 'Casual Jeans', price: '$40', image: 'https://via.placeholder.com/300' },
        { id: 3, name: 'Formal Shirt', price: '$30', image: 'https://via.placeholder.com/300' },
        { id: 4, name: 'Sporty Hoodie', price: '$50', image: 'https://via.placeholder.com/300' },
    ];

    return (
        <div className="products">
            <h2>Our Products</h2>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button onClick={handleCart}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
