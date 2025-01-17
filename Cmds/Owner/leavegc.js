const ownerMiddleware = require('../../utility/botUtil/Ownermiddleware'); 

module.exports = async (context) => {
    await ownerMiddleware(context, async () => {
        const { client, m, Owner, participants } = context;


if (!m.isGroup) return m.reply("This command is meant for groups");

await client.sendMessage(m.chat, { text : 'Goodbye 👋, 🐝𝐁𝐔𝐌𝐁𝐋𝐄 𝐁𝐄𝐄🐝 will now exit the group...' , mentions: participants.map(a => a.id)}, { quoted: m });
await client.groupLeave(m.chat); 

})

}
