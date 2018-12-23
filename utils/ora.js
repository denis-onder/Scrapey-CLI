const Ora = require('ora');

const spinner = new Ora({
  spinner: 'dots3'
});

module.exports = {
  createSpinner: function() {
    return spinner;
  }
};
