require('dotenv').config();
const puppeteer = require('puppeteer'),
  parseKatas = require('./utils/katas');

const { USERNAME, PASSWORD } = process.env;

puppeteer
  .launch({ headless: true, defaultViewport: { width: 1280, height: 926 } })
  .then(async function(browser) {
    const page = await browser.newPage();
    await page.goto('https://www.codewars.com/users/sign_in', {
      waitUntil: 'networkidle2'
    });

    // Login
    await page.type('#user_email', `${USERNAME}`, { delay: 150 });
    await page.type('#user_password', `${PASSWORD}`, { delay: 150 });

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

    // // Get the height of the rendered page
    // var height = await page.evaluate('document.body.scrollHeight'),
    //   prevHeight = 0;

    // while (height !== prevHeight) {
    //   await page.evaluate(`window.scrollTo(0, ${height})`);
    //   await page.waitFor(20000);

    //   prevHeight = height;
    //   height = await page.evaluate('document.body.scrollHeight');
    // }

    // Scroll back to top
    await page.evaluate((_) => {
      window.scrollTo(0, 0);
    });

    // Get HTML and close browser
    const html = await page.content();

    await browser.close();

    parseKatas(html);
  })
  .catch(function(err) {
    console.error(err);
    throw err;
  });
