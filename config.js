//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUE1TFlEbzlSWmpuUlFBUG5KRnZmNmp2NUNBT3lyTXVYL2QxSjhIbFIwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT295b0xlRG9ZVnpKSHRrcmtjTFk2R25vR3hnNVR2K2ZXSUFrZUx4UFprST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQVNkd1RqeFQrK2gyUWptQ2d3bk1UNGVSS01iYk40YW1jRWpEa25wYlhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvTTdBWXp2Mkg2U3dwTk04YnVMSU9WSlcwS3ozQkJ1RVNVTlNWaDNKS3hzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1DaG5pRHp6VUE1WEVQbGx2eExBbTlFRVdmckV1c0JWOXBPMHJtNkt6azg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRoS1AxbXpBclVjSmFCdVM2MXpSL3ZlTkxkRnlIY0FYeUJKa3lWVmgzalU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VtZVRPN2p1ZXFtR05pY2w4V0M2UzZ0Z2NqRDVHK0g3N25DZ1dDaVczWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmM3bWJNMmFESlpscGRabXRGakZTUEdyQXBJem1nWTZ2RmFNZ2dFc3cyMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpLNVRvUndZYlJzU0xzdzFIT0g3OWJzZVNLZFBiUE5RVnBnSGEybk5peEtYRzRJY0JaRDJ6aDI3blk2Rng0NUx2YjVKazRESHM1NGRjVThGRE1TakRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTMsImFkdlNlY3JldEtleSI6InYvZ1c1bER4U2duT3RlcUFlMVhHNFJFQno2MmdLWXIxelVtZVB6dWViN1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjdWRU1pUk8yVHgtb0VOeGs4VTN5TnciLCJwaG9uZUlkIjoiNTk2OGJkZTktNWUyOS00YzljLWE1OTUtNjk2NWZlZjVmY2ZiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRUMU5pTng0b2dCMTNpTzY0a052MEw0aHpmUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkbVYxZTdVbDFKVWRCYTBDeXY0RjhrTTBJL1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWURaMjU1QlEiLCJtZSI6eyJpZCI6IjUwOTM1Mjk5MjM4OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQXp1ciBNdXN0YXBoYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGZCbXFZSEVMUzdoTGdHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaHdMRWkwQWRhY1NqRGZTTUJoZldzTldJQlVWNkJFVHdreERHamRFMGpRQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoia3lTVWJNdHpJUGhVbWk1RCs5THV2eVVmV2JSVFRwL2I4N0U5NTNwVVJMcnFyeGQ5b3JHMzRJMFdBTHhFdHBrQWdMOUVnY0o3c1FpNUpOZzVzNDRlQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IlczbXNIS0JpNFlpRlF3ZWhRY2N3Y01NWGN0L2dGMGtSNDJwRDllc3FNZzk1TEpDdDdVWm12SFZiQXY5Wkw5b1J6dWxVOGxXdVpvL0tiOFBBd0JTeER3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5MzUyOTkyMzg6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZY0N4SXRBSFduRW93MzBqQVlYMXJEVmlBVkZlZ1JFOEpNUXhvM1JOSTBBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MTI2NDAxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFJVyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Azur Mustapha ™`",
  author: process.env.PACK_AUTHER || "Azur Mustapha",
  packname: process.env.PACK_NAME || "Azur Mustapha",
  botname: process.env.BOT_NAME || "𓄂⍣⃝𝙂𝙊𝘿𝄟✮͢≛⃝𝖋𝖑𝖊𝖆𝖚𝖝 𝑺۝𝖚𝖐𝖚𝖓𝖆",
  ownername: process.env.OWNER_NAME || "𓄂⍣⃝𝙂𝙊𝘿𝄟✮͢≛⃝𝖋𝖑𝖊𝖆𝖚𝖝 𝑺۝𝖚𝖐𝖚𝖓𝖆",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
