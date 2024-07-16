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
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923288330026,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_19_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY4LFxuICAgICAgICA5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUxLFxuICAgICAgICA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY0LFxuICAgICAgICA5LFxuICAgICAgICA5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNixcbiAgICAgICAgOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMixcbiAgICAgICAgMjM3LFxuICAgICAgICA3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDkxLFxuICAgICAgICA3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNixcbiAgICAgICAgMTUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODksXG4gICAgICAgIDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgODYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDc4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY1LFxuICAgICAgICA5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU4LFxuICAgICAgICA3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICA1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAzMCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg3LFxuICAgICAgICA3OCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAwLFxuICAgICAgICAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNixcbiAgICAgICAgMTAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxZZGtuRktjdG9DNHNVUVdPN3IwVjBNbk8xMzNZV0pRTnI0ZlBxUXRiSTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjg4MzMwMDIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQkIxMTlGMUI3RjEyOUYyRDFBNDQ5ODkxRUU3N0I3RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwNjM5NDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyODgzMzAwMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAyRDA0NDM0OUJBREQ2NjZEMDgzODI3MTk5QjQxNUM3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA2Mzk0NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI4ODMzMDAyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTUwQzFFN0Y3NEMzQ0VFNUU3NTFCQUE5MzgyOTQzMjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDYzOTQ5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjg4MzMwMDIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQzg3NjVBQzAwQkYyOURDNEJEMUJDRjc5MUYwRENDOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwNjM5NDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTDVNTGJnZTBUdjZTb2wxLTRWWmZad1wiLFxuICBcInBob25lSWRcIjogXCI0ZmJhZTZmNS02NmY1LTQwZDEtYjU4Yi0wN2I3Njg2NjUwYzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMzYsXG4gICAgICAxMzQsXG4gICAgICAxNzIsXG4gICAgICA5MCxcbiAgICAgIDE1LFxuICAgICAgNjAsXG4gICAgICA2OCxcbiAgICAgIDEyOSxcbiAgICAgIDIyLFxuICAgICAgMTIwLFxuICAgICAgNTAsXG4gICAgICAxNDEsXG4gICAgICA0MSxcbiAgICAgIDMzLFxuICAgICAgMTA0LFxuICAgICAgNDksXG4gICAgICAxNzAsXG4gICAgICAxMjQsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDc2LFxuICAgICAgNjUsXG4gICAgICAxMTIsXG4gICAgICAyMTksXG4gICAgICA5LFxuICAgICAgODIsXG4gICAgICAyMzEsXG4gICAgICAxMzYsXG4gICAgICA1NSxcbiAgICAgIDE2NCxcbiAgICAgIDIyNSxcbiAgICAgIDQ5LFxuICAgICAgMjI3LFxuICAgICAgMTk1LFxuICAgICAgMjE3LFxuICAgICAgMTc0LFxuICAgICAgMTE3LFxuICAgICAgMzAsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzVNRjZNNkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI4ODMzMDAyMzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk3NjkzNTUzMDI5MTI1OjI1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcImDwk4ap8J2QjPCdkKvNpfCdkpTht58s8J2QmeGNneGNndaf1p/wnZKK8J2ZmfCdkorwnZKK8JOGqmBcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKL1kwVFVRZzdUVnRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlU1TmxzZHdPbEdsYnF0VW10MVhqL25RM0RNdllwaGZ4TXhiK0htYnpEM2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYmZlTXoyZEk3UXdCNmQza3h4dGRxZVJiTG9aK1YwSFVVaE1YQ0V3TTJDL1pwQXMrMHcyTDFCWUhUaGZ1d2hUN2lZK0d3eXlqZnA5RHhzVHoxL3FxREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMTNuSWx6OVhaMnZEa0F1RithYnl0VytFSk9UTUFVck03V2k1Wlo1M3dOSHMxSUZwaUVKeDE5ZTUzR3NMR1JTZ3MxMkxhZzR1WHg5UEI3UUpweHE3amc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjg4MzMwMDIzOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDYzOTQzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTC9TXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFML1MuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
