const path = require('path');
const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.sendFile(path.resolve(`${__dirname}/../client/client.js`));
});

module.exports = router;