const cheerio = require('cheerio');

module.exports = {
	parse: function(html) {
		return new Promise(function(resolve) {
			const $ = cheerio.load(html);
			const katasHTML = $('div .list-item.solutions');

			let katas = [];

			katasHTML.each(function() {
				const kataLevel = $(this)
					.find($('.inner-small-hex.is-extra-wide'))
					.text()
					.replace(/\s/g, '');

				const kataTitle = $(this)
					.find($('.item-title>a'))
					.text()
					.trim()
					.replace(/\W+/g, '')
					.replace(/\s/g, '-');

				const kataLink = `https://www.codewars.com/${$(this)
					.find('a')
					.attr('href')}`;

				const solutions = $(this).find($('.markdown'));
				let solutionsArr = [];

				for (let i = 0; i < solutions.length; i++) {
					let language = '';
					if (solutions[i].prev.name === 'h6') {
						language = solutions[i].prev.children[0].data;
						language = language.substring(0, language.length - 1);
					} else {
						language = solutionsArr[i - 1].language;
					}

					let code = solutions.slice(i, i + 1).text();

					solutionsArr.push({ language, code });
				}

				katas.push({
					kataLevel,
					kataTitle,
					kataLink,
					solutionsArr
				});
			});

			resolve(katas);
		});
	}
};
