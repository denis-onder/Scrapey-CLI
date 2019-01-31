require('dotenv').config();
const { DIR_PATH, GITHUB_REPO } = process.env,
	git = require('simple-git/promise')(DIR_PATH),
	ora = require('../utils/ora');

module.exports = {
	initGit: function() {
		return git.checkIsRepo().then(function(isRepo) {
			!isRepo && initializeRepo(git);
		});
	},
	commitChanges: function(filePath, kataTitle) {
		return git.add(filePath).then(function() {
			return git.commit(`Completed ${kataTitle}`);
		});
	},
	pushChanges: function() {
		const spinner = ora.createSpinner();

		return git.push(['-uf', 'origin', 'master']).then(function() {
			spinner.succeed('Pushed changes to github.');
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
