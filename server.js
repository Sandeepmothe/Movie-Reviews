const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const Review = require('./models/Review');
const reviewRoutes = require('./routes/reviewRoutes');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/reviews', reviewRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Server running at http://localhost:5000');
  });
});
