import React from 'react';
import './History.css'; // Link to your CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';


const packages = [
  { name: "Melody Lite package.", date: "12/03/2024" },
  { name: "Melody pro package.", date: "02/02/2024" },
  { name: "Melody Big package.", date: "12/01/2024" },
  { name: "Melody Lite package.", date: "19/03/2023" }
];

function App() {
  const navigate = useNavigate();

  const Packages = () =>{
    navigate('/packages');
  }
  const Chatwithus = () =>{
    navigate('/Chatwithus')
  }

  return (
    <div className="container">
      <header className="header">
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="nav-buttons">
          <button>Home</button>
          <button>About us</button>
          <button>Feedback</button>
          <button>Sponsor</button>
        </div>
        <div className="settings-icon">
          <i className="fas fa-cog"></i>
        </div>
      </header>
      <main>
        <div className="packages-container">
          <div className="tab-bar">
            <button className="tab active">History.</button>
            <button
            onClick= {Packages}
            className="tab">Packages.</button>
            <button
            onClick = {Chatwithus}
            className="tab">Chat with us.</button>
          </div>
          <div className="packages-list">
            {packages.map((pkg, index) => (
              <div className="package-item" key={index}>
                <div className="package-info">
                  <p className="package-name">{pkg.name}</p>
                  <p className="package-date">{pkg.date}</p>
                </div>
                <button className="delete-button">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-left">
          
          <p>12 Mardana, Colombo 0007</p>
          <p>melody_mesh@gmail.com</p>
          <p>077-6943586</p>
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Location</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>FAQ</li>
              <li>Blog</li>
              <li>News</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
