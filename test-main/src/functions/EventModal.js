// src/components/EventModal.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { auth, db } from "../functions/firebase"; // Import Firebase auth and Firestore
import { setDoc, doc, getDoc, updateDoc, increment } from "firebase/firestore"; // Firestore functions
import { nanoid } from 'nanoid'; // For generating unique booking IDs
import LoginModal from './LoginModal'; // Import LoginModal component
import '../css/styles.css'; // Import the CSS styles

const EventModal = ({ event, onClose }) => {
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [user, setUser] = useState(null); // Track authenticated user
  const [showLoginModal, setShowLoginModal] = useState(false); // Control LoginModal visibility
  const [showSuccessBox, setShowSuccessBox] = useState(false); // Control Success Box visibility
  const [isLoading, setIsLoading] = useState(false); // Control Loading Indicator

  // Store booking details for the success box
  const [bookingDetails, setBookingDetails] = useState({
    bookingId: '',
    paymentId: '',
    customerName: '',
    email: '',
    tickets: [],
    totalQuantity: 0,
    totalAmount: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Handle user authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // If no event data is passed, do not render the modal
  if (!event) return null;

  // Handle quantity changes for tickets
  const handleQuantityChange = (ticketType, value) => {
    setSelectedTickets((prev) => {
      const existingTicket = prev.find((t) => t.type === ticketType);
      if (existingTicket) {
        return prev.map((t) =>
          t.type === ticketType ? { ...t, quantity: value } : t
        );
      } else {
        return [...prev, { type: ticketType, quantity: value }];
      }
    });
  };

  // Calculate total amount based on selected tickets
  const calculateTotal = () => {
    return selectedTickets
      .reduce((total, ticket) => {
        const ticketPrice = event.tickets.find((t) => t.type === ticket.type).price.slice(1); // Remove ₹ symbol
        return total + parseFloat(ticketPrice) * ticket.quantity;
      }, 0)
      .toFixed(2);
  };

  // Calculate total quantity of tickets
  const calculateTotalQuantity = () => {
    return selectedTickets.reduce((total, ticket) => total + ticket.quantity, 0);
  };

  // Store booking details in Firestore after successful payment
  const storeBookingDetails = async (paymentResponse) => {
    const totalAmount = calculateTotal();
    const totalQuantity = calculateTotalQuantity();
    const bookingId = nanoid(8); // Generate a unique booking ID

    try {
      setIsLoading(true); // Show loading indicator

      // Reference to the booking document
      const bookingRef = doc(db, `${event.title}`, `${bookingId}`);

      // Booking data to store
      const bookingData = {
        bookingId,
        userId: user.uid,
        customer_Name: user.displayName,
        email: user.email,
        tickets: selectedTickets,
        totalAmount: `₹${totalAmount}`,
        totalQuantity,
        bookedAt: new Date().toISOString(),
        paymentId: paymentResponse.razorpay_payment_id, // Razorpay Payment ID
      };

      // Store booking details in Firestore
      await setDoc(bookingRef, bookingData);

      // Reference to the total ticket count document
      const totalTicketCountRef = doc(db, `${event.title}`, 'total_ticket_count');
      const totalTicketCountDoc = await getDoc(totalTicketCountRef);

      if (totalTicketCountDoc.exists()) {
        // Increment totalQuantity if document exists
        await updateDoc(totalTicketCountRef, {
          totalQuantity: increment(totalQuantity),
        });
        console.log(`Updated total ticket count by ${totalQuantity}`);
      } else {
        // Create the document if it doesn't exist
        await setDoc(totalTicketCountRef, {
          totalQuantity,
        });
        console.log(`Created total ticket count with quantity ${totalQuantity}`);
      }

      // Update bookingDetails state for the success box
      setBookingDetails({
        bookingId,
        paymentId: paymentResponse.razorpay_payment_id,
        customerName: user.displayName,
        email: user.email,
        tickets: selectedTickets,
        totalQuantity,
        totalAmount: `₹${totalAmount}`,
      });

      // Hide ticket form and show success message
      setShowTicketForm(false);
      setShowSuccessBox(true);
    } catch (error) {
      console.error("Error saving booking details:", error);
      alert("Failed to book tickets. Please try again.");
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  // Handle purchase ticket button click
  const handlePurchaseTicket = () => {
    if (user) {
      // If user is logged in, show the ticket form
      setShowTicketForm(true);
    } else {
      // If not logged in, show login modal
      setShowLoginModal(true);
    }
  };

  // Handle "Pay Now" button click
  const handlePayNow = () => {
    const totalAmount = calculateTotal() * 100; // Convert to paise

    const options = {
      key: "rzp_test_wK5QOJ5Vlrjy98", // Replace with your Razorpay Key ID
      amount: totalAmount, // Amount in paise
      currency: "INR",
      name: "EKAAYAM",
      description: "Event Ticket Purchase",
      handler: async (response) => {
        // Store booking details after payment success
        await storeBookingDetails(response);
      },
      prefill: {
        name: user.displayName,
        email: user.email,
      },
      theme: {
        color: "#08203E",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <div className="event-modal-overlay" onClick={onClose}>
        <div className="event-modal-content" onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <span className="close" onClick={onClose} aria-label="Close Modal">
            &times;
          </span>

          {/* Loading Indicator */}
          {isLoading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Processing your booking...</p>
            </div>
          )}

          {/* Event Details and Purchase Button */}
          {!showTicketForm && !showSuccessBox && !isLoading && (
            <>
              {/* Event Details Section */}
              <div className="event-modal-scrollable-content">
                <img src={event.image} alt={event.title} className="event-modal-image" />
                <h2>{event.title}</h2>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Venue:</strong> {event.location}</p>
                <p><strong>Time:</strong> {event.time}</p>

                <p><strong>Highlights:</strong></p>
                <ul className="points">
                  {event.highlights && event.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>

                <p><strong>Features:</strong></p>
                <ul className="points">
                  {event.features && event.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="event-modal-buttons">
                <button onClick={() => window.open(event.link, '_blank')}>View Details</button>
                {/* Conditionally render the 'Purchase Ticket' button based on bookingsLive */}
                {event.bookingsLive && (
                  <button onClick={handlePurchaseTicket}>Purchase Ticket</button>
                )}
              </div>
            </>
          )}

          {/* Ticket Purchase Form */}
          {showTicketForm && !isLoading && (
            <>
              <h2>{event.title} - Purchase Ticket</h2>
              <div className="ticket-options">
                {event.tickets &&
                  event.tickets.map((ticket, index) => (
                    <div key={index} className="ticket-option">
                      <h3>{ticket.type}</h3>
                      <p><strong>Price: </strong>{ticket.price}</p>
                      <p><strong>Facilities:</strong></p>
                      <ul className="points">
                        {ticket.facilities.map((facility, i) => (
                          <li key={i}>{facility}</li>
                        ))}
                      </ul>
                      <div className="quantity-container">
                        <button
                          className="quantity"
                          onClick={() =>
                            handleQuantityChange(
                              ticket.type,
                              Math.max(0, (selectedTickets.find(t => t.type === ticket.type)?.quantity || 0) - 1)
                            )
                          }
                        >
                          -
                        </button>
                        <span>{(selectedTickets.find(t => t.type === ticket.type)?.quantity || 0)}</span>
                        <button
                          className="quantity"
                          onClick={() =>
                            handleQuantityChange(
                              ticket.type,
                              (selectedTickets.find(t => t.type === ticket.type)?.quantity || 0) + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="ticket-total">
                <h3>Total Price: ₹{calculateTotal()}</h3>
                <button className="pay-now-button" onClick={handlePayNow}>
                  Pay Now
                </button>
              </div>
            </>
          )}

          {/* Success Box */}
          {showSuccessBox && !isLoading && (
            <div className="success-box">
              <h2>Payment Successful!</h2>
              <p>Your tickets have been booked successfully.</p>
              <div className="booking-details">
                <p><strong>Customer Name:</strong> {bookingDetails.customerName}</p>
                <p><strong>Email:</strong> {bookingDetails.email}</p>
                <p><strong>Booking ID:</strong> {bookingDetails.bookingId}</p>
                <p><strong>Payment ID:</strong> {bookingDetails.paymentId}</p>
                <p><strong>Total Tickets:</strong> {bookingDetails.totalQuantity}</p>
                <div>
                  <strong>Ticket Categories:</strong>
                  <ul>
                    {bookingDetails.tickets.map((ticket, index) => (
                      <li key={index}>{ticket.type}: {ticket.quantity}</li>
                    ))}
                  </ul>
                </div>
                <p><strong>Total Amount:</strong> {bookingDetails.totalAmount}</p>
              </div><br/>
              <p>Please! take a screenshot </p>
              <p>you will receive your tickets in your email</p> <br/>
              <button className='success-button' onClick={() => navigate('/')}>Go To Home</button>
            </div>
          )}
        </div>
      </div>

      {/* Render Login Modal */}
      {showLoginModal && <LoginModal show={showLoginModal} handleClose={() => setShowLoginModal(false)} />}
    </>
  );
};

export default EventModal;
