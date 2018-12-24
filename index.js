require('dotenv').config();
const puppeteer = require('./cmds/puppeteer.js'),
  katas = require('./cmds/katas.js'),
  github = require('./cmds/github.js'),
  files = require('./cmds/files');
fs = require('fs');

(async function() {
  const { DIR_PATH } = process.env;
  // deleteFolderRecursive(DIR_PATH); // DEVELOPMENT ONLY
  // fs.mkdirSync(DIR_PATH); // DEVELOPMENT ONLY

  github
    .initGit()
    .then(function() {
      return puppeteer.init();
    })
    .then(function(html) {
      return katas.parse(html);
    })
    .then(function(katas) {
      return files.createJSFiles(katas);
    })
    .then(function() {
      return github.pushChanges();
    })
    .then(function() {
      return process.exit();
    });
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
