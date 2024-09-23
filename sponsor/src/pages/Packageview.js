import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Packageview.css';

function PackageView() {
  const navigate = useNavigate();
  const { packageId } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/packages/view/${packageId}`);
        setPackageDetails(response.data);
      } catch (error) {
        console.error('Error fetching package details:', error);
      }
    };

    fetchPackageDetails();
  }, [packageId]);

  if (!packageDetails) {
    return <div>Loading...</div>;
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
          <button onClick={() => navigate('/packages')} className="active">Packages.</button>
          <button onClick={() => navigate('/history')}>History.</button>
          <button disabled>Chat with us.</button>
        </div>

        <div className="package-details">
          <h2>{packageDetails.name}</h2>
          <h3>{packageDetails.price} LKR</h3>
          <h4>Package Contains:</h4>
          <p>{packageDetails.description}</p>
          {packageDetails.note && <p><strong>Note:</strong> {packageDetails.note}</p>}
          <button 
            onClick={() => navigate('/purchase', { state: { packageName: packageDetails.name, packagePrice: packageDetails.price } })} 
            className="purchase-button">Purchase ›
          </button>


        </div>

        <button onClick={() => navigate('/packages')} className="previous-button">‹‹ Previous</button>
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

export default PackageView;
