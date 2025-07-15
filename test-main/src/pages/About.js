import React, { useEffect } from 'react';
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
            <div className="about__container container grid">
                <div className="about__data">
                    <h2 className="section__title">
                        What is <br/>
                        EKAAYAM?
                    </h2>

                    <p className="about__description">
                        At EKAAYAM, we offer tailored services to help individuals and businesses thrive. 
                        From mentorship and skill-building courses to industry-specific events, we provide 
                        the tools for success. Our platform revolutionizes event management, allowing users 
                        to effortlessly list events and sell tickets online. We automate event administration 
                        and ticket verification, ensuring a seamless experience for organizers and guests alike. 
                        Additionally, our marketing services and SaaS solutions are designed to boost brand visibility 
                        and drive growth for small and medium-sized businesses. Join us on your journey to success.
                    </p>

                </div>

                <div className="about__image">
                    <img src={require('../assests/img/ekaayam_new.png')} alt="about image" className="about__img"/>
                    <div className="about__shadow"></div>
                </div>
            </div>
         </section>

         <section className="about section" id="about">
            <div className="about__container container grid">
                <div className="about__data">
                    <h2 className="section__title">
                        What we <br/>
                        Provide?
                    </h2>

                    <p className="about__description">
                        We specialize in turning your vision into reality 
                        through meticulously planned and flawlessly 
                        executed events. Whether you're hosting a corporate 
                        conference, a lavish wedding, or a casual social 
                        gathering, our dedicated team is here to provide 
                        exceptional service and unparalleled attention to 
                        detail. Here are the comprehensive services we offer 
                        to ensure your event is a resounding success: <br/><br/>
                        Event Listing<br/>
                        Event Hosting<br/>
                        Event Management<br/>
                        Marketing & Promotion <br/>
                        SaaS (Software as a Service)<br/>
                        Sponsorship Availability<br/>
                        Automation<br/>
                    </p>

                </div>

                <div className="about__image aboutUs_image">
                    <img src={require('../assests/img/Base-I.png')} alt="about image" className="about__img"/>
                    <div className="about__shadow"></div>
                </div>
            </div>
         </section>

         <section className="popular section" id="popular">
            <h2 className="section__title">
                Get To <br/>
                Know Us
            </h2>

            <div className="popular__container container grid aboutUs__grid">
                <article className="popular__card">
                    <div className="popular__image">
                        <img src={require('../assests/Company_img/Balaji.jpg')} alt="popular image" className="popular__img"/>
                        <div className="popular__shadow"></div>
                    </div>

                    <h2 className="popular__title">
                        Balaji Aryan Singh
                    </h2>

                    <div className="popular__advantages aboutUs__description">
                        Co-Founder <br/>Developer
                    </div>
                </article>

                <article className="popular__card">
                    <div className="popular__image">
                        <img src={require('../assests/Company_img/Anirban_Bose.jpg')} alt="popular image" className="popular__img"/>
                        <div className="popular__shadow"></div>
                    </div>

                    <h2 className="popular__title">
                        Anirban Bose
                    </h2>

                    <div className="popular__advantages aboutUs__description">
                        Co-Founder <br/>Developer
                    </div>
                </article>

                <article className="popular__card">
                    <div className="popular__image">
                        <img src={require('../assests/Company_img/Rajat_Patra.jpg')} alt="popular image" className="popular__img"/>
                        <div className="popular__shadow"></div>
                    </div>

                    <h2 className="popular__title">
                        Rajat Patra
                    </h2>

                    <div className="popular__advantages aboutUs__description">
                        UI/UX Designer
                    </div>
                </article>

            </div>
         </section>

         <section className="popular section" id="popular">
            <h2 className="section__title">
                Acknowledged By
            </h2>

            <div className="popular__container container grid aboutUs__grid">
                <article className="popular__card">
                    <div className="popular__image">
                        <img src={require('../assests/Company_img/PK.jpg')} alt="popular image" className="popular__img"/>
                        <div className="popular__shadow"></div>
                    </div>

                    <h2 className="popular__title">
                        Dr. Pradipta Kumar Nanda
                    </h2>

                    <div className="popular__advantages aboutUs__description">
                        Vice Chancellor (SOA)
                    </div>
                </article>

                <article className="popular__card">
                    <div className="popular__image">
                        <img src={require('../assests/Company_img/Manoj_Kumar_Mallik.jpg')} alt="popular image" className="popular__img"/>
                        <div className="popular__shadow"></div>
                    </div>

                    <h2 className="popular__title">
                        Prof. (Dr) Manas Kumar Mallik
                    </h2>

                    <div className="popular__advantages aboutUs__description">
                        Director, ITER (SOA)
                    </div>
                </article>

                <article className="popular__card">
                    <div className="popular__image">
                        <img src={require('../assests/Company_img/Renu_Sharma.jpg')} alt="popular image" className="popular__img"/>
                        <div className="popular__shadow"></div>
                    </div>

                    <h2 className="popular__title">
                        Dr. Renu Sharma
                    </h2>

                    <div className="popular__advantages aboutUs__description">
                        Addl. Dean Student Affairs (SOA)
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