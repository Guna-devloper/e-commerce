import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleProduct = () =>{
        navigate("/products")
    }
    return (
        <div className="home">
            <div className="hero">
                <h1>Style That Defines You</h1>
                <p>Explore our premium clothing collection. Your style, our mission.</p>
                <button onClick={handleProduct}>Shop Now</button>
            </div>
        </div>
    );
};

export default Home;
