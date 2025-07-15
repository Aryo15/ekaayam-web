import React from 'react';
import '../css/styles.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <div className="footer__content grid">
                    <div>
                        <a href="index.html" className="footer__logo">Explore</a>
                        <p className="footer__description">
                            Contact us and explore <br/>
                            the world of technology.
                        </p>
                    </div>

                    <div className="footer__data grid">
                        <div>
                            <h3 className="footer__title">About</h3>
                            <ul className="footer__links">
                                <li><Link to="/about" className="footer__link">About Us</Link></li>
                                <li><Link to="/" className="footer__link">Features</Link></li>
                                <li><Link to="/" className="footer__link">News & Blog</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="footer__title">Company</h3>
                            <ul className="footer__links">
                                <li><Link to="/host" className="footer__link">FAQs</Link></li>
                                <li><Link to="/" className="footer__link">History</Link></li>
                                <li><Link to="/" className="footer__link">Testimonials</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="footer__title">Support</h3>
                            <ul className="footer__links">
                                <li><Link to="/pp" className="footer__link">Privacy Policy</Link></li>
                                <li><Link to="/rp" className="footer__link">Refund Policy</Link></li>
                                <li><Link to="/tnc" className="footer__link">Terms & Conditions</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="footer__title">Contact</h3>
                            <ul className="footer__links">
                                <li><a href="tel:+919831418299" className="footer__link">Call Center</a></li>
                                <li><a href="tel:+919831418299" className="footer__link">Support Center</a></li>
                                <li><a href="tel:+919831418299" className="footer__link">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__group">
                    <div className="footer__social">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <i className="ri-facebook-line"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <i className="ri-twitter-x-line"></i>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <i className="ri-youtube-line"></i>
                        </a>
                    </div>
                    <span className="footer__copy">
                        &#169; Copyright EKAAYAM. All rights reserved. 2024
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
