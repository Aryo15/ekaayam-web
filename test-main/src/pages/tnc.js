import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../css/styles.css';
import { submitToGoogleSheets } from '../functions/submitToGoogleSheets';
import Navbar from '../functions/Navbar';
import Footer from '../functions/Footer';

function TNC() {
    useEffect(() => {
        // Initialize ScrollReveal and apply it to the elements you want to reveal
        const sr = ScrollReveal({
          origin: 'top', // You can set origin, distance, duration, delay, etc.
          distance: '50px',
          duration: 1000,
          delay: 200,
        //   reset: true // Set to true if you want the animation to reset every time it enters the viewport
        });
    
        // Reveal elements with specific classNameNamees
        sr.reveal('.home__data', {});
        sr.reveal('.home__card', { interval: 200 });
        sr.reveal('.about__data', {});
        sr.reveal('.about__image', { delay: 400 });
        sr.reveal('.ad__data', { interval: 200 });
        sr.reveal('.ad__image', { delay: 400 });
        sr.reveal('.join__data', {});
        sr.reveal('.join__image', { delay: 400 });
        sr.reveal('.popular__card', { interval: 200 });
        sr.reveal('.explore__data', {});
        sr.reveal('.explore__image', { delay: 400 });
      }, []);

        const handleSubmit = (event) => {
            event.preventDefault(); // Prevent the default form submission behavior
            submitToGoogleSheets();
        };
      
  return (
    <div className="body">
      <Navbar />

      <main className="main">
         <section className="home section" id="home">
            <img src={require('../assests/img/IMG3.jpg')} alt="home image" className="home__bg"/>
            <div className="home__shadow"></div>

            <div className="home__container container grid">
                <div className="home__data">

                    <h1 className="home__title">
                        EKAAYAM
                    </h1>

                    <p className="home__description">
                        The One Dimension in Everything
                    </p>

                </div>
                
            </div>
         </section>

         <section className="about section" id="about">
            <div className="about__container container grid policy">
                <div className="about__data">
                    <h2 className="section__title">
                    Terms & Conditions
                    </h2>

                    <p className="about__description">
                    Last Updated: 3 /11/2024  4:00 a.m. <br />
                    Welcome to Ekaayam. These Terms and Conditions govern your use of our platform and services. By accessing or using our website, you 
                    agree to comply with these terms. If you disagree with any part of these terms, you may not access our services. <br/>
                    User Responsibilities <br/> 
                    You agree to provide accurate and truthful information when using our platform. You are solely responsible for maintaining the 
                    confidentiality of your account and password. You must notify us immediately of any unauthorized use of your account.Listing 
                    Events and Selling Tickets As a user of Ekaayam, you have the ability to list events and sell tickets through our platform. 
                    You agree to abide by all applicable laws and regulations when creating event listings and selling tickets. Ticket Sales and 
                    Payments. Ekaayam provides a platform for ticket sales, but we do not guarantee the accuracy, completeness, or availability of 
                    tickets listed on our platform. Users are solely responsible for the pricing and sale of tickets. Ekaayam is not responsible 
                    for any disputes or issues arising from ticket sales. <br/>
                    Event Management <br/>
                    We aim to provide tools and features to facilitate event management for organizers. However, Ekaayam is not responsible for the 
                    planning, execution, or outcome of events listed on our platform. <br/>
                    Intellectual Property<br/>
                    All content and materials on the Ekaayam platform, including text, graphics, logos, and software, are the property of Ekaayam or 
                    its licensors. You may not reproduce, distribute, or modify any content from our platform without prior written consent. <br/>
                    Limitation of Liability<br/>
                    Ekaayam shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in any way 
                    connected with your use of our platform or services. <br/>
                    Changes to Terms and Conditions<br/>
                    Ekaayam reserves the right to modify or revise these Terms and Conditions at any time. By continuing to use our platform after 
                    any changes, you agree to be bound by the revised terms. <br/>
                    Governing Law<br/>
                    These terms shall be governed by and constructed in accordance with the laws of India without reference to conflict of laws 
                    principles and disputes arising in relation hereto shall be subject to the exclusive jurisdiction of the courts at Delhi. <br/>
                    Contact Us<br/>
                    If you have any questions or concerns about these Terms and Conditions, please contact us at ekaayamtech@gmail.com <br/>
                    By using Ekaayam, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.<br/>
                    Sincerely,<br/>
                    EKAAYAM
                    </p>

                </div>

            </div>
         </section>
         
      </main>

      <Footer />

      <a href="#" classNameName="scrollup" id="scroll-up">
        <i classNameName="ri-arrow-up-line"></i>
      </a>
   </div>
  );
}

export default TNC;