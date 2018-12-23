require('dotenv').config();
const puppeteer = require('./cmds/puppeteer.js'),
  katas = require('./cmds/katas.js'),
  github = require('./cmds/github.js'),
  fs = require('fs');

(async function() {
  const { DIR_PATH } = process.env;
  // deleteFolderRecursive(DIR_PATH); // DEVELOPMENT ONLY
  // fs.mkdirSync(DIR_PATH); // DEVELOPMENT ONLY

  github.initGit().then(
    puppeteer.init().then(function(html) {
      katas.parse(html);
    })
  );
})();

// DEVELOPMENT ONLY
// function deleteFolderRecursive(path) {
//   if (fs.existsSync(path)) {
//     fs.readdirSync(path).forEach(function(file, index) {
//       var curPath = path + '/' + file;
//       if (fs.lstatSync(curPath).isDirectory()) {
//         // recurse
//         deleteFolderRecursive(curPath);
//       } else {
//         // delete file
//         fs.unlinkSync(curPath);
//       }
//     });
//     fs.rmdirSync(path);
//   }
// }
