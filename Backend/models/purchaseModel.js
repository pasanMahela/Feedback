// models/purchaseModel.js
const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    nicNumber: { type: String, required: true, unique: true },
    principalAddress: { type: String, required: true },
    postalCode: { type: String, required: true },
    email: { type: String, required: true },
    packageName: { type: String, required: true },
    packagePrice: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
