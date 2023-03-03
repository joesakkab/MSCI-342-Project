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

// Auth middleware for JWT authenticated 
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
						res.status(200).send({ express: string });
					}
				);
			}
		}
	);
	connection.end();
});

app.post("/login", async (req, res) => {
	let connection = mysql.createConnection(config);

	const email = req.body.email;
	const pwd = req.body.password;

	const pwdHashed = await bcrypt.hash(pwd, 10);

	connection.query(
		`SELECT * FROM user WHERE email = ${email} AND password = ${pwdHashed}`, 
		[], 
		(error, results, fields) => {
			if (error) {
				return console.error(error.message);
			}

			if (results.length == 0) {
				res.status(403).send({ error: "User login failed (email and pwd pair don't match)" });
				return // User already exists
			} else {
				let string = JSON.stringify(results);
				let obj = JSON.parse(string);
				const token = jwt.sign({ obj }, process.env.JWT_KEY, {
					expiresIn: 86400 // expires in 24 hours
				});
				console.log(token);
				res.status(200).send({ token: token });
			}
		}
	);
	connection.end();
});

app.post('/api/searchbyservice', (req, res) => {
	let connection = mysql.createConnection(config);

	let service = req.body.service;

	let sql = `SELECT * FROM user WHERE service_type = '?'`;
	console.log(sql);
	let data = [service];
	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ results: obj });
	});
	connection.end();
});

// app.post('/api/myprofile', (req, res) => {
// 	let connection = mysql.createConnection(config);
// 	await auth(req, res, () => {
// 		let connection = mysql.createConnection(config);
// 		req.body.
// 	});
// });

// app.post('/api/updateprofile', async (req, res) => {
// 	// Auth Middleware
// 	await auth(req, res, () => {
// 		let connection = mysql.createConnection(config);
// 		req.body.
// 	});
// });


app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server
