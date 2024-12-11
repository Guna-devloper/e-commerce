import React, { useState } from 'react';
import './AddToCart.css';

const AddToCart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Classic T-Shirt',
            price: 20,
            quantity: 1,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Casual Jeans',
            price: 40,
            quantity: 1,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Sporty Hoodie',
            price: 50,
            quantity: 1,
            image: 'https://via.placeholder.com/150',
        },
    ]);

    const updateQuantity = (id, action) => {
        const updatedItems = cartItems.map((item) => {
            if (item.id === id) {
                if (action === 'increase') {
                    return { ...item, quantity: item.quantity + 1 };
                } else if (action === 'decrease' && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
            return item;
        });
        setCartItems(updatedItems);
    };

    const removeItem = (id) => {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems);
    };

    const getTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    return (
        <div className="cart-page">
            <h2>Your Shopping Cart</h2>
            {cartItems.length > 0 ? (
                <div className="cart-container">
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                    <div className="quantity-controls">
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, 'decrease')
                                            }
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, 'increase')
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <p>Total Items: {cartItems.length}</p>
                        <p>
                            Subtotal: <strong>${getTotal().toFixed(2)}</strong>
                        </p>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty. Add some items!</p>
            )}
        </div>
    );
};

export default AddToCart;
