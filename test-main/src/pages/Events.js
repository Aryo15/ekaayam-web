// Events.js
import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import '../css/styles.css';
import Navbar from '../functions/Navbar';
import Footer from '../functions/Footer';
import EventModal from '../functions/EventModal';

import popziilaaImage from '../assests/posters/popziilaa.png';
import esummitImage from '../assests/posters/Esummit.png';
import soacupImage from '../assests/posters/soacup.png';

const mockEvents = [
  {
    id: 1,
    title: 'POPZIILAA',
    date: 'Coming soon',
    location: 'Dreamcity, Bhubaneswar',
    time: '10:00 AM - 5:00 PM',
    bookingsLive: false,
    image: popziilaaImage,
    link: 'https://forms.gle/EPFTLCDxfVHU6GVS9',
    status: 'yellow',
    features: ['Workshops', 'Networking', 'Competitions'],
    highlights: ['Special Guest Speaker', 'Live Music Performance'],
    tickets: [
      { type: 'Standard', price: '₹50', facilities: ['Access to all sessions'] },
      { type: 'VIP', price: '₹100', facilities: ['Front-row seating', 'Meet and greet with speakers'] },
      { type: 'Premium', price: '₹200', facilities: ['Backstage pass', 'Exclusive networking opportunities'] }
    ]
  },
  {
    id: 2,
    title: 'SOA E-SUMMIT',
    date: '6th to 7th April, 2024',
    location: 'ITER, SOA',
    time: '9:00 AM - 6:00 PM',
    bookingsLive: true,
    image: esummitImage,
    link: '#',
    status: 'red',
    features: ['Startup Expo', 'Keynote Sessions', 'Pitching Event'],
    highlights: ['Investor Meetups', 'Panel Discussions'],
    tickets: [
      { type: 'Early Bird', price: '₹30', facilities: ['Access to startup sessions', 'Free event swag'] },
      { type: 'Standard', price: '₹50', facilities: ['Access to all sessions'] },
      { type: 'VIP', price: '₹100', facilities: ['Private networking sessions', 'Lunch included'] },
      { type: 'Premium', price: '₹150', facilities: ['Full event access', 'Special investor meetups'] }
    ]
  },
  {
    id: 3,
    title: 'SOA CUP',
    date: '5th March, 2024',
    location: 'Campus-2, SOA',
    time: '8:00 AM - 4:00 PM',
    bookingsLive: false,
    image: soacupImage,
    link: '#',
    status: 'red',
    features: ['Football Tournament', 'Prize Distribution'],
    highlights: ['Final Match', 'Award Ceremony'],
    tickets: [
      { type: 'General Admission', price: '₹10', facilities: ['General access'] },
      { type: 'VIP', price: '₹30', facilities: ['Front row seats', 'Exclusive event merch'] }
    ]
  }
];

function Events() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setEvents(mockEvents);
    };

    fetchEvents();

    const sr = ScrollReveal({
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 200,
    });

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
              <h1 className="home__title">EVENTS</h1>
              <p className="home__description">Book Your Tickets Now!</p>
            </div>
          </div>

          <div className="popular__container container grid">
            {events.length === 0 ? (
              <p>No events available.</p>
            ) : (
              events.map((event) => (
                <a
                  href="#"
                  className="poster__card popular__anchor"
                  key={event.id}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedEvent(event);
                  }}
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
          </div>
        </section>

        <div style={{ marginBottom: '20%' }}></div>
      </main>

      <Footer />

      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

export default Events;
