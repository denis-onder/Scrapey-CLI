require('dotenv').config();
const fs = require('fs'),
  formatJSFile = require('./prettier');

const { DIR_PATH } = process.env;

module.exports = {
  checkPath: function(path) {
    return new Promise(function(resolve, reject) {
      resolve(fs.existsSync(path));
    });
  },
  createJSFiles: async function(katas) {
    for (let kata of katas) {
      const { kataLevel, kataTitle, kataLink, kataCode } = kata;

      const path = `${DIR_PATH}/${kataLevel}`;

      const payload = formatJSFile(`
        // ${kataTitle}
        // ${kataLink}
    
        ${kataCode}
        `);

      await this.checkPath(path).then(function(exists) {
        if (!exists) {
          createDirectory(path)
            .then(function() {
              console.log(`Added a directory for level ${kataLevel} katas!\n`);
            })
            .then(function() {
              createFile(`${path}/${kataTitle}.js`, payload);
            })
            .then(function() {
              console.log(`${kataTitle}.js has been saved!\n`);
            });
        } else {
          createFile(`${path}/${kataTitle}.js`, payload).then(function() {
            console.log(`${kataTitle}.js has been saved!`);
          });
        }
      });
      // Stage and Commit changes
      // Push changes
    }
  }
};

function createDirectory(path) {
  return new Promise(function(resolve, reject) {
    resolve(
      fs.mkdirSync(path, (err) => {
        if (err) {
          console.error(err);
          throw err;
        }
      })
    );
  });
}

function createFile(path, payload) {
  return new Promise(function(resolve, reject) {
    resolve(
      fs.writeFileSync(path, payload, (err) => {
        if (err) {
          console.error(err);
          throw err;
        }
      })
    );
  });
}
