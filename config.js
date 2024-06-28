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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_03_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY3LFxuICAgICAgICA1OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTExLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDYzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMixcbiAgICAgICAgNSxcbiAgICAgICAgMTExLFxuICAgICAgICA0MCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICAyNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5LFxuICAgICAgICA4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5oQjdJbktGSXJkM2s1anh6WDZubGxUM21lUDUrVjVwc3ZXdDZMOUpncms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZacW9MZkFBU1RpN1VxQ0ppSWxpUkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjY0ODY2NDgtYzMxNi00ZmJiLTgyMzctMDIyNWU4OTYyZWExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgMzcsXG4gICAgICA4LFxuICAgICAgMTc1LFxuICAgICAgMTAwLFxuICAgICAgMTc1LFxuICAgICAgMTQ4LFxuICAgICAgMjA3LFxuICAgICAgMTY2LFxuICAgICAgMTE4LFxuICAgICAgMTgyLFxuICAgICAgMTM4LFxuICAgICAgMTcxLFxuICAgICAgMTM5LFxuICAgICAgNTgsXG4gICAgICA4NSxcbiAgICAgIDEwMyxcbiAgICAgIDI1MixcbiAgICAgIDQ5LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDI0OSxcbiAgICAgIDk2LFxuICAgICAgMTAsXG4gICAgICAyMDQsXG4gICAgICAyNSxcbiAgICAgIDI0NCxcbiAgICAgIDk5LFxuICAgICAgMTY3LFxuICAgICAgMTcsXG4gICAgICAxMjYsXG4gICAgICAyMTEsXG4gICAgICAxODgsXG4gICAgICA1NCxcbiAgICAgIDExMCxcbiAgICAgIDk0LFxuICAgICAgOTksXG4gICAgICA2MSxcbiAgICAgIDY3LFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUVBRkNBU0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEwNDY5NzgwMDoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODYwNDE1MzI4NjI1MjQ6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHFFcDdvQ0VQM1ArTE1HR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLZmVOdFJsMzBkL09Qek1zWURDUHMrUlp0dGpHSnk3NkFUY0k1VmxBelNNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1JN1JoNWhXdVFMbDRVb25LNEhrS2VyQ2Fib1BoeDI0VDVHTjByeEI5ZWcyYVVlRHgrTThIeXcrR0wrdWNIMGg1S0N1M0x6ZFA1bW9WQTJYRXRWR0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRYZWZmT2pTRDhzQm1CZEFrOHJBVE82czB3emNFeDMvZmtUYlorNTh6YzBqVjRMY2l2SVZZOUJwTFJKamVwR2xOUXRnZlJPcnBja1FZOWRSOTI0TGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEwNDY5NzgwMDoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTU0MzgwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVrbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWtsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUUpZYi9OZnljejY2ZmpTRzNJLzFzdE1POUxWbCs1M0FBZm5vRU15OHEybz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NTkxNDUyNzEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
