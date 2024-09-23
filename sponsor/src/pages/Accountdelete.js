import React, { useState } from 'react';
import './Accountdelete.css';
import Profilepic from '../Images/Profilepic.jpg';
import { useNavigate } from 'react-router-dom';

const SponsorAccount = () => {
    const navigate = useNavigate();

    const Backtosponsordetails= () =>{
        navigate('/sponsordetails')
    }

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleDeleteAccount = () => {
        // Simulate account deletion logic here
        setShowSuccessMessage(true);
    };

    return (
        <div className="sponsor-container">
            <header>
                <input type="text" placeholder="Search" className="search-bar" />
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About us</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/sponsor">Sponsor</a>
                </nav>
                <div className="settings-icon"></div>
            </header>
            
            <div className="main-content">
                <h1>Well come to Melody Mesh.</h1>
                <button className="sponsor-account-btn">Sponsor's Accounts.</button>
                
                <div className="sponsor-card">
                    <div className="sponsor-header">
                        <img src={Profilepic} alt="Profile" className="profile-picture" />
                        <h2 className="sponsor-name">Tom Steewen</h2>
                    </div>
                    
                    {showSuccessMessage && (
                        <div className="success-message">
                            Account Deleted Successfully.
                        </div>
                    )}

                    <button className="delete-all-btn" onClick={handleDeleteAccount}>
                        &#128465;
                    </button>
                </div>

                <button 
                onClick={Backtosponsordetails}
                className="back-btn">Back.</button>
            </div>

            <footer>
                <div className="footer-left">
                    <h3>Melody Mesh.</h3>
                    <p>12 Maradana, Colombo 0007</p>
                    <p>melody_mesh@gmail.com</p>
                    <p>077-6943586</p>
                </div>
                <div className="footer-right">
                    <div className="company">
                        <h4>Company</h4>
                        <a href="/about">About Us</a>
                        <a href="/location">Location</a>
                        <a href="/careers">Careers</a>
                    </div>
                    <div className="resources">
                        <h4>Resources</h4>
                        <a href="/faq">FAQ</a>
                        <a href="/blog">Blog</a>
                        <a href="/news">News</a>
                    </div>
                    <div className="follow">
                        <h4>Follow</h4>
                        <a href="https://facebook.com">Facebook</a>
                        <a href="https://instagram.com">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default SponsorAccount;
