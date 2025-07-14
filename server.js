const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const Review = require('./models/Review');
const reviewRoutes = require('./routes/reviewRoutes');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/reviews', reviewRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
  });
});
