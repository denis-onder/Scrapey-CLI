require('dotenv').config();
const fs = require('fs'),
  formatJSFile = require('./prettier');

const { DIR_PATH } = process.env;

module.exports = {
  // createReadmeFile: function(){
  //     // Stage and Commit changes
  //     // Push changes
  // },
  checkPath: function(path, dirName, callback) {
    fs.stat(path, function(err, stats) {
      if (err.code !== 'EEXIST' || (stats && !stats.isDirectory())) {
        console.log(`Creating directory for ${dirName}!`);
        createDirectory(
          path,
          `A directory for ${dirName} has been created!`,
          callback
        );
      } else {
        callback();
      }
    });
  },
  createJSFiles: function(katas) {
    katas.forEach((kata) => {
      const { kataLevel, kataTitle, kataLink, kataCode } = kata;

      const folderPath = `${DIR_PATH}/${kataLevel}`;

      const payload = formatJSFile(`
        // ${kataTitle}
        // ${kataLink}
    
        ${kataCode}
        `);

      this.checkPath(folderPath, kataLevel, function(
        folderPath,
        kataTitle,
        payload
      ) {
        console.log(folderPath, kataTitle, payload);
        createFile(
          `${folderPath}/${kataTitle}.js`,
          payload,
          `${kataTitle}.js has been saved!`
        );
      });

      // if (!folderExists) {
      //   console.log(`Creating directory for ${kataLevel}!`);

      //   await createDirectory(
      //     folderPath,
      //     `A directory for ${kataLevel} has been created!`
      //   );
      // }

      // Stage and Commit changes
    });

    // Push changes
  }
};

function createDirectory(path, message, callback) {
  fs.mkdir(path, (err) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log(message);
    callback();
  });
}

function createFile(path, payload, message) {
  fs.writeFile(path, payload, (err) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log(message);
  });
}
