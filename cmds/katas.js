const cheerio = require('cheerio'),
  files = require('../cmds/files');

module.exports = {
  parse: function(html) {
    return new Promise(function(resolve, reject) {
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

      resolve(katas);
    });
  }
};
