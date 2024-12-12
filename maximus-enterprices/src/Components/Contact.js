import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>
                    Have questions? Need assistance? Reach out to us—we're here to help!
                </p>
            </div>
            <div className="contact-container">
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="contact-info">
                    <h2>Our Contact Details</h2>
                    <ul>
                        <li>
                            <strong>Address:</strong> 123 Fashion Street, Style City, 56789
                        </li>
                        <li>
                            <strong>Email:</strong> support@maximus-enterprises.com
                        </li>
                        <li>
                            <strong>Phone:</strong> +1 234 567 890
                        </li>
                        <li>
                            <strong>Working Hours:</strong> Mon-Fri: 9 AM - 6 PM
                        </li>
                    </ul>
                    <h2>Find Us Here</h2>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345099336!2d-122.41941508468147!3d37.77492927975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581cba5a0d7f3%3A0xc8f74b81285b2e57!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1603829511547!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
