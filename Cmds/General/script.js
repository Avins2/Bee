//ping.js

module.exports = async (context) => {
        const { client, m } = context;


await client.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/hMoe3Rr.jpeg' }, caption: '🐝𝐁𝐔𝐌𝐁𝐋𝐄 𝐁𝐄𝐄🐝 REPO\n\nhttps://github.com/Blackarab-tech/Bee\n\nFork and star ✨'}, {quoted: m});

}