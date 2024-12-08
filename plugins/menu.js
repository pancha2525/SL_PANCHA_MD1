const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search:''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `☠*Hello ${pushname}*💖
> *DOWNLOAD COMMANDS* 😈

${menu.download}

> *MAIN COMMANDS* 😉

${menu.main}

> *GROUP COMANDS* 💥

${menu.group}

> *OWNER COMMANDS* 🐱‍👤

${menu.owner}

> *CONVERT COMMANDS* 🔥

${menu.convert}

> *SERCH COMMANDS* ⭐

${menu.serch}

👋 *POWERD BY SL_PANCHA_MD WHATSAPP BOT* ✅
`
await conn.sendMessage(from,{image:{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzKnIhLO5SjLoUg8dGxYxiE7OdqL65l_nXQ&s"},caption:madeMenu},{quoted:mek})




}catch(e){
console.log(e)
reply(`${e}`)
}
