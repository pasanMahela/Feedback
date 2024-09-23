import React from 'react';
import './Purchase.css';
import Visa from '../Images/Visa.png';
import Paypal from '../Images/Paypal.webp';
import Googlepay from '../Images/Googlepay.png';
import { useNavigate } from 'react-router-dom';

function App() {

    const navigate = useNavigate();

    const Backtopackageview = () =>{
      navigate('/packageview');
    }

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
        <h2 className="package-title">Melody Lite package.</h2>

        <form className="package-form">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="date" placeholder="Date of birth" />
          <input type="text" placeholder="Nic number" />
          <select>
            <option>Select package</option>
            <option>Package 1</option>
            <option>Package 2</option>
          </select>
          <input type="text" placeholder="Principal address" />
          <input type="text" placeholder="Postal code" />
          <input type="email" placeholder="Email" />

          <div className="payment-icons">
            <img src={Visa} alt="Visa" />
            <img src={Paypal} alt="PayPal" />
            <img src={Googlepay} alt="GPay" />
          </div>

          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Card holder name" />
          <input type="text" placeholder="Expiration Date" />
          <input type="text" placeholder="CVV" />

          <button
          onClick={Backtopackageview}
          type="submit" className="pay-button">Pay</button>
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

export default App;