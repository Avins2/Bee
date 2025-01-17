module.exports = async (context) => {
    const { client, m, prefix } = context;

const botname = process.env.BOTNAME || "🐝𝐁𝐔𝐌𝐁𝐋𝐄 𝐁𝐄𝐄🐝";

 await client.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/KUUYRbq.jpeg' }, caption: `Hello ${m.pushName}, 🐝𝐁𝐔𝐌𝐁𝐋𝐄 𝐁𝐄𝐄🐝 is active now.\n\nType ${prefix}menu to see my command list..\n\nXd );`, fileLength: "9999999999898989899999999" }, { quoted: m }); 

}