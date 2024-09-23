import React, { useState } from 'react';
import './Purchase.css';
import Visa from '../Images/Visa.png';
import Paypal from '../Images/Paypal.webp';
import Googlepay from '../Images/Googlepay.png';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Purchase() {
  const navigate = useNavigate();
  const location = useLocation();
  const packageName = location.state?.packageName || 'Selected Package'; // Default value
  const packagePrice = location.state?.packagePrice || '0.00'; // Default value

  // State for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [principalAddress, setPrincipalAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create purchase data object
    const purchaseData = {
      firstName,
      lastName,
      dateOfBirth,
      nicNumber,
      principalAddress,
      postalCode,
      email,
      packageName,
      packagePrice,
      cardNumber,
      cardHolderName,
      expirationDate,
      cvv,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/purchases/add', purchaseData);
      console.log('Purchase created successfully:', response.data);
      navigate('/packages'); // Redirect after successful purchase
    } catch (error) {
      console.error('Error creating purchase:', error);
      // Handle error (e.g., show an alert or message)
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="menu">
          <button>Home</button>
          <button>About us</button>
          <button>Feedback</button>
          <button>Sponsor</button>
        </div>
        <div className="header-icons">
          <i className="settings-icon">⚙️</i>
          <i className="profile-icon">👤</i>
        </div>
      </div>

      <div className="package-container">
        <h2 className="package-title">{packageName}</h2>
        <h3 className="package-price">Payment Amount: {packagePrice} LKR</h3>

        <form className="package-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
          <input type="text" placeholder="Nic number" value={nicNumber} onChange={(e) => setNicNumber(e.target.value)} />
          <input type="text" placeholder="Principal address" value={principalAddress} onChange={(e) => setPrincipalAddress(e.target.value)} />
          <input type="text" placeholder="Postal code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <div className="payment-icons">
            <img src={Visa} alt="Visa" />
            <img src={Paypal} alt="PayPal" />
            <img src={Googlepay} alt="GPay" />
          </div>

          <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          <input type="text" placeholder="Card holder name" value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)} />
          <input type="text" placeholder="Expiration Date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
          <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />

          <button type="submit" className="pay-button">Pay</button>
        </form>
      </div>

      <footer className="footer">
        <div className="footer-section">
          <h3>Melody Mesh.</h3>
          <p>12 Maradana, Colombo 0007</p>
          <p>melody_mesh@gmail.com</p>
          <p>077-6943586</p>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Location</p>
          <p>Careers</p>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <p>FAQ</p>
          <p>Blog</p>
          <p>News</p>
        </div>

        <div className="footer-section">
          <h3>Follow</h3>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </footer>
    </div>
  );
}

export default Purchase;
