const puppeteer = require('./cmds/puppeteer.js'),
  katas = require('./cmds/katas.js'),
  github = require('./cmds/github.js');

(async function() {
  puppeteer.init().then(function(html) {
    katas.parse(html);
  });
})();
