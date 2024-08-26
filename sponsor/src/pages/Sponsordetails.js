import React from 'react';
import './Sponsordetails.css';
import {useNavigate} from 'react-router-dom';

function SponsorPage() {
  const navigate =useNavigate();

  const organizerviewe = () => {
    navigate('/accountviewe')
  }


  const sponsors = [
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
          <button aria-label="Contact Us">Sponsor</button>
          <button aria-label="Privacy">Sponsor</button>
        </nav>
      </header>
      
      <main>
        <h1>Welcome to Melody Mesh.</h1>
        <button className="sponsor-btn" aria-label="Give Sponsor">Sponsor details</button>
        <div className="search-sort">
          <input type="text" placeholder="Search sponsor" className="search-input" aria-label="Search sponsor" />
          <button className="sort-btn" aria-label="Sort Sponsor">Sort By</button>
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
            {sponsors.map((sponsor) => (
              <tr key={sponsor.id}>
                <td>{sponsor.name}</td>
                <td>{sponsor.surname}</td>
                <td>{sponsor.email}</td>
                <td><button 
                onClick={organizerviewe}
                className="view-btn" aria-label={`View sponsor from ${sponsor.name}`}>View</button></td>
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

export default SponsorPage;
