require('dotenv').config();
const fs = require('fs'),
  formatJSFile = require('./prettier');

const { DIR_PATH } = process.env;

module.exports = {
  // createReadmeFile: function(){
  //     // Stage and Commit changes
  //     // Push changes
  // },
  checkPath: function(path, dirName, kataTitle, payload, callback) {
    const exists = fs.existsSync(path);
    if (!exists) {
      console.log(`Creating directory for ${dirName}!`);
      createDirectory(
        path,
        `A directory for ${dirName} has been created!`,
        kataTitle,
        payload,
        callback
      );
    } else {
      callback(path, kataTitle, payload);
    }
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

      this.checkPath(folderPath, kataLevel, kataTitle, payload, function(
        folderPath,
        kataTitle,
        payload
      ) {
        createFile(
          `${folderPath}/${kataTitle}.js`,
          payload,
          `${kataTitle}.js has been saved!`
        );
      });
      // Stage and Commit changes
    });
    // Push changes
  }
};

function createDirectory(path, message, kataTitle, payload, callback) {
  fs.mkdirSync(path, (err) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log(message);
    callback(path, kataTitle, payload);
  });
}

function createFile(path, payload, message) {
  fs.writeFileSync(path, payload, (err) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log(message);
  });
}
