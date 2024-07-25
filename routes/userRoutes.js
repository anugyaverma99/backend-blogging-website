const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register a new user
router.post('/register', userController.registerUser);

// Log in a user
router.post('/login', userController.loginUser);

// Define routes for /api/users
router.get('/', (req, res) => {
    // Handle GET request
    res.json({ message: 'Users endpoint' });
});
router.get('/user', verifyJWT, userController.getCurrentUser);
module.exports = router;


