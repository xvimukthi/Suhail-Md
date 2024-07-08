const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/7baa86aa3b8f44413913f.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠɪᴍᴜᴋᴛʜɪ x 2005" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94785205012";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_04_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc1LFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MixcbiAgICAgICAgMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDgyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU2LFxuICAgICAgICA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNixcbiAgICAgICAgOTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICA2LFxuICAgICAgICA5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNCxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI2LFxuICAgICAgICA0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM1LFxuICAgICAgICA1MSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgODksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDksXG4gICAgICAgIDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvTWpnN3FreCtqTldwSnlwaGhIRnBkaFMzN08vdzgvVXdUMVE3dmU0U0o4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4MF93azRhZ1RzcU9iS2VUMnNkWjJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgyMGZjYTliLWU4MjQtNDE1Yy05YTFiLWE0OWI1YjI2MGY5NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAyNDksXG4gICAgICAyNDYsXG4gICAgICAzMixcbiAgICAgIDQ5LFxuICAgICAgMTksXG4gICAgICAyNixcbiAgICAgIDE2MyxcbiAgICAgIDExOCxcbiAgICAgIDIxOSxcbiAgICAgIDE1NCxcbiAgICAgIDExMixcbiAgICAgIDU2LFxuICAgICAgMjcsXG4gICAgICA2NixcbiAgICAgIDExOCxcbiAgICAgIDEzMyxcbiAgICAgIDE4MyxcbiAgICAgIDI5LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDIxMyxcbiAgICAgIDIyNyxcbiAgICAgIDE4NixcbiAgICAgIDI0OCxcbiAgICAgIDIxMixcbiAgICAgIDEzOSxcbiAgICAgIDIzOCxcbiAgICAgIDEwNyxcbiAgICAgIDQ2LFxuICAgICAgMTY0LFxuICAgICAgMjQsXG4gICAgICAyNyxcbiAgICAgIDc5LFxuICAgICAgMTE4LFxuICAgICAgNjQsXG4gICAgICAyMzgsXG4gICAgICA5NCxcbiAgICAgIDE1MCxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQUVA3MkNNTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODUyMDUwMTI6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNjUxODI2MDQ2OTg1OToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPTFgvSHdROTdld3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlLT0dqMTdTYXdBNXYvNTFpK2c4QzVqZ0YzZVJJSzJ5dGUwdHBXWkcwelU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU1RJcEZzNjlVaUJEb2s3TEtSNUg4Z2hWZm5pLzMzVXdSclNFM2lVazQ1eE93NnczaWYyODRBZFZBOGNkbk5uNFZ2Y1RRaHkycGNQaUVpOHpLaFpWQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS0EzK014SEJQV0k5c1Z0eW45SXBHUjBRUzY4dUdPQ1hsMnEzdGkvenMwVUFDTnp5WTBxTGUzbG5jODYrc29FRlFMdjRPUUVIS29rZ1hnM2g4K2xraFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3ODUyMDUwMTI6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDU4MjM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ0RLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDREsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaeTA5bzJUWUwvbDZ5cVNhVmhtRGdaelBMMXZIN1VEV09sc1NoLyt2QnVrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2MjA4OTY5MyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠɪᴍᴜᴋᴛʜɪ x 2005 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ᴠɪᴍᴜᴋᴛʜɪ ᴍᴅ",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴠɪᴍᴜᴋᴛʜɪ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Vimukthi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "VIMUKTHI"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
