import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import '../css/styles.css';
import Navbar from '../functions/Navbar';
import Footer from '../functions/Footer';

import nexusImage from '../assests/posters/nexus.png';
import esummitImage from '../assests/posters/Esummit.png';
import soacupImage from '../assests/posters/soacup.png';

// Mock data or fetch from an API
const mockEvents = [
  {
    id: 1,
    title: 'NEXUS',
    date: 'Coming soon',
    location: 'ITER, SOA',
    image: nexusImage,
    link: 'https://forms.gle/EPFTLCDxfVHU6GVS9',
    status: 'yellow',
  },
  {
    id: 2,
    title: 'SOA E-SUMMIT',
    date: '6th to 7th April, 2024',
    location: 'ITER, SOA',
    image: esummitImage,
    link: 'EVENTS/e-summit/soa-e-summit-2024.html',
    status: 'red',
  },
  {
    id: 3,
    title: 'SOA CUP',
    date: '5th March, 2024',
    location: 'Campus-2, SOA',
    image: soacupImage,
    link: '#',
    status: 'red',
  },
];

function BookSmart() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from an API or set mock data
    const fetchEvents = async () => {
      // Example fetch, replace URL with your API endpoint if needed
      // const response = await fetch('https://api.example.com/events');
      // const data = await response.json();
      // setEvents(data);

      // Using mock data for this example
      setEvents(mockEvents);
    };

    fetchEvents();

    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 200,
    });

    // Reveal elements
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
          <img src={require('../assests/img/IMG3.jpg')} alt="home" className="home__bg" />
          <div className="home__shadow"></div>

          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__title">BookSmart</h1>
              <p className="home__description">Book Your Favourite Places</p>
            </div>
          </div>

          {/* <div className="popular__container container grid">
            {events.length === 0 ? (
              <p>No events available.</p>
            ) : (
              events.map((event) => (
                <a
                  href={event.link}
                  className="poster__card popular__anchor"
                  key={event.id}
                >
                  <article className="poster__card">
                    <div className="popular__image">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="popular__img"
                      />
                      <div className="popular__shadow"></div>
                    </div>

                    <h2 className="popular__title" style={{ textAlign: 'left', paddingLeft: '1rem' }}>
                      {event.title}
                    </h2>

                    <div
                      className="popular__advantages aboutUs__description"
                      style={{ color: event.status }}
                    >
                      <i className="ri-calendar-event-fill"></i>
                      {event.date}
                    </div>
                    <div className="popular__advantages aboutUs__description">
                      <i className="ri-map-pin-line"></i>
                      {event.location}
                    </div>
                  </article>
                </a>
              ))
            )}
          </div> */}
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
                    <img src={require('../assests/img/SmartBook Base.png')} alt="about image" className="about__img" />
                    <div className="about__shadow"></div>
                </div>
            </div>
         </section>

        <div style={{ marginBottom: '20%' }}></div>
      </main>

      <Footer />

      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </div>
  );
}

export default BookSmart;