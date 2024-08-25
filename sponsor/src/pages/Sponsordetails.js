import React from 'react';
import './Sponsordetails.css';

function FeedbackPage() {
  const feedbacks = [
    { id: 1, name: "Tom", surname: "Steewen", email: "steew@gmail.com" },
    { id: 2, name: "Tom", surname: "Steewen", email: "steew@gmail.com" },
    { id: 3, name: "Tom", surname: "Steewen", email: "steew@gmail.com" },
    { id: 4, name: "Tom", surname: "Steewen", email: "steew@gmail.com" },
    { id: 5, name: "Tom", surname: "Steewen", email: "steew@gmail.com" },
    { id: 6, name: "Tom", surname: "Steewen", email: "steew@gmail.com" }
  ];

  return (
    <div className="app-container">
      <header>
        <input type="search" placeholder="Search" aria-label="Search" />
        <nav>
          <button aria-label="Home">Home</button>
          <button aria-label="About Us">About Us</button>
          <button aria-label="Contact Us">Feedback</button>
          <button aria-label="Privacy">Sponsor</button>
        </nav>
      </header>
      
      <main>
        <h1>Welcome to Melody Mesh.</h1>
        <button className="feedback-btn" aria-label="Give Feedback">Sponsor details</button>
        <div className="search-sort">
          <input type="text" placeholder="Search feedback" className="search-input" aria-label="Search feedback" />
          <button className="sort-btn" aria-label="Sort Feedback">Sort By</button>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Accounts</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback.id}>
                <td>{feedback.name}</td>
                <td>{feedback.surname}</td>
                <td>{feedback.email}</td>
                <td><button className="view-btn" aria-label={`View feedback from ${feedback.name}`}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <button className="save-btn" aria-label="Save">Save</button>
      </main>
      
      <footer>
        <div className="footer-left">
          <p>Melody Mesh.<br />12 Maradana, Colombo 0007<br />melody_mesh@gmail.com<br />077-6943586</p>
        </div>
        <div className="footer-middle">
          <p>Company</p>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <p>Follow</p>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default FeedbackPage;
