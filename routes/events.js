const express = require('express');
const router = express.Router();
const pool = require('../db.js');
const { v4 } = require('uuid');


/* POST events. */
/* et: etype, ed: edata */
router.post('/', async (req, res, next) => {
  const uuid = v4();
  const etype = req.body.et ? req.body.et : "none";
  const edata = req.body.ed ? req.body.ed : "none";
  const clientip = req.headers['x-forwarded-for'] || req.ip;
  try {
  await pool.query("INSERT INTO events (id, etype, edata, ip) VALUES ($1, $2, $3, $4);", [uuid, etype, edata, clientip]);
  } catch (e) {
    console.error(e);
    res.status(418).send(e.message);
    return;
  }
  res.send("Success");
});

/* GET events. */
router.get('/', async (req, res, next) => {
  const pgres = await pool.query("SELECT * FROM events;")
  res.send(pgres.rows);
});

module.exports = router;
