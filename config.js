const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
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
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/36eb746e1fbda08fccbe2.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_23_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNixcbiAgICAgICAgMTg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU3LFxuICAgICAgICA1LFxuICAgICAgICA2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDkxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MSxcbiAgICAgICAgMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE0LFxuICAgICAgICA3LFxuICAgICAgICA4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgODQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDU5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibzc3VGJmNHNySzdQYWYvZGtOV0I0cHRuL2NyMW1KL2t0U3oxZWdmekpHbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyODgzMzAwMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE1MkVCRkJCN0E3M0E0OTM2MDg4QUMxNUZCMjAyRjkzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODMwMzAzMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI4ODMzMDAyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkU4NDIxQzg5QTMyMTc4ODIyMjkxQkIzODJGQjJGREFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MzAzMDMwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkx6cWpmRl9hU2h5LW43b0NlbEVTdWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjhlMTg0OTItMDhmNS00NWYyLWIzNjItNWY3ZmQ3OGE3MzViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgMjE5LFxuICAgICAgNjYsXG4gICAgICAzMSxcbiAgICAgIDIyOSxcbiAgICAgIDE4OSxcbiAgICAgIDI1MixcbiAgICAgIDEzOCxcbiAgICAgIDEyMCxcbiAgICAgIDgzLFxuICAgICAgMzQsXG4gICAgICAxNTcsXG4gICAgICA4NyxcbiAgICAgIDE3NyxcbiAgICAgIDIzOCxcbiAgICAgIDk3LFxuICAgICAgMjA2LFxuICAgICAgMTEzLFxuICAgICAgMTA1LFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgMjYsXG4gICAgICA4OCxcbiAgICAgIDEwMyxcbiAgICAgIDEyNCxcbiAgICAgIDM0LFxuICAgICAgMTc3LFxuICAgICAgMTI4LFxuICAgICAgMTc2LFxuICAgICAgMTcyLFxuICAgICAgMTU0LFxuICAgICAgNjksXG4gICAgICAyMjksXG4gICAgICA5OSxcbiAgICAgIDIwNyxcbiAgICAgIDE5MyxcbiAgICAgIDI0MCxcbiAgICAgIDE1NixcbiAgICAgIDE0NyxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLSktXTEhRR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjg4MzMwMDIzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NzY5MzU1MzAyOTEyNTozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIns9w5fDlz3Dl8OXwrA9fX09w5d9PVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01IZnMvUURFTEh5ckxNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid2ZWQW9LbFh4QlozSnJWTFBuV09va3dYeVk0NFREL3M5YWhUM0d6VkFCTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyMHJhem9zRVZERU1EM3dXMGhhWmppWlhWNGJGOTZ6bHNIWnJMeUpCRVFGQndWNUNCcjlDU0l2U0Q1cDkveGJ6ekJWOEh3Q29lZ29mcXluOFpiWnZEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCNWoxNW1WV3Q2V0kxYVdnOWZMTnduWWtWb1RvMXdGMjRtNUlOTFRCQ2cySG5LbGpzK2I0cGdYbjRHVHpJUk95VW5pVjdKMXJXTkF4MDUyRlVxaVhBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyODgzMzAwMjM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODMwMzAyOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU0rL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTSsvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ">,-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "> `𓆩𝐌𝐫ͥ𝒔ᷟ,𝐙፝፝֟֟𝒊𝙙𝒊𝒊𓆪`" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🦋",
  packname: process.env.PACK_NAME || "穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽",
  botname : process.env.BOT_NAME  || "`𓆩𝐌𝐫ͥ𝒔ᷟ,𝐙፝፝֟֟𝒊𝙙𝒊𝒊𓆪`",
  ownername:process.env.OWNER_NAME|| "𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙-𝙈𝘿",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "Public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
