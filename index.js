require('dotenv').config();
const puppeteer = require('puppeteer'),
  parseKatas = require('./utils/parseKatas');

// const html = `<code class="mbx">decodeMorse = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">morseCode</span>)</span>{
//   <span class="hljs-keyword">return</span> morseCode.trim().split(<span class="hljs-string">'   '</span>).map(<span class="hljs-function"><span class="hljs-params">word</span> =&gt;</span> {
//     <span class="hljs-keyword">return</span> word.split(<span class="hljs-string">' '</span>).map(<span class="hljs-function"><span class="hljs-params">char</span> =&gt;</span> {
//       <span class="hljs-keyword">return</span> MORSE_CODE[char]
//     }).join(<span class="hljs-string">''</span>)
//   }).join(<span class="hljs-string">' '</span>)
// }</code >`;

// var tagsRemoved = html.replace(/<[^<]+>/g, '').replace(/&gt;/gi, '>');
// console.log(tagsRemoved);

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

    // await page.screenshot({ path: './images/signup.png' });

    await Promise.all([
      page.click('button[type="submit"]', {
        delay: 1300
      }),
      page.waitForNavigation()
    ]);

    // await page.screenshot({ path: './images/dashboard.png' });

    await page.goto(
      'https://www.codewars.com/users/scottworks/completed_solutions',
      {
        waitUntil: 'networkidle0'
      }
    );

    // await page.screenshot({ path: './images/solutions.png' });

    const html = await page.content();

    await browser.close();

    parseKatas(html);
  })
  .catch(function(err) {
    console.error(err);
  });
