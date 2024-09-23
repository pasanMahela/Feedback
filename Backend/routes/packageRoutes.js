const express = require('express');
const router = express.Router();
const packageController = require('../controllers/packageController');

// Route to create a package
router.post('/add', packageController.createPackage);

// Route to get all packages
router.get('/list', packageController.getPackages);

// Route to update a package
router.put('/update/:id', packageController.updatePackage);

// Route to delete a package
router.delete('/delete/:id', packageController.deletePackage);

// Route to get a package by ID
router.get('/view/:id', packageController.getPackageById);


module.exports = router;
