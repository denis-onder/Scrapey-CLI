require('dotenv').config();
const fs = require('fs'),
  formatJSFile = require('./prettier');

const { KATA_REPO_PATH } = process.env;

module.exports = (katas) => {
  katas.forEach((kata) => {
    const { kataLevel, kataTitle, kataLink, kataCode } = kata,
      checkFolderExists = fs.existsSync(`${KATA_REPO_PATH}/${kataLevel}`);

    if (!checkFolderExists) {
      console.log(`Creating directory for ${kataLevel}!`);
      fs.mkdir(`${KATA_REPO_PATH}/${kataLevel}`, (err) => {
        if (err) {
          console.error(err);
          throw err;
        }
        console.log(`A directory for ${kataLevel} has been created!`);
      });
    }

    const payload = formatJSFile(`
    // ${kataTitle}
    // ${kataLink}

    ${kataCode}
    `);

    fs.writeFile(
      `${KATA_REPO_PATH}/${kataLevel}/${kataTitle}.js`,
      payload,
      (err) => {
        if (err) {
          console.error(err);
          throw err;
        }
        console.log(`${kataTitle}.js has been saved!`);
      }
    );
  });
};
