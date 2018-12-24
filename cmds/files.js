require('dotenv').config();
const fs = require('fs'),
  formatJSFile = require('../utils/prettier'),
  github = require('./github'),
  ora = require('../utils/ora');

const { DIR_PATH } = process.env;

module.exports = {
  checkPath: function(path) {
    return new Promise(function(resolve, reject) {
      resolve(fs.existsSync(path));
    });
  },
  createJSFiles: function(katas) {
    return new Promise(async function(resolve, reject) {
      for (let kata of katas) {
        const { kataLevel, kataTitle, kataLink, kataCode } = kata;

        const dirPath = `${DIR_PATH}/${kataLevel}`;
        const filePath = `${dirPath}/${kataTitle}.js`;

        const payload = formatJSFile(`
            // ${kataTitle}
            // ${kataLink}
        
            ${kataCode}
            `);

        const spinner = ora.createSpinner();

        module.exports.checkPath(dirPath).then(async function(exists) {
          if (!exists) {
            await createDirectory(dirPath).then(function() {
              spinner.info(`Added a directory for level ${kataLevel} katas!`);
            });
          }

          await createFile(filePath, payload).then(function() {
            spinner.succeed(`${kataTitle}.js has been saved!`);
          });
        });

        await github.commitChanges(kataTitle);
      }

      resolve('Done');
    });
  }
};

function createDirectory(dirPath) {
  return new Promise(function(resolve, reject) {
    resolve(
      fs.mkdirSync(dirPath, (err) => {
        if (err) {
          console.error(err);
          throw err;
        }
      })
    );
  });
}

function createFile(filePath, payload) {
  return new Promise(function(resolve, reject) {
    resolve(
      fs.writeFileSync(filePath, payload, (err) => {
        if (err) {
          console.error(err);
          throw err;
        }
      })
    );
  });
}
