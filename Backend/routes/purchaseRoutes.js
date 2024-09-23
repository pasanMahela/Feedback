// routes/purchaseRoutes.js
const express = require('express');
const {
    createPurchase,
    getAllPurchases,
    getPurchaseById,
    deletePurchase,
    getPurchasesByNIC
} = require('../controllers/purchaseController');

const router = express.Router();

// Create a new purchase
router.post('/add', createPurchase);

// Get all purchases
router.get('/list', getAllPurchases);

// Get a purchase by ID
router.get('/view/:id', getPurchaseById);

// Delete a purchase
router.delete('/delete/:id', deletePurchase);

// Get purchases by NIC
router.get('/nic/:nic', getPurchasesByNIC);

module.exports = router;
