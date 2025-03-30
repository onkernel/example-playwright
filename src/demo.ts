import { chromium } from 'playwright';
import dotenv from 'dotenv';
import readline from 'readline';
dotenv.config();

// Create readline interface for demo purposes
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let browser;

(async () => {
  try {
    // https://docs.onkernel.com/api-reference/create-browser-session
    const response = await fetch('https://api.onkernel.com/browser', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.KERNEL_API_KEY}`,
      },
    });
    if (response.status !== 200) {
      throw new Error(
        `Failed to retrieve browser instance: ${response.statusText} ${await response.text()}`,
      );
    }
    const { cdp_ws_url, remote_url } = await response.json();
    console.log(remote_url); // Remote url to view/drive live sessions

    // Set up the command listener to manually close the Kernel session
    rl.on('line', async (input) => {
      if (input.toLowerCase().trim() === 'close') {
        console.log('Closing browser...');
        if (browser) {
          await browser.close();
          rl.close();
          process.exit(0);
        }
      }
    });

    // Connect to the Kernel browser via Playwright
    browser = await chromium.connectOverCDP(cdp_ws_url);
    const context = browser?.contexts()[0];
    const page = await context?.pages()[0];

    // Add a delay so we can navigate to the remote_url in our own browser
    await page.waitForTimeout(15000);

    // Playwright automation
    // The waitForTimeouts are primarily to slow down the automation for demo purposes
    console.log('Navigating to Hacker News...');
    await page.goto('https://news.ycombinator.com', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Find and click the comments link for the first story
    console.log('Clicking comments link for first story...');
    await page.locator('.athing + tr a:has-text("comments")').first().click();
    await page.waitForTimeout(1000);

    // Find and fill the comment field
    console.log('Looking for comment field...');
    try {
      const commentField = await page.locator('textarea[name="text"]');
      await commentField.evaluate((element) => {
        element.style.backgroundColor = 'lightyellow';
      });
      await page.waitForTimeout(1000);

      console.log('Typing comment...');
      await commentField.type('Hello world!', { delay: 100 }); // Slow typing
      await page.waitForTimeout(2000);
    } catch (error) {
      console.log('Comment field not found!', error);
    }

    console.log('Action sequence completed!');
    console.log("Type 'close' to close the browser");
  } catch (error) {
    console.error('Error:', error);
    rl.close();
  }
})();

process.on('SIGINT', async () => {
  if (browser) {
    await browser.close();
  }
  rl.close();
  process.exit(0);
});
