// controllers/purchaseController.js
const Purchase = require('../models/purchaseModel');

// Create a new purchase
exports.createPurchase = async (req, res) => {
    try {
        const purchase = new Purchase(req.body);
        await purchase.save();
        res.status(201).json(purchase);
    } catch (error) {
        res.status(400).json({ message: 'Error creating purchase', error });
    }
};

// Read all purchases
exports.getAllPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.find();
        res.status(200).json(purchases);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching purchases', error });
    }
};

// Read a purchase by ID
exports.getPurchaseById = async (req, res) => {
    try {
        const purchase = await Purchase.findById(req.params.id);
        if (!purchase) {
            return res.status(404).json({ message: 'Purchase not found' });
        }
        res.status(200).json(purchase);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching purchase', error });
    }
};

// Delete a purchase
exports.deletePurchase = async (req, res) => {
    try {
        const purchase = await Purchase.findByIdAndDelete(req.params.id);
        if (!purchase) {
            return res.status(404).json({ message: 'Purchase not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ message: 'Error deleting purchase', error });
    }
};

// Read purchases by NIC
exports.getPurchasesByNIC = async (req, res) => {
    try {
        const purchases = await Purchase.find({ nicNumber: req.params.nic });
        if (purchases.length === 0) {
            return res.status(404).json({ message: 'No purchases found for this NIC' });
        }
        res.status(200).json(purchases);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching purchases by NIC', error });
    }
};
