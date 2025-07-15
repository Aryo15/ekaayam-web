import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { auth, db } from "../functions/firebase"; // Import Firebase auth and Firestore
import { collection, query, where, getDocs } from "firebase/firestore"; // Import Firestore functions
import '../css/styles.css';
import Navbar from '../functions/Navbar';
import Footer from '../functions/Footer';

function Tickets() {
  const [user, setUser] = useState(null);
  const [bookedTickets, setBookedTickets] = useState([]); // State to hold all booked tickets

  // Handle user authentication and fetch tickets by email
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchBookedTicketsByEmail(user.email); // Fetch tickets based on the user's email
      } else {
        setUser(null);
        setBookedTickets([]); // Reset booked tickets if user logs out
      }
    });
    return () => unsubscribe();
  }, []);

  // Function to fetch booked tickets from Firestore by the user's email
  const fetchBookedTicketsByEmail = async (email) => {
    try {
      // Query Firestore to fetch bookings for the current user's email
      const bookingsQuery = query(collection(db, "events"), where("email", "==", email));
      const querySnapshot = await getDocs(bookingsQuery);

      const ticketsData = [];
      querySnapshot.forEach((doc) => {
        ticketsData.push({ id: doc.id, ...doc.data() }); // Push each booking into an array
      });

      setBookedTickets(ticketsData); // Store booked tickets in state
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  // Initialize ScrollReveal and apply it to the elements you want to reveal
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 200,
    });

    sr.reveal('.home__data', {});
    sr.reveal('.home__card', { interval: 200 });
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
              <h1 className="home__title">
                My Tickets!
              </h1>

              {/* Show booked tickets here */}
              <div className="booked-tickets">
                {bookedTickets.length > 0 ? (
                  bookedTickets.map((ticket) => (
                    <div key={ticket.id} className="ticket-card">
                      <h3>Booking ID: {ticket.bookingId}</h3>
                      <p><strong>Event Name:</strong> {ticket.eventName}</p>
                      <p><strong>Date:</strong> {ticket.date}</p>
                      <p><strong>Venue:</strong> {ticket.venue}</p>
                      <p><strong>Total Tickets:</strong> {ticket.totalQuantity}</p>
                      <p><strong>Total Amount:</strong> {ticket.totalAmount}</p>
                      <div>
                        <strong>Ticket Categories:</strong>
                        <ul>
                          {ticket.tickets.map((t, index) => (
                            <li key={index}>{t.type}: {t.quantity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>You have no booked tickets yet.</p>
                )}
              </div>
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

export default Tickets;
