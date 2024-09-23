import React, { useState, useEffect } from 'react';
import './Sponsordetails.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SponsorPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sponsors, setSponsors] = useState([]); // State to store sponsors
  const [loading, setLoading] = useState(true); // State for loading

  const organizerviewe = (nicNumber) => {
    navigate(`/accountviewe/${nicNumber}`);
  }
  // Fetch sponsors from the backend
  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/purchases/list'); // Adjust URL as needed
        setSponsors(response.data); // Assuming response.data is an array of purchases
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchSponsors();
  }, []);

  const filteredSponsors = sponsors.filter(sponsor =>
    sponsor.firstName && sponsor.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Packages = () => {
    navigate('/createpackage');
  };

  return (
    <div className="app-container">
      <header>
        <input type="search" placeholder="Search" aria-label="Search" />
        <nav>
          <button aria-label="Home">Home</button>
          <button aria-label="About Us">About Us</button>
          <button aria-label="Feedback">Feedback</button>
          <button aria-label="Sponsor">Sponsor</button>
        </nav>
      </header>
      
      <main>
        <h1>Sponsor Details</h1>
        <button className="sponsor-btn" aria-label="View Packages" onClick={Packages}>View Packages</button>
        <div className="search-sort">
          <input
            type="text"
            placeholder="Search sponsor"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search sponsor"
          />
          <button className="sort-btn" aria-label="Sort Sponsor">Sort By</button>
        </div>
        
        {loading ? ( // Show loading message while fetching data
          <p>Loading sponsors...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Accounts</th>
              </tr>
            </thead>
            <tbody>
              {filteredSponsors.map((sponsor) => (
                <tr key={sponsor.nicNumber}>
                  <td>{sponsor.firstName}</td>
                  <td>{sponsor.lastName}</td>
                  <td>{sponsor.email}</td>
                  <td>
                    <button 
                      onClick={() => organizerviewe(sponsor.nicNumber)}
                      className="view-btn" 
                      aria-label={`View sponsor from ${sponsor.firstName}`}>
                      View
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        )}
        
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
