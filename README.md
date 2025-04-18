<p align="center">
  <img src="static/images/Kernel-Wordmark_Accent.svg" alt="Kernel Logo" width="55%">
  <br/><br/>
</p>

<p align="center">
  <img alt="GitHub License" src="https://img.shields.io/github/license/onkernel/example-playwright">
  <a href="https://discord.gg/FBrveQRcud"><img src="https://img.shields.io/discord/1342243238748225556?logo=discord&logoColor=white&color=7289DA" alt="Discord"></a>
  <a href="https://x.com/juecd__"><img src="https://img.shields.io/twitter/follow/juecd__" alt="Follow @juecd__"></a>
  <a href="https://x.com/rgarcia"><img src="https://img.shields.io/twitter/follow/rfgarcia" alt="Follow @rfgarcia"></a>
</p>

# Playwright Example

This repository demonstrates how to use [Playwright](https://playwright.dev/) with [Kernel](https://onkernel.com). Kernel provides developer-first container infrastructure for building agents on the internet.

## About This Example

This example shows how to:

1. Connect to Kernel's remote browsers using Playwright
2. Run simple web automations
3. View and interact with the automation in real-time using Kernel's remote browser interface

The demo script performs a simple automation that:

- Navigates to Hacker News
- Clicks on the comments link for the first story
- Types "Hello world!" in the comment field

## Getting Started

Follow these steps to run the example:

1. Create a `.env` file with your Kernel API key:

   ```bash
   cp .env.example .env
   ```

   ```
   KERNEL_API_KEY=your-api-key
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the example:

   ```
   npm exec tsx src/demo.ts
   ```

4. A Kernel URL will be displayed in the console. Open this URL in your browser to watch the browser in real-time.

5. After the automation completes, you can continue to use the remote browser manually through the web interface.

6. When finished, type `close` in your terminal to close the browser session.

## For Developers

This example is designed to help you get started with Kernel and Playwright. Here are some resources for developers:

### Development

To modify this example for your own use:

1. Study the `src/demo.ts` file to understand the connection process
2. Refer to [Playwright documentation](https://playwright.dev/docs/intro) for automation capabilities

## Contributing

We welcome contributions to improve this example or add new ones! Please read our [contribution guidelines](./CONTRIBUTING.md) before submitting pull requests.

## License

See the [LICENSE](./LICENSE) file for details.

## Support

For issues, questions, or feedback, please [open an issue](https://github.com/onkernel/example-playwright/issues) on this repository.

To learn more about our hosted services, join our [waitlist](https://onkernel.com) or message us on [Discord](https://discord.gg/FBrveQRcud).
