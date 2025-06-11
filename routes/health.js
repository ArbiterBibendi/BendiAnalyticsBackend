const router = require('express').Router();
const pool = require('../db.js');

router.get('/', async (req, res, next) => {
	try {
		await pool.query('SELECT 1');
	} catch (e) {
		res.status(500).json({error: "Couldn't establish connection to DB"});
		return;
	}
	res.send("OK");
});

module.exports = router;