const fs = require('fs');

module.exports = (katas) => {
  katas.forEach((kata) => {
    const { kataLevel, kataTitle, kataLink, kataCode } = kata,
      checkFolderExists = fs.existsSync(`./katas/${kataLevel}`);

    if (!checkFolderExists) {
      console.log(`Creating directory for ${kataLevel}!`);
      fs.mkdir(`./katas/${kataLevel}`, (err) => {
        if (err) {
          console.error(err);
          throw err;
        }
        console.log(`A directory for ${kataLevel} has been created!`);
      });
    }

    const payload = `
    // ${kataTitle}
    // ${kataLink}

    ${kataCode}
    `;

    fs.writeFile(`./katas/${kataLevel}/${kataTitle}.js`, payload, (err) => {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log(`${kataTitle}.js has been saved!`);
    });
  });
};
