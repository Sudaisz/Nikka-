const { smd } = require("../lib");
const { runtime } = require("../lib"); // Assuming you have a runtime function for uptime

smd(
  {
    pattern: "ping", 
    react: "⏳️", 
    desc: "Check the bot's latency and uptime", 
    category: "misc",
    filename: __filename,
  },
  async (m) => {
    try {
      const start = Date.now();

      // Calculate latency
      const latency = Date.now() - start;

      // Get the bot's uptime
      const uptime = runtime(process.uptime());

      // Enhanced style for the final message
      const finalMessage = `
╭━━━〘 *📡 PING STATUS* 〙━━━╮

      🤖 *Pong!*

      📶 *Latency:*  \`\`\`${latency}ms\`\`\`
      ⏳ *Uptime:*  \`\`\`${uptime}\`\`\`
      ⚡ *Server Speed:*  🚀 *Optimal*

╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭═•|✿| *𝙉𝙄𝙆𝙆𝘼 𝘽𝙊𝙏𝙕 ⁱⁿᶜ* |✿|•═╮
      🔰 *reliable bot company by haki* 🔰
╰════════════════════════╯
      `;

      // Send the image with the more styled latency and uptime message as a caption
      await m.send(
        "https://files.catbox.moe/bh2fpj.jpg", // Replace with your image URL
        { caption: finalMessage },
        "img",
        m
      );

    } catch (e) {
      m.error(`${e}\n\nCommand: ping`, e, false);
    }
  }
);


smd({
   cmdname: "use",
   desc: "Counts the commands used by users after starting bot?",
   category: "misc",
   filename: __filename
 }, async _0x297641 => {
   try {
     let _0x38bc51 = [];
     const _0x2dd06e = {};
     commandHistory.forEach(({
       user: _0x530cb4,
       command: _0x1c35dd
     }) => {
       if (!_0x2dd06e[_0x530cb4]) {
         _0x2dd06e[_0x530cb4] = {
           commands: {},
           count: 0
         };
         _0x38bc51.push(_0x530cb4);
       }
       if (!_0x2dd06e[_0x530cb4].commands[_0x1c35dd]) {
         _0x2dd06e[_0x530cb4].commands[_0x1c35dd] = 1;
       } else {
         _0x2dd06e[_0x530cb4].commands[_0x1c35dd]++;
       }
       _0x2dd06e[_0x530cb4].count++;
     });
     const _0x5513e2 = _0x38bc51.map((_0x4cd261, _0xf43b6c) => {
       const _0x24712d = _0x2dd06e[_0x4cd261].commands;
       const _0x48255c = Object.entries(_0x24712d).map(([_0x4d2ffd, _0x534145]) => _0x4d2ffd + " " + (_0x534145 <= 1 ? "" : "(" + _0x534145 + ")")).join(", ");
       return "*" + (_0xf43b6c + 1) + " -- @" + _0x4cd261.split("@")[0] + "'s ➪ " + _0x2dd06e[_0x4cd261].count + "*  \n *LIST ➪*  _" + _0x48255c.trim() + "_";
     }).join("\n\n");

     var _0x17ca33 = ("*LIST OF COMMANDS USED TODAY!*\n_Note: Data will be reset when bot restart!_\n\n*Total Users: _" + _0x38bc51.length + "_*\n*Total Command Used: _" + commandHistory.length + "_*\n\n" + _0x5513e2 + "\n\n" + Config.caption).trim();

     // Add your image URL here
     const imageUrl = "https://files.catbox.moe/bh2fpj.jpg"; // Replace with your image URL

     await _0x297641.send(
       imageUrl,
       { caption: _0x17ca33 },
       "img",
       _0x297641
     ); // Send the image with the message
   } catch (_0x48863b) {
     await _0x297641.error(_0x48863b + "\n\ncommand : cmdused", _0x48863b, "*ERROR!*");
   }
 });