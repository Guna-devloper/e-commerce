import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Welcome Back!</h1>
                <p>Please login to continue shopping with Maximus Enterprises.</p>
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
                <div className="login-footer">
                    <p>
                        Don’t have an account? <a href="/signup">Sign Up</a>
                    </p>
                    <p>
                        <a href="/forgot-password">Forgot Password?</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
