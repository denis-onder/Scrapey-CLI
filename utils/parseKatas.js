const cheerio = require('cheerio');

module.exports = (html) => {
  const $ = cheerio.load(html);

  const katas = $('div .list-item.solutions');

  katas.each(function(i, elem) {
    var kataLevel = $(this)
      .find($('.inner-small-hex.is-extra-wide'))
      .text();

    var kataLink = `https://www.codewars.com/${$(this)
      .find('a')
      .attr('href')}`;

    var kataTitle = $(this)
      .find($('.item-title>a'))
      .text();

    var kataCode = $(this)
      .find($('.markdown'))
      .text();
  });
};
