# Kernel Playwright Example

This repository demonstrates how to use [Playwright](https://playwright.dev/) with [Kernel](https://github.com/onkernel/kernel). Kernel provides developer-first container infrastructure for building agents on the internet.

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
   cp .env.copy .env
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
   npx tsx src/demo.ts
   ```

4. A Kernel URL will be displayed in the console. Open this URL in your browser to watch the automation run in real-time.

5. After the automation completes, you can continue to use the remote browser manually through the web interface.

6. When finished, type `close` in your terminal to close the browser session.

## For Developers

This example is designed to help you get started with Kernel and Playwright. Here are some resources for developers:

### Development

To modify this example for your own use:

1. Study the `src/demo.ts` file to understand the connection process
2. Check the [Kernel documentation](https://docs.onkernel.com) for more API options
3. Refer to [Playwright documentation](https://playwright.dev/docs/intro) for automation capabilities

## Contributing

We welcome contributions to improve this example or add new ones! Please read our [contribution guidelines](./CONTRIBUTING.md) before submitting pull requests.

## License

See the [LICENSE](./LICENSE) file for details.

## Support

For issues, questions, or feedback, please [open an issue](https://github.com/onkernel/example-playwright/issues) on this repository.

To learn more about our hosted services, visit [our docs](https://docs.onkernel.com/introduction) and request an API key on [Discord](https://discord.gg/FBrveQRcud).
