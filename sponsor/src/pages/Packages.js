import React, { useState, useEffect } from 'react';
import './Packages.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/packages/list');
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, []);

  const History = () => {
    navigate('/history');
  };

  const Chatwithus = () => {
    navigate('/Chatwithus');
  };

  const Continue = (pkgId) => {
    navigate(`/packageview/${pkgId}`);
  };

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
          <button onClick={History}>History.</button>
          <button onClick={Chatwithus}>Chat with us.</button>
        </div>
        <div className="packages">
          {packages.map(pkg => (
            <div className="package-card" key={pkg._id}>
              <h2>{pkg.name}</h2>
              <h3>{pkg.title}</h3>
              <p>{pkg.price} LKR.</p>
              <button onClick={() => Continue(pkg._id)}>Continue ›</button>
            </div>
          ))}
        </div>
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
