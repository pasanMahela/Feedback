import React from 'react';
import './Packages.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const History = () => {
    navigate('/history')
  }
  const Chatwithus = () =>{
    navigate('/Chatwithus')
  }
  const Continue = () =>{
    navigate('/packageview')

  }
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
          <button
          onClick={History}
          >History.</button>
          <button
          onClick ={Chatwithus}
          >Chat with us.</button>
        </div>
        <div className="packages">
          <div className="package-card">
            <h2>Melody</h2>
            <h3>Lite package.</h3>
            <p>50,000 LKR.</p>
            <button
            onClick={Continue}
            >Continue ›</button>
          </div>
          <div className="package-card">
            <h2>Melody</h2>
            <h3>Big package.</h3>
            <p>100,000 LKR.</p>
            <button>Continue ›</button>
          </div>
          <div className="package-card">
            <h2>Melody</h2>
            <h3>Pro package.</h3>
            <p>150,000 LKR.</p>
            <button>Continue ›</button>
          </div>
          <div className="package-card">
            <h2>Melody</h2>
            <h3>VIP package.</h3>
            <p>200,000 LKR.</p>
            <button
            >Continue ›</button>
          </div>
        </div>
        <button className="next-button">Next. ››</button>
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