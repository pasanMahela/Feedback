import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Accountviewe.css';
import Profilepic from '../Images/Profilepic.jpg';

const SponsorAccount = () => {
  const { nic } = useParams();
  const navigate = useNavigate();
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const Backtosponsordetails = () => {
    navigate('/sponsordetails');
  };

  const handlePrint = () => {
    const printContents = document.getElementById('printable-area').innerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <html>
        <head>
          <title>Print Purchase History</title>
          <style>
            body { font-family: Arial, sans-serif; }
            h1, h2, h3 { text-align: center; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ddd; padding: 8px; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/purchases/nic/${nic}`);
        setPurchaseHistory(response.data);
      } catch (error) {
        console.error('Error fetching purchases:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, [nic]);

  return (
    <div className="sponsor-container">
      <header>
        <input type="text" placeholder="Search" className="search-bar" />
        <nav>
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/feedback">Feedback</a>
          <a href="/sponsor">Sponsor</a>
        </nav>
      </header>

      <div className="main-content">
        <h1>Welcome to Melody Mesh.</h1>
        <button className="sponsor-account-btn">Sponsor's Accounts.</button>
        
        {loading ? (
          <p>Loading purchase history...</p>
        ) : (
          <div className="sponsor-card">
            <div className="sponsor-header">
              <img src={Profilepic} alt="Profile" className="profile-picture" />
              <h2 className="sponsor-name">{purchaseHistory.length > 0 ? purchaseHistory[0].firstName + ' ' + purchaseHistory[0].lastName : 'No name'}</h2>
            </div>
            <h3>Purchased History.</h3>
            <div id="printable-area">
              <table>
                <thead>
                  <tr>
                    <th>Package Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {purchaseHistory.map((item, index) => (
                    <tr key={index}>
                      <td>{item.packageName}</td>
                      <td>{item.createdAt.split('T')[0]}</td> {/* Assuming createdAt is the purchase date */}
                      <td>{item.packagePrice}</td> {/* Displaying the purchase amount */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={handlePrint} className="print-btn">Print</button>
          </div>
        )}

        <button onClick={Backtosponsordetails} className="back-btn">Back</button>
      </div>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default SponsorAccount;
