![fig1](/assets/fig1.png)

## Project Description

Scrapey-CLI extracts challenge solutions from CodeWars.com, stores them locally, and pushes them to Github. Check out [my repo](https://github.com/ScottWorks/CodeWars-Challenges) to see it in action!

### Laundry List

Feel free to add feature requests in the issues tracker.

- [x] Multi-language support
- [x] Code challenge versioning
- [x] Detailed README.md file generation
- [ ] Handle password rejection gracefully
- [ ] Robust error handling

## Getting Started

**NOTE: Please be paitent with Scrapey while it does its scrapeing. Codewars servers can be slow at times so the timeout is set fairly high, if you want to change the timeout you can do so in the .env file by changing the 'TIMEOUT' constant which defaults to 80 seconds.**

1. Fork and Clone this repo.
2. In the command-line navigate to the root of the project folder.
3. Enter `npm install`.
4. Login to your Github account, then make a new repository that will store the extracted Katas.
5. On your local machine create a directory for your extracted Katas. This should be seperate from the project folder containing the source code of the Scrapey-CLI tool.
6. At the root of the project create a `.env` file. The `.env.example` file was provided as a template. Simply remove the `.example` suffix and add the appropiate infomation to the file.
7. From the root of the Scrapey-CLI project folder enter `node index.js` to begin scrapeing your challenges.
