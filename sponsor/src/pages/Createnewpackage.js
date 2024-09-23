import React from 'react';
import './Createnewpackage.css';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    const Create = () =>{
        navigate('/createpackage')
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
        <h2 className="welcome-title">Welcome to Melody Mesh.</h2>
        <button className="create-package-button">Create new packages</button>

        <form className="package-form">
          <input type="text" placeholder="Package Title" />
          <input type="text" placeholder="Package Price" />
          <input type="text" placeholder="Package Contains" />
          <input type="text" placeholder="Note" />
          <button 
          onClick={Create}
          type="submit" className="create-button">Create</button>
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