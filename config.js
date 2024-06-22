//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "astromedia0010@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Astropeda/WASI-MD-V3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/057b3ccce5c8efa2c7dc7.jpg";
global.devs = "2348039607375";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05nQVAvbXNCNHI1ZC9JSFpKNTJiMnhUdUpJYVMwbWdnYUpDSFphTGhIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlZhQTBwV0VBOURKL25BTnFvNlo2UFUyRWdoQVNtRGxWb3R2ZEVwK2psbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Q0d5TnFwRHl2MXpyZXNueHdNUWFIUnFwaEFnOHV5VnlEUXNpa1k2MFcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHYUthdDBYdzJuRDBjb3FvWHFZZGxjelhlUmNHUnNZSGVSVWtRM29odmhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFHSmVLakNDeVNSbkpmWkVIOGtuQXFrTG01MXRZUnllOUk1RnZIS3Y0WDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCc3VaRkJjZXdsV1Zqb1lqSVBFbTF4Q25EQ2VNaUpBL0tGNStHL3M4V3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUowNlN6QmRBZjdWVC9JY2VLYmZyMkFaR2U0MUpqSFhvREwzZklTZE4xVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTg5VE9HVVgrWFhYanhkc09zMnNXN1dTMWlMYlBXWjZqeGNEcmxLdzhEQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtKUkZHSGtKWjZlYUFEOXVuQXU2Z1hJK2lnQzhuK3ZzaG9xSGpKS1hvQ0RLdER0R1lMV3ZPc3llOGFBcS9RNTBKallzN2lZWlUwRDFCYTFpbTllN2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiIzOW05VTM4bE9RV1luZXZ5OWNENzVQMmxqS2FCdk5sUGM2aVQ1NFBWZmFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4SUlzVzNuSFRDeW0tMnktRmhkLXVnIiwicGhvbmVJZCI6IjRjODM0ZGU4LTk4MzItNGEzYi1iZjMzLWM1ZjQwYzFlMWNlYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSU5nZlg2Zi9MWlMzZWxaTXdNRS9ZdDkrYjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnFOTGw0R2pmWDVHOGpNb3VpNVhZejc3cnI4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5HRVFHOUwyIiwibWUiOnsiaWQiOiIyNjM3ODgwNDk2NzU6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QjPCdkJEg8J2QlvCdkIDwnZCS8J2QiCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1hxbnNzRkVJakYyck1HR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNk9CU29kMkFKZ05jQ2s2UXd4SlpGOXBHVzJNNE42YVRsMXhxeG9OTDhCWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoic2NlQ0JCQ3B4NE1hTkVHZk9ZbDF5QUZCUVFmQ3hvSUFvNEZjTXVURUhVRFQwSmdaNURUc24vRXphazNsTVNEK0ppU21OZ1UwNFpNVGRRZi9wK2x5Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6InVkVWUzczJOUElpNzZYeXlwellYSE10TjJLMU1lNVByRXFCM0Nkck0rNlBtUmcwNjFTZlBQQjNYaCtESjRBMmhINTY3aFNOdVVBYkVCZ1RFK05LY2pRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg4MDQ5Njc1OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVqZ1VxSGRnQ1lEWEFwT2tNTVNXUmZhUmx0ak9EZW1rNWRjYXNhRFMvQVcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTkwNTA5MDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHJ5In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "waai",
  author: process.env.PACK_AUTHER || "wasi",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ᴅ",
  ownername: process.env.OWNER_NAME || "ᴀ",
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
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
