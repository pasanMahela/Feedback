const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');  // Import cors package
const packageRoutes = require('./routes/packageRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors()); // Use cors middleware

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.use('/api/packages', packageRoutes);
// Use the purchase routes
app.use('/api/purchases', purchaseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log("hi");
