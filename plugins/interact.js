const { smd } = require("../lib");

// Command to send a greeting message
smd(
  {
    pattern: "hi", // Command trigger
    react: "👋", // Reaction emoji for the command
    desc: "Greet and introduce the bot", // Description of the command
    category: "greeting", // Category under which the command falls
    filename: __filename, // The current file's name
  },
  async (message) => {
    const response = `
🌟✨ **Hey, I'm Queen Nikka!** ✨🌟
I'm a multipurpose bot developed by Haki to suit your WhatsApp needs. 

👉 Please type *${prefix}menu* to see the bot menu!

❤ Made with love by Haki, thank you! 
`;

    const finalMessage = `${response}\n\n*powered by haki*`; // Customize with your watermark

    await message.send(
      "https://files.catbox.moe/bh2fpj.jpg", // Replace with your image URL
      { caption: finalMessage },
      "img",
      message
    );
  }
);

