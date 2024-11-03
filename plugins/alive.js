const fs = require("fs");
const Config = require("../config");
const { smd } = require("../lib");

// Define the runtime function (or import it if it's from another file)
function runtime(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

// Command definition for 'alive'
smd(
  {
    pattern: "alive", // Command trigger
    react: "👸", // Reaction when the command is run
    desc: "Check bot's status, speed, and latency", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message, client) => {
    const start = Date.now();
    
    // Simulate a task with a small delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    const latency = Date.now() - start;

    // Final message with latency and speed
    const finalMessage = `
👸 *Queen Nikka is Alive!*

*Latency:* ${latency}ms
*Speed:* As swift as royalty 🚀

*=== |🍀| Powered by HAKI |🍀| ===*
    `;

    // Image to be included with the message
    const imageUrl = "https://files.catbox.moe/bh2fpj.jpg"; // Replace with your actual image URL

    // Send the image with the final message as caption
    await message.send(imageUrl, { caption: finalMessage }, "img", message);
  }
);
smd(
  {
    pattern: "about", // Command trigger
    react: "👇", // Reaction when the command is run
    desc: "Displays important bot and owner information", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message) => {
    const owner = "HAKI"; // Owner name
    const repoLink = "https://github.com/hakisolos/Nikka-v3.2"; // Repository link
    const uptime = runtime(process.uptime()); // Get bot uptime
    const footer = "=== |🍀| Powered by HAKI |🍀| ===";

    // Final message content
    const finalMessage = `
👸 *Queen Nikka MD*

*Owner:* ${owner}
*Repository:* ${repoLink}
*Bot Uptime:* ${uptime}

*LONG LIVE THE QUEEN 👸*

${footer}
`;

    // Image to be included with the message
    const imageUrl = "https://files.catbox.moe/bh2fpj.jpg"; // Replace with your actual image URL

    // Send the image with the final message as caption
    await message.send(imageUrl, { caption: finalMessage }, "img", message);
  }
);
smd(
  {
    pattern: "dev",
    alias: ["haki"],
    react: "🧠", // Reaction when the command is run
    desc: "Displays information about the developer", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message) => {
    const name = "*Haki 🗿*";
    const age = "*18*";
    const occupation = "*Front-end Web Developer*";
    const hobby = "*Coding*";
    const contact = "*https://wa.me/9112171078*";
    const footer = "*=|🍀| Powered by HAKI |🍀|=*";

    // Message content
    const finalMessage = `
👤 *Developer Info*

*Name:* ${name}
*Age:* ${age}
*Occupation:* ${occupation}
*Hobby:* ${hobby}
*Contact:* ${contact}

${footer}
    `;

    // Image to be included with the message
    const imageUrl = "https://d.uguu.se/aEVUlhuR.jpg"; // Replace with your actual image URL

    // Send the image with the final message as caption
    await message.send(imageUrl, { caption: finalMessage }, "img", message);
  }
);