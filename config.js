const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.prod.website-files.com/5e42772e6a8cfd42a9715206/63bc29683144b8208a46de43_LANDBOT-HOW-TO-CREATE-A-WHATSAPP-CHATBOT-300%20(1)-p-800.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am SL_PANCHA_MD BOT I am alive now!",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "flasc",
MODE: process.env.MODE || "private",
};
