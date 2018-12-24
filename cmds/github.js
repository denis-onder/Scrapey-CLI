require('dotenv').config();
const { DIR_PATH, GITHUB_REPO } = process.env,
  git = require('simple-git/promise')(DIR_PATH),
  files = require('./files'),
  ora = require('../utils/ora');

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
    const spinner = ora.createSpinner();

    return new Promise(function(resolve, reject) {
      resolve(
        git
          .add('./*')
          .then(function() {
            return git.commit(`Completed ${kataTitle}`);
          })
          .then(function() {
            spinner.succeed(`${kataTitle} commited to git master branch.`);
          })
      );
    });
  },
  pushChanges: function() {
    const spinner = ora.createSpinner();

    return new Promise(function(resolve, reject) {
      resolve(
        git.push(['-uf', 'origin', 'master']).then(function() {
          return spinner.succeed('Pushed changes to github.');
        })
      );
    });
  }
};

function initializeRepo(git) {
  const spinner = ora.createSpinner();

  return git.init().then(function() {
    spinner.info('Git repo initialized.');
    git.addRemote('origin', GITHUB_REPO, function() {
      spinner.info(`${GITHUB_REPO} added to remote.`);
    });
  });
}
