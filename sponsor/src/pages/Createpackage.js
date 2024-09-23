import React, { useState, useEffect } from 'react';
import './Createpackage.css';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';

const SponsorPackages = () => {
    const navigate = useNavigate();
    const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null); // Store selected package for editing
    const [editModalOpen, setEditModalOpen] = useState(false); // Control modal visibility

    // Fetch packages from the backend on component mount
    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/packages/list');
                setPackages(response.data);
            } catch (error) {
                console.error('Error fetching packages:', error);
            }
        };
        fetchPackages();
    }, []);

    // Handle Delete with confirmation
    const handleDeletePackage = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this package?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:5000/api/packages/delete/${id}`);
                setPackages(packages.filter((pkg) => pkg._id !== id)); // Remove deleted package from state
                alert('Package deleted successfully');
            } catch (error) {
                console.error('Error deleting package:', error);
            }
        }
    };

    // Handle Edit - Open modal with selected package data
    const handleEditPackage = (pkg) => {
        setSelectedPackage(pkg); // Set the selected package
        setEditModalOpen(true);  // Open the modal
    };

    // Handle form input changes in the modal
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setSelectedPackage({
            ...selectedPackage,
            [name]: value
        });
    };

    // Handle package update
    const handleUpdatePackage = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/packages/update/${selectedPackage._id}`, selectedPackage);
            setPackages(packages.map((pkg) => (pkg._id === selectedPackage._id ? selectedPackage : pkg)));
            setEditModalOpen(false); // Close modal after update
            alert('Package updated successfully');
        } catch (error) {
            console.error('Error updating package:', error);
        }
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
            </header>

            <div className="main-content">
                <h1>Sponsor's Packages</h1>

                <div className="packages-grid">
                    {packages.map((pkg) => (
                        <div className="package-card" key={pkg._id}>
                            <h2 className="package-name">{pkg.name}</h2>
                            <p className="package-price">{pkg.price}</p>
                            <button className="delete-btn" onClick={() => handleDeletePackage(pkg._id)}>
                                🗑
                            </button>
                            <button className="edit-btn" onClick={() => handleEditPackage(pkg)}>
                                ✏️
                            </button>
                        </div>
                    ))}
                    <div className="package-card create-package">
                        <button onClick={() => navigate('/createnewpackage')} className="create-btn">
                            Create New Package
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal for Editing Package */}
            {editModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Edit Package</h2>
                        <form onSubmit={handleUpdatePackage}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Package Title"
                                value={selectedPackage.name}
                                onChange={handleEditChange}
                            />
                            <input
                                type="text"
                                name="price"
                                placeholder="Package Price"
                                value={selectedPackage.price}
                                onChange={handleEditChange}
                            />
                            <input
                                type="text"
                                name="description"
                                placeholder="Package Contains"
                                value={selectedPackage.description}
                                onChange={handleEditChange}
                            />
                            <input
                                type="text"
                                name="note"
                                placeholder="Note"
                                value={selectedPackage.note}
                                onChange={handleEditChange}
                            />
                            <button type="submit" className="update-btn">
                                Update
                            </button>
                            <button type="button" className="cancel-btn" onClick={() => setEditModalOpen(false)}>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SponsorPackages;
