require('dotenv').config;
const https = require('https');

const { CODEWARS_USERNAME, CODEWARS_TOKEN } = process.env;

module.exports = (callback) => {
	https
		.get(
			`https://www.codewars.com/api/v1/users/${CODEWARS_USERNAME}?access_key=${CODEWARS_TOKEN}`,
			function(res) {
				const { statusCode } = res;
				// const contentType = res.headers['content-type'];

				let err;

				if (statusCode !== 200) {
					err = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
				}

				if (err) {
					// consume response data to free up memory
					res.resume();
					throw err;
				}

				var body = '';

				res.on('data', function(chunk) {
					body += chunk;
				});

				res.on('end', function(err) {
					if (err) {
						throw err;
					}

					callback(JSON.parse(body));
				});
			}
		)
		.on('error', function(err) {
			throw err;
		});
};
