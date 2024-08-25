import React from 'react';
import './Accountviewe.css';
import Profilepic from '../Images/Profilepic.jpg';

const SponsorAccount = () => {
    const purchaseHistory = [
        { package: "Melody Lite package", date: "12/08/2024" },
        { package: "Melody Pro package", date: "03/08/2024" },
        { package: "Melody Big package", date: "12/04/2024" },
    ];

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
                        <button className="edit-btn">&#9998;</button>
                    </div>
                    <h3>Purchased History.</h3>
                    <ul className="purchase-list">
                        {purchaseHistory.map((item, index) => (
                            <li key={index}>
                                <span>{item.package}</span>
                                <span>{item.date}</span>
                                <button className="delete-btn">&#128465;</button>
                            </li>
                        ))}
                    </ul>
                    <button className="delete-all-btn">&#128465;</button>
                </div>

                <button className="back-btn">Back.</button>
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
