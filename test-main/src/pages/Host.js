import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import '../css/styles.css';
import { submitToGoogleSheets } from '../functions/submitToGoogleSheets';
import { connectToGoogleSheets } from '../functions/ConnectToGoogleSheets';
import Navbar from '../functions/Navbar';
import Footer from '../functions/Footer';
import Modal from '../functions/ConnectModal';
import LoginModal from '../functions/LoginModal';
import { auth } from '../functions/firebase';

function Host() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // State for login modal
  const [user, setUser] = useState(null); // State to track authenticated user

  // Handle user authentication
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const openConnectModal = () => {
    if (user) {
      setIsModalOpen(true);
    } else {
      setShowLoginModal(true);
    }
  };

  const closeConnectModal = () => setIsModalOpen(false);
  const closeLoginModal = () => setShowLoginModal(false);

  const handleModalSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    connectToGoogleSheets();
    closeConnectModal();
  };

  // State to manage which accordion is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle accordion open/close
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Initialize ScrollReveal and apply it to the elements you want to reveal
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 200,
      // reset: true // Set to true if you want the animation to reset every time it enters the viewport
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

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    submitToGoogleSheets();
  };

  //features
  const features = [
    {
      question: 'Your Choice for Ticketing',
      answer: "Our unique selling point is that we are more than just a typical ticketing website; we are your event's partner, helping you with everything from poster design to securing sponsors. We'll carry it out.",
      image: require('../assests/img/IMG2.jpg'),
    },
    {
      question: 'Tailored App for Event Hosts',
      answer: "Transform event management with Ekaayam's exclusive organizer app. Effortlessly check in guests and access reserved ticket lists for complete accuracy. With real-time updates and comprehensive insights, Ekaayam serves as your command center for smooth and successful events.",
      image: require('../assests/img/IMG2.jpg'),
    },
    {
      question: 'Customer Insights Data',
      answer: "Use Ekaayam's Customer Analytics Data function to uncover insightful information. Gain a comprehensive grasp of the tastes and habits of the people attending your event. Make use of this vital information to improve engagement, streamline your tactics, and create events that genuinely engage your audience.",
      image: require('../assests/img/IMG2.jpg'),
    },
    {
      question: 'Holistic Marketing & Branding',
      answer: "Ekaayam's comprehensive marketing strategy can help you increase the visibility of your event. We offer full 360-degree marketing support, from creating visually striking event posters to strategically promoting on Facebook, Instagram, WhatsApp, and email.",
      image: require('../assests/img/IMG2.jpg'),
    },
    {
      question: '24/7 Call Support',
      answer: "Get dependable assistance with Ekaayam's round-the-clock on-call service. Our committed support staff is available via phone if you're a customer with enquiries or an organiser in need of direction. You can rely on us 24/7 to make sure that everyone attending the event has a seamless and worry-free experience.",
      image: require('../assests/img/IMG2.jpg'),
    },
    {
      question: 'Event day on-site representative',
      answer: "Use Ekaayam's on-site representative service to guarantee a flawless event day. Our committed agents are available to help and troubleshoot as necessary, making sure everything goes without a hitch so you can concentrate on giving your guests experiences they won't soon forget.",
      image: require('../assests/img/IMG2.jpg'),
    },
    {
      question: 'Quick Settlement',
      answer: 'Request settlements whenever you need them for unmatched flexibility. We handle settlements in 4-5 days, so you can easily and on your own terms take charge of the money for your event, guaranteeing a smooth and effective planning process.',
      image: require('../assests/img/IMG2.jpg'),
    },
    {
      question: 'Relationship Strategist',
      answer: 'Use the Dedicated Relationship Manager at Ekaayam to enhance your event planning experience. Our knowledgeable manager becomes your important ally, providing individualised support and guaranteeing a stress-free experience for organisers from flawless setup to event day problems.',
      image: require('../assests/img/IMG3.jpg'),
    },
  ];

  // Accordion data
  const faqs = [
    {
      question: 'How can I list my event on Ekaayam?',
      answer: 'Listing your event on Ekaayam is easy! Simply click on "List your event," and follow the prompts to provide details about your event, including date, venue, and ticket types or just call us on 9831418299 and let us do all the work for you.',
    },
    {
      question: 'Why is Ekaayam the best choice for your event ticketing platform?',
      answer: 'What sets Ekaayam apart from Event Organizers is our commitment to your success. With Ekaayam, you’ll have a dedicated relationship manager by your side, ensuring every aspect of your event is meticulously handled.',
    },
    {
      question: 'What are the benefits of using Ekaayam for your events?',
      answer: 'Ekaayam has a range of features beyond ticket booking, including event promotion tools, real-time analytics, on-site management, customizable ticket options, secure payments, and 24/7 customer support.',
    },
    {
      question: 'Can I customize ticket types and pricing for my event?',
      answer: 'Yes, Ekaayam provides organizers with the flexibility to create custom ticket types and set pricing based on their event’s requirements. You can easily manage this through the Organizer Dashboard.',
    },
    {
      question: 'How do I receive payments for ticket sales?',
      answer: 'Payments for ticket sales are securely processed through Ekaayam, and the funds are transferred to your designated account. As stated you can get your settlements within 4 working days.',
    },
    {
      question: 'Can I track attendee information and sales analytics?',
      answer: 'Absolutely! Ekaayam provides robust analytics tools on the Organizer Dashboard, allowing you to track ticket sales, attendee demographics, and other valuable insights to enhance your event planning.',
    },
    {
      question: 'How can I connect with Ekaayam\'s customer support for assistance?',
      answer: 'Ekaayam offers 24/7 customer support for event organizers. You can reach out through the contact Us, and our dedicated support team will promptly assist you with any inquiries or issues.',
    },
    {
      question: 'Is Ekaayam available for international events outside of India?',
      answer: 'Currently No, Ekaayam is actively expanding its reach to other countries. If you’re planning an international event, contact our support team to explore the possibilities and discuss how Ekaayam can support your event’s success.',
    },
  ];

  return (
    <div className="body">
      <Navbar />

      <main className="main">
        <section className="home section" id="home">
          <img src={require('../assests/img/IMG3.jpg')} alt="home" className="home__bg" />
          <div className="home__shadow"></div>

          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__title">
                Go live <br /> in a flash!
              </h1>
              <p className="home__description">
                Effortlessly go live with your event in a go!
              </p>
              <button onClick={openConnectModal} className="button">
                List Your Event <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about__container container grid">
            <div className="about__data">
              <h2 className="section__title">
                Launch <br /> Your Event with Us
              </h2>
              <p className="about__description">
                Elevate your event experience with our seamless hosting services, tailored to meet your unique needs. Let us help you plan, launch, and manage your event effortlessly.
              </p>
              <button onClick={openConnectModal} className="button">
                List Your Event <i className="ri-arrow-right-line"></i>
              </button>
            </div>

            <div className="about__image">
              <img src={require('../assests/img/Base-I.png')} alt="about" className="about__img" />
              <div className="about__shadow"></div>
            </div>
          </div>
        </section>

        <Modal isOpen={isModalOpen} onClose={closeConnectModal}>
        <h2>List Your Event</h2><br/>
        <form onSubmit={handleModalSubmit} className="join__form">
          <input type="text" id="Name" placeholder="Name" required className="join__input" />
          <input type="text" id="Company_Name" placeholder="Company Name" required className="join__input" />
          <input type="email" id="Email" placeholder="Email" required className="join__input" />
          <input type="phone" id="Phone" placeholder="Phone" required className="join__input" />
          <textarea placeholder="Your Message" id="Purpose" required className="join__input"></textarea>
          <button type="submit" className="join__button button">Submit</button>
        </form>
      </Modal>

      {/* Login Modal */}
      {showLoginModal && <LoginModal show={showLoginModal} handleClose={closeLoginModal} />}

        <section className="popular section" id="popular">
          <h2 className="section__title">
            To connect with <br /> your target audience
          </h2>
          <p className="popular__description">
            Uncover the benefits of choosing EKAAYAM as your ticketing partner
          </p>

          <div className="popular__container container grid">
            {features.map((feature, index) => (
              <article key={index} className="popular__card">
                <div className="popular__image">
                  <img src={feature.image} alt={`Feature ${index}`} className="popular__img" />
                  <div className="popular__shadow"></div>
                </div>
                <h2 className="popular__title">
                  {feature.question}
                </h2>
                <div className="popular__advantages">
                  {feature.answer}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="popular section">
          <h2 className="section__title">Frequently Asked Questions</h2>
          <p className="popular__description">
            Greetings and welcome to our FAQs corner!<br />
            Here, we've compiled answers to some of the most common questions. <br />
            If you don't find the information you're looking for, feel free to contact us for further assistance.
          </p>

          <div className="FAQ">
          {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  className={`accordion ${openIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                </button>
                <div className={`pane1 ${openIndex === index ? 'show' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="join section">
          <div className="join__container container grid">
            <div className="join__data">
              <h2 className="section__title">
                Your Journey <br />
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
              <img src={require('../assests/img/IMG6.jpg')} alt="" className="join__img" />
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

export default Host;
