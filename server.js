let mysql = require('mysql');
let config = require('./config.js');
const fetch = require('node-fetch');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { response } = require('express');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));

// Auth middleware for JWT authenticated endpoints
const auth = async (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1];
	if (!token)
		return res.status(403).send({ auth: false, message: "No token provided." });
	await jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
		if (err)
			return res
				.status(500)
				.send({ auth: false, message: "Failed to authenticate token." });
		// if everything good, save to request for use in other routes
		req.userID = decoded.userID;
		next();
	});
};

app.get('/api/ping', (req, res) => {
	res.send({ express: "pong" });
});

app.post("/signup", async (req, res) => {
	let connection = mysql.createConnection(config);

	const email = req.body.email;
	const pwd = req.body.password;
	const first = req.body.first;

	const pwdHashed = await bcrypt.hash(pwd, 10);

	connection.query(
		`SELECT * FROM user WHERE email = ${email}`, 
		[], 
		(error, results, fields) => {
			if (error) {
				return console.error(error.message);
			}

			if (results.length > 0) {
				res.status(403).send({ error: "User already exists!" });
				return // User already exists
			} else {
				let sql = `INSERT INTO user (email, password, first, last) VALUES (?, ?, ?, ?)`;
				console.log(sql);
				let data = [email, pwdHashed, first, last];
				console.log(data);

				connection.query(

					sql, 
					data, 
					(error, results, fields) => {
						if (error) {
							return console.error(error.message);
						}
				
						let string = JSON.stringify(results);
						//let obj = JSON.parse(string);
						res.send({ express: string });
					}
				);
			}
		}
	);
	connection.end();
});



app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server
