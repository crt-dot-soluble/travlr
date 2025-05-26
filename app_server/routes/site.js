const express = require('express');
const router = express.Router();

// Controller imports (to be created)
const travelerController = require('../controllers/traveler');

// Home page
router.get('/', travelerController.index);

// About page
router.get('/about', travelerController.about);

// Rooms page
router.get('/rooms', travelerController.rooms);

// Meals page
router.get('/meals', travelerController.meals);

// News page
router.get('/news', travelerController.news);

// Travel page
router.get('/travel', travelerController.travel);

// Contact page
router.get('/contact', travelerController.contact);

module.exports = router;
