import React, { useState } from 'react';
import './Chatwithus.css';
import { useNavigate } from 'react-router-dom';


function ChatApp() {
  const navigate = useNavigate();

  const Exit = () =>{
    navigate('/packages');
  }
  const navigataPackages = () =>{
    navigate('/packages');
  }
  
  const [messages, setMessages] = useState([
    { id: 1, name: 'Hashan thilanga.', text: 'Hello. Good morning. How can I help you?' },
    { id: 2, name: 'Hashan thilanga.', text: ': is typing......' }
  ]);

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
        <div className="chat-header">
          <button className="active" onClick={ navigataPackages }>
            Packages</button>
        </div>

        <div className="chat-box">
          {messages.map(message => (
            <div key={message.id} className="message">
              <h4>{message.name}</h4>
              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <div className="message-input-container">
          <input className="message-input" type="text" placeholder="Message" />
          <div className="input-icons">
            <button>😊</button>
            <button>📎</button>
            <button>📷</button>
            <button className="send-button">📤</button>
          </div>
        </div>

        <button 
        onClick={ Exit }
        className="exit-button">Exit</button>
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

export default ChatApp;