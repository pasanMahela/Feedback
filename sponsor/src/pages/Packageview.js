import React from 'react';
import './Packageview.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <input className="search-bar" type="text" placeholder="Search" />
        <nav className="nav-links">
          <button>Home</button>
          <button>About us</button>
          <button>Feedback</button>
          <button>Sponsor</button>
          <button className="settings-icon">⚙️</button>
          <button className="profile-icon">🔍</button>
        </nav>
      </header>

      <main className="content">
        <div className="packages-header">
          <button className="active">Packages.</button>
          <button>History.</button>
          <button disabled>Chat with us.</button>
        </div>

        <div className="package-details">
          <h2>Melody Lite package.</h2>
          <h3>50,000 LKR.</h3>
          <ul className="benefits-list">
            <li>🔴 Benefits.</li>
            <li>Voice and visual advertisements</li>
            <li>4 Melody Mesh main guest Tickets</li>
            <li>Melody Mesh sponsorship</li>
            <li>5 Ads</li>
          </ul>
          <button className="purchase-button">Purchase ›</button>
        </div>

        <button className="previous-button">‹‹ Previous.</button>
      </main>

      <footer className="footer">
        <div className="company-info">
          <h3>Melody Mesh.</h3>
          <p>12 Mardana, Colombo 0007</p>
          <p>melody_mesh@gmail.com</p>
          <p>077-6943586</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Location</p>
            <p>Careers</p>
          </div>
          <div>
            <h4>Resources</h4>
            <p>FAQ</p>
            <p>Blog</p>
            <p>News</p>
          </div>
          <div>
            <h4>Follow</h4>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;