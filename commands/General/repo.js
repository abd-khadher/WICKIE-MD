
const { tlang,botpic } = require('../../lib')
module.exports = {
    name: 'repo',
    category: 'general',
    alias: ["script", "git", "sc"],
    desc: 'Sends userbot github repo link.',
    async exec(citel, Void) {
        
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: `Hey ${citel.pushName}\n*This is wickie md repo*\n\n*Repo:* https://github.com/abd-khadher/WICKIE-MD\n\n*Whatsapp Group:* https://chat.whatsapp.com/HMJQZqjClNgKOitnskMpbJ `,
            footer: ` ` + tlang().footer,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: "WICKIE-MD REPO",
                body: "Easy to Use",
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://github.com/abd-khadher/WICKIE-MD`,
                sourceUrl: `https://github.com/abd-khadher/WICKIE-MD`,
              },
            },
          };
          await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
          });
 
    }
 }
      
