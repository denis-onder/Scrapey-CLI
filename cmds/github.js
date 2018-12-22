require('dotenv').config();
const { DIR_PATH, GITHUB_REMOTE } = process.env,
  git = require('simple-git/promise')(DIR_PATH),
  files = require('../utils/files');

module.exports = {
  initGit: function() {
    return new Promise(function(resolve, reject) {
      resolve(
        git.checkIsRepo().then(function(isRepo) {
          !isRepo && initializeRepo(git);
        })
      );
    });
  },
  commitChanges: function() {
    stageChanges();
    // git commit
  },
  pushChanges: function() {
    // git push
  }
};

function initializeRepo(git) {
  console.log('Initializing git repo and adding remote...');
  return git
    .init()
    .then(function() {
      console.log('Git repo initialized...');
    })
    .then(function() {
      git.addRemote('origin', DIR_PATH, function() {
        console.log('Remote added...');
      });
    });
}

function stageChanges() {
  // git add
}
