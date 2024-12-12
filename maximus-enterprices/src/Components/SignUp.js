import React from "react";
import { motion } from "framer-motion";
import "./Signup.css";

const SignUp = () => {
    return (
        <motion.div
            className="signup-page"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <motion.div
                className="signup-container"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h1>Create Your Account</h1>
                <p>Sign up to start shopping with Maximus Enterprises.</p>
                <form className="signup-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Re-enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="signup-btn">
                        Sign Up
                    </button>
                </form>
                <div className="signup-footer">
                    <p>
                        Already have an account? <a href="/login">Log In</a>
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SignUp;
