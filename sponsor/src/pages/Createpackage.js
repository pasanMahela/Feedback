import React from 'react';
import './Createpackage.css';
import { useNavigate } from 'react-router-dom';

const SponsorPackages = () => {

    const navigate = useNavigate();

    const Createnewpackage = () =>{
      navigate('/createnewpackage');
    }
    const packages = [
        { id: 1, name: 'Melody Lite Package', price: '50,000 LKR' },
        { id: 2, name: 'Melody Big Package', price: '100,000 LKR' },
        { id: 3, name: 'Melody Pro Package', price: '150,000 LKR' },
        { id: 4, name: 'Melody VIP Package', price: '200,000 LKR' },
    ];

    const handleDeletePackage = (id) => {
        // Add delete logic here
        alert(`Package with ID ${id} deleted`);
    };

    const handleEditPackage = (id) => {
        // Add edit logic here
        alert(`Package with ID ${id} edited`);
    };

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
                <div className="settings-icon"></div>
            </header>
            
            <div className="main-content">
                <h1>Well come to Melody Mesh.</h1>
                <button className="sponsor-package-btn">Sponsor's Packages.</button>
                
                <div className="packages-grid">
                    {packages.map(pkg => (
                        <div className="package-card" key={pkg.id}>
                            <h2 className="package-name">{pkg.name}</h2>
                            <p className="package-price">{pkg.price}</p>
                            <button className="delete-btn" onClick={() => handleDeletePackage(pkg.id)}>
                                🗑
                            </button>
                            <button className="edit-btn" onClick={() => handleEditPackage(pkg.id)}>
                                ✏️
                            </button>
                        </div>
                    ))}
                    <div className="package-card create-package">
                        <button
                        onClick={Createnewpackage}
                        className="create-btn">Create New Package.</button>
                    </div>
                </div>

                <button className="back-btn">Back.</button>
            </div>

            <footer>
                <div className="footer-left">
                    <h3>Melody Mesh.</h3>
                    <p>12 Maradana, Colombo 0007</p>
                    <p>melody_mesh@gmail.com</p>
                    <p>077-6943586</p>
                </div>
                <div className="footer-right">
                    <div className="company">
                        <h4>Company</h4>
                        <a href="/about">About Us</a>
                        <a href="/location">Location</a>
                        <a href="/careers">Careers</a>
                    </div>
                    <div className="resources">
                        <h4>Resources</h4>
                        <a href="/faq">FAQ</a>
                        <a href="/blog">Blog</a>
                        <a href="/news">News</a>
                    </div>
                    <div className="follow">
                        <h4>Follow</h4>
                        <a href="https://facebook.com">Facebook</a>
                        <a href="https://instagram.com">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default SponsorPackages;
