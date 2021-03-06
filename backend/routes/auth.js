const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Ir0nManisgre@t';

//  ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post(
	'/createuser',
	[
		body('name', 'Name length should be atleast 3 characters').isLength({ min: 3 }),
		body('email', 'Enter a valid email').isEmail(),
		body('password', 'Password length should be atleast 5 characters').isLength({ min: 5 }),
	],
	async (req, res) => {
		//  If there are errors, return bad request and the errors
		let success = false;
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ success, errors: errors.array() });
		}

		try {
			// Check wheter the user with this email exists already
			let user = await User.findOne({ email: req.body.email });
			if (user) {
				return res.status(400).json({ success, error: 'User with this email is already present' });
			}
			const salt = await bcrypt.genSalt(10);
			const secPass = await bcrypt.hash(req.body.password, salt);
			//  Create a new user
			user = await User.create({
				name: req.body.name,
				email: req.body.email,
				password: secPass,
			});

			const data = {
				user: {
					id: user.id,
				},
			};
			const authToken = jwt.sign(data, JWT_SECRET);

			// res.json(user);
			success = true;
			res.json({ success, authToken });
		} catch (error) {
			console.error(error.message);
			res.status(500).send('Internal Server Error');
		}
	}
);

//  ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post(
	'/login',
	[body('email', 'Enter a valid email').isEmail(), body('password', 'Password can not be blank').exists()],
	async (req, res) => {
		let success = false;
		//  If there are errors, return bad request and the errors
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			// Check wheter the user with this email exists already
			let user = await User.findOne({ email });
			if (!user) {
				success = false;
				return res.status(400).json({ success, error: 'Incorrect Credentials' });
			}
			const passwordCompare = await bcrypt.compare(password, user.password);
			if (!passwordCompare) {
				success = false;
				return res.status(400).json({ success, error: 'Incorrect Credentials' });
			}

			const data = {
				user: {
					id: user.id,
				},
			};
			const authToken = jwt.sign(data, JWT_SECRET);
			success = true;
			res.json({ success, authToken });
		} catch (error) {
			console.error(error.message);
			res.status(500).send('Internal Server Error');
		}
	}
);

//  ROUTE 3: Get logged in User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async (req, res) => {
	//  If there are errors, return bad request and the errors

	try {
		// Check wheter the user with this email exists already
		let userId = req.user.id;
		const user = await User.findById(userId).select('-password');
		res.send(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Internal Server Error');
	}
});

module.exports = router;
