const cheerio = require('cheerio'),
  files = require('./files'),
  github = require('./github');

module.exports = (html) => {
  const $ = cheerio.load(html);
  const katasHTML = $('div .list-item.solutions');

  var katas = [];

  katasHTML.each(function(i, elem) {
    var kataLevel = $(this)
      .find($('.inner-small-hex.is-extra-wide'))
      .text()
      .replace(/\s/g, '');

    var kataTitle = $(this)
      .find($('.item-title>a'))
      .text()
      .trim()
      .replace(/\W+/g, '')
      .replace(/\s/g, '-');

    var kataLink = `https://www.codewars.com/${$(this)
      .find('a')
      .attr('href')}`;

    var kataCode = $(this)
      .find($('.markdown'))
      .text();

    katas.push({
      kataLevel: kataLevel,
      kataTitle: kataTitle,
      kataLink: kataLink,
      kataCode: kataCode
    });
  });

  // Check for .git file, add if needed
  github.initGit();
  files.createJSFiles(katas);

  // Check for README.md file, add if needed
};
