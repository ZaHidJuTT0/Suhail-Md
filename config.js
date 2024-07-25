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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_01_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDcxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgODMsXG4gICAgICAgIDU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM3LFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDE0LFxuICAgICAgICA5MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc5LFxuICAgICAgICA2MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRzFkQVYvQ0haenI4QnNVTVdhRWxLbGcwZk9GSFUwUnlNUkZ3RUw2MEI2VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN05UM0hENVhRb0dKY0lhSEN2NFd0QVwiLFxuICBcInBob25lSWRcIjogXCIyOTE2NmMxMS0wNmE2LTQ3OTEtYWMyMy02YjRiMDEyYjRjNTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMTM3LFxuICAgICAgMTQyLFxuICAgICAgOTAsXG4gICAgICA4NixcbiAgICAgIDU3LFxuICAgICAgMTk3LFxuICAgICAgMjE3LFxuICAgICAgMjEwLFxuICAgICAgMjEyLFxuICAgICAgNTYsXG4gICAgICAxNjAsXG4gICAgICAxNDYsXG4gICAgICAyMzIsXG4gICAgICAyMTgsXG4gICAgICAxMTEsXG4gICAgICAyMzksXG4gICAgICAyMzEsXG4gICAgICAyMixcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMjMsXG4gICAgICAyNDksXG4gICAgICAxMTgsXG4gICAgICAzNixcbiAgICAgIDIyNyxcbiAgICAgIDIyMixcbiAgICAgIDYyLFxuICAgICAgNyxcbiAgICAgIDE0MSxcbiAgICAgIDE3OSxcbiAgICAgIDE0OCxcbiAgICAgIDE2NCxcbiAgICAgIDE2OSxcbiAgICAgIDIyNyxcbiAgICAgIDQwLFxuICAgICAgMTU3LFxuICAgICAgNjAsXG4gICAgICAxMTYsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFc4SE5BTk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3NjMyNjIzMDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTg2NDg5NDEzNDY4NDE6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNajc3T2dIRU96ejhiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlp1ZTJLbGtVTlBMWTY1dVhpWUpIRjZqNUErOWhSYjlOVEVFTkNqcGdkeGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiREx2RWdZcmQvcTF2U1BDcnZIL1lFZzlvWmFpT1lsVEllWUpxakJWdTJWQmNHVXNNR1hrcjV4RFpROW1MbTFaaGhTTUFzWGZJUzcreHNXUTNMUms5QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSzg1ZkJHOG95cDk4bzhST0RpQnAxNDkzRmNxMDdDbkZyd0JrQW1YcWJ6NjdZQlc4Sk1UaC9oU3dka3dqTWpmSnczWmEya1h4REpRNWVmeG1lc0xOQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjc2MzI2MjMwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1MzA4NjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHS2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdLai5qc29uIjogIntcImtleURhdGFcIjpcIjlKaDhiYUh1QUpwd1F0c2loRjF6YkFVMkZrSjhtenhRWVcvWjcvczZWTms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA5ODkzNzI4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNTMwODY2ODUyXCJ9Igp9"  // PUT your SESSION_ID 


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
