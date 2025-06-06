const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	ssl: process.env.ENV === "dev" ? false : true
});

module.exports = pool;