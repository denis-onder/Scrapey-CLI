require('dotenv').config();
const { DIR_PATH, GITHUB_USERNAME, GITHUB_PASSWORD, GITHUB_REPO } = process.env,
  git = require('simple-git/promise')(DIR_PATH),
  files = require('../utils/files');

const remote = `https://${GITHUB_REPO}`;

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
  commitChanges: function(kataTitle) {
    return new Promise(function(resolve, reject) {
      resolve(
        git.add('./*').then(function() {
          git.commit(`Completed ${kataTitle}`).then(function() {
            git.status().then(function(status) {
              console.log(status);
            });
          });
        })
      );
    });
  },
  pushChanges: function() {
    return new Promise(function(resolve, reject) {
      resolve(
        git.push(['-uf', 'origin', 'master'], function() {
          console.log('\nPushed changes to github.\n');
        })
      );
    });
  }
};

function initializeRepo(git) {
  console.log('Initializing git repo and adding remote.');
  return git
    .init()
    .then(function() {
      console.log('Git repo initialized.');
    })
    .then(function() {
      git.addRemote('origin', remote, function() {
        console.log('Remote added.');
      });
    });
}

function stageChanges(kataTitle) {
  return new Promise(function(resolve, reject) {
    resolve(git.add('./*'));
  });
}
