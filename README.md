# Playwright Example Implementation

This example shows how to connect to Kernel's remote browsers to run web automations. Follow these steps to run it:

1. Run `cp EXAMPLE_ENV .env`
2. Replace "your-api-key" with the Kernel API key provided to you
3. Run `npm install`
4. Run `tsx src/demo.ts` to run the example automation. The automation starts a new browser, navigates to Hacker News, clicks the first link, and enters "Hello world!" into the comment box.
5. When you run `tsx src/demo.ts`, it will `console.log()` a Kernel url that you can visit in your browser. This allows you to watch the automation run in real time.
6. Typically, browser sessions are closed when you call `browser.close()` in Playwright. For the purposes of this demo, we leave leave the session open after the automation ends. You can use the remote GUI that you navigated to in (4) to manually drive the web browser. Try clicking on other links or visiting a different website.
7. Enter `close` in your terminal when you are done, so the browser closes (this calls `browser.close()`).
