import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}استخدم كما يلي\n*${usedPrefix + command} ELGAZAR*\n*${usedPrefix + command} Cat*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `💞 نتيجه البحث: ${text}`, `بحث جوجل | ${wm}`, link, link, '☘️ الرابط', null, null, [
['🔄 الصوره التاليه', `/image ${text}`],
//['🔍 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 ', `#pinterest ${text}`],
['💟 الاوامر', `.menu`],  
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(صورة|image|صوره)$/i
handler.exp = 20
export default handler
