let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw `${lenguajeGB['smsAvisoMG']()} اكتب سؤالك ليتم الرد عليه\nمثل\n*${usedPrefix + command} Hoy va llover?*`   
let pre = `╭━〔 سؤال 〕━⬣  
سوال:  *${text}*
✅ جواب: *${['لا','اي', 'ممكن', 'امممم بفكر', 'اكيد لا', 'ربما لا', 'ربما نعم', 'بفكر في امر' ].getRandom()}*
༺════ •⊰『 𝑬𝑳𝑮𝑨𝒁𝑨𝑹 𝑩𝑶𝑻 』⊱• ════༻`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, 'ELGAZAR BOT', null, null, [
['معاودة السوال', `${usedPrefix + command} ${text}`]
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|سوال$/i  
export default handler






