import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../css/styles.css';
import { submitToGoogleSheets } from '../functions/submitToGoogleSheets';
import Navbar from '../functions/Navbar';
import Footer from '../functions/Footer';

function PP() {
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
                        Privacy Policy
                    </h2>

                    <p className="about__description">
                    Last Updated: 3 /11/2024  4:00 a.m. <br />
                    Introduction<br/>
                    At Ekaayam, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your 
                    personal information when you use our platform and services. By accessing or using Ekaayam, you consent to the terms of this 
                    Privacy Policy.Information We Collect. We may collect personal information such as your name, email address, phone number, and 
                    payment details when you register an account, list events, or purchase tickets through our platform. We also collect non-personal 
                    information such as browser type, IP address, and device identifiers. How We Use Your Information? We use the information we collect 
                    to provide and improve our services, communicate with you, process transactions, and personalize your experience on our platform. 
                    We may also use your information to comply with legal obligations and enforce our Terms and Conditions. Data Security, We implement 
                    security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security. Sharing 
                    of Information we may share your personal information with third-party service providers who assist us in providing our services, 
                    such as payment processors and analytics providers. We may also disclose your information in response to legal requests or to protect 
                    our rights and interests. Cookies and Tracking Technologies We use cookies and similar tracking technologies to enhance your experience 
                    on our platform, analyze usage patterns, and deliver targeted advertisements. You can choose to disable cookies through your browser 
                    settings, but this may affect your ability to use certain features of our platform. Third-Party Links Our platform may contain links 
                    to third-party websites or services that are not operated by Ekaayam. We are not responsible for the privacy practices or content of 
                    these third-party sites, and we encourage you to review their privacy policies before providing any personal information. Children's 
                    Privacy Ekaayam is not intended for use by children under the age of 13. We do not knowingly collect personal information from children, 
                    and if we become aware that we have inadvertently collected information from a child under 13, we will take steps to delete it as soon 
                    as possible. Changes to this Privacy Policy We reserve the right to update or modify this Privacy Policy at any time. We will notify you 
                    of any changes by posting the new Privacy Policy on our platform. Your continued use of Ekaayam after any modifications indicates your 
                    acceptance of the updated Privacy Policy. Contact Us If you have any questions or concerns about this Privacy Policy, please contact us 
                    at ekaayamtech@gmail.com. By using Ekaayam, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
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

export default PP;