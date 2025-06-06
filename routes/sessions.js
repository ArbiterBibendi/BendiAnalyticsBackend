const express = require('express');
const router = express.Router();
const pool = require('../db.js');
const { v4 } = require('uuid');


/* Session will be created on every page load */
/* POST sessions. */
router.post('/', async (req, res, next) => {
  const uuid = v4();
  const source = req.body.s ? req.body.s : "none";
  const clientip = req.headers['x-forwarded-for'] || req.ip;
  try {
    await pool.query("INSERT INTO sessions (id, source, ip) VALUES ($1, $2, $3);", [uuid, source, clientip]);
  } catch (e) {
    console.error(e);
    res.status(418).send(e.message);
    return;
  }
  res.send("Success");
});

/* GET sessions. */
router.get('/', async (req, res, next) => {
  const pgres = await pool.query("SELECT * FROM sessions;")
  res.send(pgres.rows);
});

module.exports = router;
