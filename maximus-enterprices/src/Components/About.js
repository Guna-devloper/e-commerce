import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                <div className="about-text">
                    <h1>About Maximus Enterprises</h1>
                    <p>
                        Welcome to <strong>Maximus Enterprises</strong>, your go-to destination for
                        premium clothing. We take pride in offering a diverse collection of stylish,
                        comfortable, and high-quality apparel for all occasions. Whether you’re looking for
                        casual wear, formal attire, or trendy outfits, we’ve got you covered.
                    </p>
                    <p>
                        Our mission is to redefine your shopping experience by blending elegance with
                        affordability. Established in 2024, Maximus Enterprises strives to make fashion
                        accessible to everyone while ensuring excellent customer service.
                    </p>
                </div>
                <div className="about-image">
                    <img
                        src="https://via.placeholder.com/500x300"
                        alt="About Maximus"
                    />
                </div>
            </div>
            <div className="map-container">
                <h2>Visit Us</h2>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345099336!2d-122.41941508468147!3d37.77492927975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581cba5a0d7f3%3A0xc8f74b81285b2e57!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1603829511547!5m2!1sen!2sus"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default About;
