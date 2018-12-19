require('dotenv').config;
const https = require('https');

const { CODEWARS_USERNAME, CODEWARS_TOKEN } = process.env;

module.exports = () => {
  return new Promise(function(resolve, reject) {
    https
      .get(
        `https://www.codewars.com/api/v1/users/${CODEWARS_USERNAME}?access_key=${CODEWARS_TOKEN}`,
        function(res) {
          const { statusCode } = res;
          const contentType = res.headers['content-type'];

          let error;

          if (statusCode !== 200) {
            error = new Error(
              'Request Failed.\n' + `Status Code: ${statusCode}`
            );
          }

          if (error) {
            console.error(error.message);
            // consume response data to free up memory
            res.resume();
            reject(err);
          }

          var body = '';

          res.on('data', function(chunk) {
            body += chunk;
          });

          res.on('end', function() {
            try {
              resolve(JSON.parse(body));
            } catch (err) {
              console.error(err);
              reject(err);
            }
          });
        }
      )
      .on('error', function(err) {
        console.error(err);
        reject(err);
      });
  });
};
