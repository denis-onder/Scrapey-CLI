require('dotenv').config();
const puppeteer = require('puppeteer'),
  parseKatas = require('./utils/parseKatas');

const { USERNAME, PASSWORD } = process.env;

puppeteer
  .launch()
  .then(async function(browser) {
    const page = await browser.newPage();
    await page.goto('https://www.codewars.com/users/sign_in', {
      waitUntil: 'networkidle0'
    });

    await page.type('#user_email', `${USERNAME}`, { delay: 150 });
    await page.type('#user_password', `${PASSWORD}`, { delay: 150 });

    await Promise.all([
      page.click('button[type="submit"]', {
        delay: 1300
      }),
      page.waitForNavigation()
    ]);

    await page.goto(
      'https://www.codewars.com/users/scottworks/completed_solutions',
      {
        waitUntil: 'networkidle0'
      }
    );

    const html = await page.content();

    await browser.close();

    parseKatas(html);
  })
  .catch(function(err) {
    console.error(err);
  });
