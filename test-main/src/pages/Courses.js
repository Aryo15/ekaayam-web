import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../css/styles.css';
import { submitToGoogleSheets } from '../functions/submitToGoogleSheets';
import Navbar from '../functions/Navbar';
import Footer from '../functions/Footer';

function Courses() {
    useEffect(() => {
        // Initialize ScrollReveal and apply it to the elements you want to reveal
        const sr = ScrollReveal({
          origin: 'top', // You can set origin, distance, duration, delay, etc.
          distance: '50px',
          duration: 1000,
          delay: 200,
        //   reset: true // Set to true if you want the animation to reset every time it enters the viewport
        });
    
        // Reveal elements with specific classNamees
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

            <div className="home__container container grid tab_page">
                <div className="about__container container grid tab_page">
                    <div className="about__data">
                        <h2 className="section__title">
                            NextStep Key
                        </h2>

                        <p className="about__description">
                            Book a session with top mentors from diverse fields and collaborate to accelerate your career growth!
                        </p>

                        <a href="events.html" className="button">
                            Explore <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>
    
                    <div className="about__image">
                        <img src={require('../assests/img/Courses Base.png')} alt="about image" class="about__img"/>
                    </div>
                </div>
                
            </div>
         </section>

         <section className="about section" id="about">
            <div className="about__container container grid">
                <div className="about__data">
                    <h2 className="section__title">
                        Coming Soon...
                    </h2>

                    <a href="events.html" className="button">
                        Explore <i className="ri-arrow-right-line"></i>
                    </a>
                </div>

                <div className="about__image">
                    <img src={require('../assests/img/Courses Base.png')} alt="about image" className="about__img" />
                    <div className="about__shadow"></div>
                </div>
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

export default Courses;