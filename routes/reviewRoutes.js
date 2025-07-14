const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

router.get('/', async (req, res) => {
  const reviews = await Review.findAll();
  res.json(reviews);
});

router.post('/', async (req, res) => {
  const { movie, review } = req.body;
  const newReview = await Review.create({ movie, review });
  res.json(newReview);
});

router.put('/:id', async (req, res) => {
  const { movie, review } = req.body;
  await Review.update({ movie, review }, { where: { id: req.params.id } });
  res.json({ message: "Updated successfully" });
});

router.delete('/:id', async (req, res) => {
  await Review.destroy({ where: { id: req.params.id } });
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
