

const puppeteer = require("puppeteer");

(async () => {
    let browser;
    browser = await puppeteer.launch({
        args: ['--start-maximized'],
        "headless": false,

    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto("Https://www.Gamesmith.com", {
        waitUntil: 'load',
        timeout: 0
    });

    const [studio] = await page.$x("//a[contains(., 'Studios')]");
    await studio.click();
    await page.waitForSelector("._265El3KgV_oWA2O9IBrBvp div");
    await page.click("._265El3KgV_oWA2O9IBrBvp div");
    await page.waitFor(3000)
    await page.evaluate(() => {
        window.scrollBy(0, 700);

    });

    const [texts] = await page.$x("//span[contains(text(), 'Join now')]");
    await texts.click();

    await page.waitFor(1000);
    await page.click("#g3021-yourname", { visible: true });
    await page.type("#g3021-yourname", 'AUTO QA');

    await page.click("#g3021-email", { visible: true });
    await page.type("#g3021-email", 'Autoqa@gamesmith.com');

    await page.click("#g3021-companyname", { visible: true });
    await page.type("#g3021-companyname", 'Checkly');


    await page.click("#contact-form-comment-g3021-howcangamesmithhelpyou", { visible: true });
    await page.type("#contact-form-comment-g3021-howcangamesmithhelpyou", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

   //await page.click(".wp-block-button__link")




})();
