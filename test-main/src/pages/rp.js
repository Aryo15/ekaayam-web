import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../css/styles.css';
import { submitToGoogleSheets } from '../functions/submitToGoogleSheets';
import Navbar from '../functions/Navbar';
import Footer from '../functions/Footer';

function RP() {
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
                        Refund Policy
                    </h2>

                    <p className="about__description">
                    Last Updated: 3 /11/2024  6:30 p.m. <br />
                    Introduction<br/>
                    Welcome to Ekaayam, your go-to platform for seamless event ticketing and management. We understand the importance of providing 
                    clarity and transparency to our valued customers, which is why we have established a straightforward and fair refund policy. 
                    At Ekaayam, we strive to offer a hassle-free ticketing experience for both event organizers and attendees. Our platform facilitates 
                    secure online ticket purchases, ensuring smooth transactions and efficient event management. However, it's essential to note that all 
                    ticket sales made through Ekaayam are final and non-refundable.Our no refund policy is in place to protect the interests of event 
                    organizers and maintain the integrity of our ticketing platform. Once a ticket is purchased, it is considered a commitment to attend 
                    the specified event, and refunds will not be issued for any reason, including but not limited to: <br/>
                    1. Changes in schedule or event details: While we make every effort to ensure accurate event information, event organizers may 
                    occasionally need to make changes to the schedule, venue, or other details. These changes are beyond our control and do not 
                    warrant a refund. <br/>
                    2. Personal reasons or unforeseen circumstances: We understand that unforeseen circumstances may arise that prevent attendees 
                    from attending an event. However, our no refund policy applies regardless of the reason for cancellation, including personal 
                    emergencies, travel disruptions, or other unexpected events. <br/>
                    3. Dissatisfaction with the event: We work closely with event organizers to ensure high-quality events, but individual preferences 
                    and experiences may vary. Refunds will not be issued based on attendee dissatisfaction with the event content, presentation, or 
                    overall experience. While we recognize that unforeseen circumstances may arise, our commitment to event organizers and the integrity 
                    of our platform remains steadfast. We encourage attendees to carefully review event details, including date, time, location, and any 
                    specific terms and conditions, before completing their ticket purchase. <br/> 
                    In the rare event of a cancellation or postponement initiated by the event organizer, Ekaayam will work closely with the organizer to communicate updates to attendees and facilitate any 
                    necessary refunds or exchanges. However, such situations will be handled on a case-by-case basis in accordance with the organizer's 
                    policies and applicable laws. We appreciate your understanding and cooperation in adhering to our no refund policy. <br/> 
                    If you have any questions or concerns regarding our policy or your ticket purchase, please don't hesitate to contact us. <br/> 
                    Thank you for choosing Ekaayam for your event ticketing needs. We look forward to providing you with a seamless and enjoyable 
                    ticketing experience.<br/>
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

export default RP;