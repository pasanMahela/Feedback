const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String },
    note: { type: String }
});

module.exports = mongoose.model('Package', packageSchema);
