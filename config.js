const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="muhammadzahid10212020@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Muhammad786:Muhammad786@cluster0.fwvspqh.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://www.instagram.com/zidii_decent_boy?igsh=MXVobjVlMXBrYzcxbg==";
global.website=process.env.GURL || "https://www.instagram.com/zidii_decent_boy?igsh=MXVobjVlMXBrYzcxbg==" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/36eb746e1fbda08fccbe2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "> `𓆩𝐌𝐫ͥ𝒔ᷟ,𝐙፝፝֟֟𝒊𝙙𝒊𝒊𓆪`" 


global.devs = "923288330026" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923030773477";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923288330026";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/a2630572a234225a2959f.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923288330026,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_14_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICA4MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDY3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImgzUW4zamJ4VGwyWW5vQlZKajNMaUZId0xMSlhvUWw5L0cwVlVCckhjTE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjg4MzMwMDIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RUQzQTUxMjBFRUUwN0MyRUNDNEY1NDJFQTIwREZBQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4NDA0NzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyODgzMzAwMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdFRTFEOUI5NUU5QjgxOTc5QjYyM0NGNjEzQTVDQjBFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDg0MDQ3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmenN4Z1Rac1F3LWh1Um1raThJZW93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYxMjZjODVhLTBkNDMtNDNlNC05Y2IzLTNhYTJmY2UxOGUzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAxMDYsXG4gICAgICAxNTcsXG4gICAgICAxNzYsXG4gICAgICA2MCxcbiAgICAgIDE0OSxcbiAgICAgIDIxMSxcbiAgICAgIDE2NixcbiAgICAgIDk1LFxuICAgICAgMzYsXG4gICAgICAxNDIsXG4gICAgICAzNixcbiAgICAgIDIyMyxcbiAgICAgIDIzNCxcbiAgICAgIDE1NSxcbiAgICAgIDE0MixcbiAgICAgIDEyNyxcbiAgICAgIDE0MixcbiAgICAgIDE1OSxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDE1MixcbiAgICAgIDIxMixcbiAgICAgIDEzMCxcbiAgICAgIDI1NCxcbiAgICAgIDE1OCxcbiAgICAgIDI3LFxuICAgICAgOTIsXG4gICAgICAxNjUsXG4gICAgICAzNixcbiAgICAgIDI1NCxcbiAgICAgIDE5LFxuICAgICAgNzQsXG4gICAgICAxODUsXG4gICAgICAzLFxuICAgICAgMTY4LFxuICAgICAgMCxcbiAgICAgIDE1MSxcbiAgICAgIDE5OCxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJINVZGWUNNUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjg4MzMwMDIzOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTc2OTM1NTMwMjkxMjU6MjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiYPCThqnwnZCM8J2Qq82l8J2SlOG3nyzwnZCZ4Y2d4Y2d1p/Wn/CdkorwnZmZ8J2SivCdkorwk4aqYFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01lSTY4OEVFSlRpeDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid2N4eU5ZOHk0bjgyOUM5L3JmVzVuS3dyTDZFckxIVTJSTzFKQmw5dlhsST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoYXROdTNtb2VhRk42RHdieldPSDd2S29abSsxV2lXV0F6bVNMRzdmVVozci9OZ1hJWDdibE9VVk1sUnhDRlcwOFgrVFpGUUtkN0liOVgvQUZ0V1pCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2a0I2SklDRE05ZVV0SEVzM2xNd2NpbHo0NEV3NDlNeEZkamNJRlRTdnpDZElGamRlVndueE40K01BZkJqZXkwd3JhUDJuWW9oM00xUmJXQnZHYXRDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyODgzMzAwMjM6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg0MDQ3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1BR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUFHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQW5OVzFZK3g3cGd5RS8rcFFxdCtmTTdCOWpyTVhFL2NwTXVsOUJCUFVYdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQxMTcxMDE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4NDA0NzY2NjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ">,-.",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "> `𓆩𝐌𝐫ͥ𝒔ᷟ,𝐙፝፝֟֟𝒊𝙙𝒊𝒊𓆪`" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🦋",
  packname: process.env.PACK_NAME || "穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽",
  botname : process.env.BOT_NAME  || "`𓆩𝐌𝐫ͥ𝒔ᷟ,𝐙፝፝֟֟𝒊𝙙𝒊𝒊𓆪`",
  ownername:process.env.OWNER_NAME|| "𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙-𝙈𝘿",


  errorChat : process.env.ERROR_CHAT || "923288330026",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "MUHAMMAD"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "c9bef07d891699429f83c0057442986c";
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
