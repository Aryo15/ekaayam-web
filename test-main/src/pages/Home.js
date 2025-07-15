import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import '../css/styles.css';
import { submitToGoogleSheets } from '../functions/submitToGoogleSheets';
import Navbar from '../functions/Navbar';
import Footer from '../functions/Footer';

function Home() {
    useEffect(() => {
        // Initialize ScrollReveal and apply it to the elements you want to reveal
        const sr = ScrollReveal({
          origin: 'top',
          distance: '50px',
          duration: 1000,
          delay: 200,
        //   reset: true // Set to true if you want the animation to reset every time it enters the viewport
        });
    
        // Reveal elements with specific classes
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
            <img src={require('../assests/img/IMG3.jpg')} alt="home image" className="home__bg" />
            <div className="home__shadow"></div>

            <div className="home__container container grid">
                <div className="home__data">
                    <h3 className="home__subtitle">
                        Welcome To
                    </h3>

                    <h1 className="home__title">
                        EKAAYAM
                    </h1>

                    <p className="home__description">
                        The One Dimension in Everything
                    </p>

                    {/* <!-- <a href="events.html" className="button">
                        Events <i className="ri-arrow-right-line"></i>
                    </a> --> */}
                </div>

                <div className="home__cards grid">
                    <article className="home__card">
                        <img src={require('../assests/img/BookSmart_card_2.png')} alt="home image" className="home__card-img" />
                        {/* <!-- <h3 className="home__card-title">Event Listing</h3> --> */}
                        <div className="home__card-shadow"></div>
                    </article>

                    <article className="home__card">
                        <img src={require('../assests/img/Events_card_2.png')} alt="home image" className="home__card-img" />
                        {/* <!-- <h3 className="home__card-title">Marketing & Promotion</h3> --> */}
                        <div className="home__card-shadow"></div>
                    </article>

                    <article className="home__card">
                        <img src={require('../assests/img/Mentorship_card.png')} alt="home image" className="home__card-img" />
                        {/* <!-- <h3 className="home__card-title">SaaS (Software as a Service)</h3> --> */}
                        <div className="home__card-shadow"></div>
                    </article>

                    <article className="home__card">
                        <img src={require('../assests/img/Courses_card_2.png')} alt="home image" className="home__card-img" />
                        {/* <!-- <h3 className="home__card-title">Automation</h3> --> */}
                        <div className="home__card-shadow"></div>
                    </article>
                </div>
            </div>
         </section>

         <section className="about section" id="about">
            <div className="about__container container grid">
                <div className="about__data">
                    <h2 className="section__title">
                        EKAAYAM
                    </h2>

                    <p className="about__description">
                        At EKAAYAM, we offer tailored services to help you succeed. 
                        From mentorship and skill-building to seamless event management 
                        and custom software solutions, we're here to support your growth 
                        and simplify your journey.
                    </p>

                    <Link to="/about" className="button">
                        About Us <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>

                <div className="about__image">
                    <img src={require('../assests/img/Base-I.png')} alt="about image" className="about__img" />
                    <div className="about__shadow"></div>
                </div>
            </div>
         </section>

         <section className="ad section" id="advertisement">
            <div className="ad__container container grid">
                <div className="ad__data">
                    <h2 className="section__title">
                        Discover <br/>
                        Nearby Events
                    </h2>

                    <p className="ad__description">
                        Discover the best events happening near you. Explore local activities and make the most of your free time!
                    </p>

                    <Link to="/events" className="button">
                        Explore <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>

                <div className="ad__image LandPage-Events">
                    <img src={require('../assests/img/Events Base.png')} alt="advertisement image" className="ad__img" />
                </div>
            </div>
         </section>

         <section className="ad section" id="advertisement">
            <div className="ad__container container grid">
                <div className="ad__data">
                    <h2 className="section__title">
                        Find & Book <br/>
                        Your Favorite Spots
                    </h2>

                    <p className="ad__description">
                        Explore and book your favorite restaurants and spots with ease. 
                        Whether it's a cozy café or a trendy hotspot, find the perfect place for any occasion.
                    </p>

                    <Link to="/booksmart" className="button">
                        Book Smart <i className="ri-calendar-event-line"></i>
                    </Link>
                </div>

                <div className="ad__image LandPage-SmartBook">
                    <img src={require('../assests/img/SmartBook Base.png')} alt="advertisement image" className="ad__img" />
                </div>
            </div>
         </section>

         <section className="ad section" id="advertisement">
            <div className="ad__container container grid">
                <div className="ad__data">
                    <h2 className="section__title">
                        Improve & <br/>
                        Upgrade Your Skills
                    </h2>

                    <p className="ad__description">
                        Unlock new skills and reach new heights. Enhance your abilities and take your expertise to the next level!
                    </p>

                    <Link to="/courses" className="button">
                        Explore <i className="ri-lightbulb-line"></i>
                    </Link>
                </div>

                <div className="ad__image LandPage-Courses">
                    <img src={require('../assests/img/Courses Base.png')} alt="advertisement image" className="ad__img" />
                </div>
            </div>
         </section>

         <section className="ad section" id="advertisement">
            <div className="ad__container container grid">
                <div className="ad__data">
                    <h2 className="section__title">
                        Expert <br/>
                        Mentor Connection
                    </h2>

                    <p className="ad__description">
                        Striving for excellence? Discover the top-rated mentors, celebrated for their impact and expertise.
                    </p>

                    <Link to="/mentorships" className="button">
                        Find a Mentor <i className="ri-search-line"></i>
                    </Link>
                </div>

                <div className="ad__image LandPage-Mentor">
                    <img src={require('../assests/img/Mentosrship Base.png')} alt="advertisement image" className="ad__img" />
                </div>
            </div>
         </section>

         <section className="explore section" id="explore">
            <div className="exlore__container">
                <div className="explore__image">
                    <img src={require('../assests/img/IMG4.jpg')} alt="services image" className="explore__img" />
                    <div className="explore__shadow"></div>
                </div>
            </div>
         </section>

         <section className="popular section" id="popular">
            <h2 className="section__title">
                Host Your <br/>
                Event With Us
            </h2>

            <div className="popular__container container grid">
                <article className="popular__card">
                    <div className="popular__image">
                        <img src={require('../assests/img/IMG14.webp')} alt="popular image" className="popular__img" />
                        <div className="popular__shadow"></div>
                    </div>

                    <h2 className="popular__title">
                        Customized Solutions
                    </h2>

                    <div className="popular__advantages">
                        Our experienced team handles everything 
                        from initial planning to post-event wrap-up, 
                        ensuring a seamless experience.
                    </div>
                </article>

                <article className="popular__card">
                    <div className="popular__image">
                        <img src={require('../assests/img/Mentorship_card.png')} alt="popular image" className="popular__img" />
                        <div className="popular__shadow"></div>
                    </div>

                    <h2 className="popular__title">
                        Comprehensive Ticketing
                    </h2>

                    <div className="popular__advantages">
                        Assistance with event marketing, including 
                        social media promotion and targeted advertising 
                        to boost attendance.
                    </div>
                </article>

                <article className="popular__card">
                    <div className="popular__image">
                        <img src={require('../assests/img/Courses Base.png')} alt="popular image" className="popular__img" />
                        <div className="popular__shadow"></div>
                    </div>

                    <h2 className="popular__title">
                        Marketing and Support
                    </h2>

                    <div className="popular__advantages">
                        Dedicated event coordinators and technical support 
                        on-site to manage any issues that arise swiftly. <br/> 
                        Security services to ensure a safe and secure 
                        environment for all attendees.
                    </div>
                </article>

                <article className="popular__card">
                    <div className="popular__image">
                        <img src={require('../assests/img/IMG14.webp')} alt="popular image" className="popular__img" />
                        <div className="popular__shadow"></div>
                    </div>

                    <h2 className="popular__title">
                        Insights and Reporting
                    </h2>

                    <div className="popular__advantages">
                        Personalized event experiences tailored to 
                        reflect your brand and objectives. <br/> 
                        Thematic decor and branding options to create a 
                        unique atmosphere for your event.
                    </div>
                </article>
            </div>
         </section>
         

         <section className="join section">
            <div className="join__container container grid">
                <div className="join__data">
                    <h2 className="section__title">
                        Your Journey <br/>
                        Starts Here
                    </h2>

                    <p className="join__description">
                        Get connected with us by letting us know your query.
                    </p>

                    <form onSubmit={handleSubmit} className="join__form">
                        <input type="text" id="Email" placeholder="Enter your email" className="join__input" required />

                        <button type="submit" className="join__button button" id="Submit">
                            Subscribe Our Newsletter <i className="ri-arrow-right-line"></i>
                        </button>
                    </form>
                </div>

                <div className="join__image">
                    <img src={require('../assests/img/IMG6.jpg')} alt="" className="join__img"/>
                    <div className="join__shadow"></div>
                </div>
            </div>
         </section>
      </main>

      <Footer />

      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
   </div>
  );
}

export default Home;