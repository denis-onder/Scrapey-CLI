require('dotenv').config();
const puppeteer = require('puppeteer');

const { USERNAME, PASSWORD } = process.env;

module.exports = {
  init: function() {
    return new Promise(function(resolve, reject) {
      puppeteer
        .launch({
          headless: false,
          defaultViewport: { width: 1280, height: 926 }
        })
        .then(async function(browser) {
          const page = await browser.newPage();
          await page.goto('https://www.codewars.com/users/sign_in', {
            waitUntil: 'networkidle2'
          });

          await handleLogin(page);

          await Promise.all([
            page.click('button[type="submit"]', {
              delay: 1300
            }),
            page.waitForNavigation({
              timeout: 60000,
              waitUntil: 'networkidle2'
            })
          ]);

          await page.goto(
            'https://www.codewars.com/users/scottworks/completed_solutions',
            {
              timeout: 60000,
              waitUntil: 'networkidle2'
            }
          );

          // await handleLazyLoad(page);

          // Scroll back to top
          await page.evaluate('window.scrollTo(0, 0)');

          // Get HTML and close browser
          resolve(await page.content());
        })
        .catch(function(err) {
          console.error(err);
          reject(err);
        });
    });
  }
};

async function handleLogin(page) {
  await page.type('#user_email', `${USERNAME}`, { delay: 150 });
  await page.type('#user_password', `${PASSWORD}`, { delay: 150 });
}

async function handleLazyLoad(page) {
  // Get the height of the rendered page
  var height = await page.evaluate('document.body.scrollHeight'),
    prevHeight = 0;

  while (height !== prevHeight) {
    await page.evaluate(`window.scrollTo(0, ${height})`);
    await page.waitFor(20000);

    prevHeight = height;
    height = await page.evaluate('document.body.scrollHeight');
  }
}
