# Disboard Server Scraper Extension

A Chrome browser extension that automatically scrapes Discord server information from Disboard.org and sends the data to a Discord webhook. This extension extracts Discord server join links and member counts, then forwards them to a specified Discord channel.

## 🚀 Features

- **Automatic Discord Server Detection**: Finds Discord server join buttons on Disboard.org
- **Member Count Extraction**: Captures online member counts for each server
- **Discord Webhook Integration**: Automatically sends server information to your Discord channel
- **Rate Limiting**: Built-in delay system to prevent overwhelming the webhook
- **Environment-Based Configuration**: Secure configuration using environment variables
- **One-Click Activation**: Simple browser extension activation

## 📋 Prerequisites

- Google Chrome or Chromium-based browser
- Discord webhook URL
- Access to Disboard.org

## 🛠️ Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SohamXYZDev/DisboardScraperChromeExtension.git
   cd DisboardScraperChromeExtension
   ```

2. **Set up environment variables**:

   ```bash
   cp .env.example .env
   ```

3. **Configure your webhook**:
   Edit the `.env` file and replace `your_discord_webhook_url_here` with your actual Discord webhook URL:

   ```env
   DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
   ```

4. **Load the extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the project directory
   - The extension icon should appear in your browser toolbar

## ⚙️ Configuration

The extension uses environment variables for configuration. All settings can be customized in the `.env` file:

| Variable              | Description                           | Default Value    |
| --------------------- | ------------------------------------- | ---------------- |
| `DISCORD_WEBHOOK_URL` | Your Discord webhook URL              | (required)       |
| `TARGET_WEBSITE`      | Website to scrape                     | `disboard.org`   |
| `SEARCH_TAG`          | CSS selector for Discord join buttons | `.is-discord`    |
| `ONLINE_MEMBERS_TAG`  | CSS selector for member count         | `.server-online` |
| `DELAY_MS`            | Delay between requests (milliseconds) | `250`            |

## 🎯 Usage

1. **Navigate to Disboard.org**: Open [Disboard.org](https://disboard.org) in your browser
2. **Activate the extension**: Click the extension icon in your browser toolbar
3. **Automatic processing**: The extension will:
   - Find all Discord server join buttons on the page
   - Extract server URLs and member counts
   - Send the information to your Discord webhook with the configured delay

## 📁 Project Structure

```
DisboardScraperChromeExtension/
├── manifest.json          # Chrome extension manifest
├── background.js          # Extension background script
├── content.js            # Main scraping logic
├── .env.example          # Environment configuration template
├── .env                  # Your actual configuration (not tracked)
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## 🔧 File Descriptions

### `manifest.json`

Chrome extension manifest file defining:

- Extension metadata and version
- Required permissions (`activeTab`, `scripting`)
- Background service worker configuration

### `background.js`

Handles extension icon clicks and injects the content script into the active tab.

### `content.js`

Main functionality including:

- DOM element selection and data extraction
- Discord webhook communication
- Rate limiting and error handling
- Environment variable configuration

## 🚦 How It Works

1. **User clicks extension icon** → `background.js` activates
2. **Content script injection** → `content.js` runs on the current page
3. **Element detection** → Finds Discord server buttons using CSS selectors
4. **Data extraction** → Extracts server URLs and member counts
5. **Webhook delivery** → Sends formatted data to Discord channel
6. **Rate limiting** → Waits between requests to prevent spam

## 🔒 Security

- **Environment variables**: Sensitive data (webhook URLs) stored in `.env` file
- **Git ignore**: `.env` file excluded from version control
- **Example template**: `.env.example` provided for safe sharing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## ⚠️ Important Notes

- **Discord Rate Limits**: The extension includes delays to respect Discord's rate limits
- **Environment Security**: Never commit your actual `.env` file with real webhook URLs
- **Browser Permissions**: The extension requires `activeTab` and `scripting` permissions
- **Target Website**: Currently optimized for Disboard.org structure

## 🐛 Troubleshooting

### Common Issues

1. **"IndexOf is not a function" error**:

   - This occurs when trying to use `indexOf` on NodeList
   - Fixed by converting NodeList to Array using `Array.from()`

2. **Webhook failures**:

   - Check your Discord webhook URL in `.env`
   - Verify webhook permissions in your Discord server
   - Check browser console for network errors

3. **Extension not loading**:
   - Ensure all files are in the same directory
   - Check `manifest.json` syntax
   - Verify Chrome Developer Mode is enabled

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built for Discord server discovery automation
- Designed to work with Disboard.org's structure
- Created as a Chrome extension for easy browser integration

## 👨‍💻 Socials

Created & maintained by Soham Mitra (SohamXYZ)

- 🌐 Website: [https://sohamxyz.com](https://sohamxyz.com)
- 📧 Email: soham@sohamxyz.com
- 💬 Discord: sohamxyz
- 🧠 discord bot/automation inquiries welcome!

---

**⚠️ Disclaimer**: This tool is for educational purposes. Please respect website terms of service and Discord's API guidelines when using this extension.
