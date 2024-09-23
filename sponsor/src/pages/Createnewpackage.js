import React, { useState } from 'react';
import './Createnewpackage.css';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    // Define state to handle form input
    const [packageData, setPackageData] = useState({
        name: '',
        price: '',
        description: '',
        note: ''
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPackageData({
            ...packageData,
            [name]: value
        });
    };

    // Function to handle form submission and send data to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send POST request to backend to create a new package
            const response = await axios.post('http://localhost:5000/api/packages/add', packageData);
            console.log('Package created successfully:', response.data);
            navigate('/createpackage'); // Redirect after successful creation
        } catch (error) {
            console.error('Error creating package:', error);
        }
    };

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
                <h2 className="welcome-title">Create New Package</h2>

                <form className="package-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Package Title"
                        value={packageData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="Package Price"
                        value={packageData.price}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Package Contains"
                        value={packageData.description}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="note"
                        placeholder="Note"
                        value={packageData.note}
                        onChange={handleChange}
                    />
                    <button type="submit" className="create-button">Create</button>
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
