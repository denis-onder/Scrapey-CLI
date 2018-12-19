require('dotenv').config();
const fs = require('fs'),
  formatJSFile = require('./prettier');

const { KATA_REPO_PATH } = process.env;

module.exports = (katas) => {
  katas.forEach((kata) => {
    const { kataLevel, kataTitle, kataLink, kataCode } = kata,
      folderPath = `${KATA_REPO_PATH}/${kataLevel}`,
      folderExists = checkFolderExists(folderPath);

    if (!folderExists) {
      console.log(`Creating directory for ${kataLevel}!`);
      createDirectory(
        folderPath,
        `A directory for ${kataLevel} has been created!`
      );
    }

    const payload = formatJSFile(`
    // ${kataTitle}
    // ${kataLink}

    ${kataCode}
    `);

    createFile(
      `${folderPath}/${kataTitle}.js`,
      payload,
      `${kataTitle}.js has been saved!`
    );
  });
};

// Helper Functions
function checkFolderExists(path) {
  return fs.existsSync(path);
}

function createDirectory(path, message) {
  fs.mkdir(path, (err) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log(message);
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
