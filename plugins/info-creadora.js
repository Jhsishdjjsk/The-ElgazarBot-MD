
import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
المشرف
*Wa.me/+201098906252* 
*Wa.me/+201098906252*
*---------------------*
*الايميل*
*elgazar@iissdontoninotricase.net*
*المالك*
*${asistencia}*

🧡 *هذه هي جهات الاتصال الخاصة بك*`.trim()  
let buttonMessage= {
'document': { url: `${md}` },
'mimetype': `تطبيق/${document}`,
'fileName': `✦ ELGAZAR-MD༄`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${md}`,
'mediaType': 2,
'previewType': 'pdf',
'title': 'Super Bot WhatsApp',
'body': wm,
'thumbnail': fs.readFileSync('./media/menus/Menu3.jpg'),
'sourceUrl': yt }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '🎁 تبرع'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: ' 🐻معلومات'}, type: 1}, 
{buttonId: `${usedPrefix}allmenu`, buttonText: {displayText: '💫 جميع الأمر'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `${wm}`
let oficial = 'ان واجهتك مشكلة لا تتردد في الاتصال بي'

await conn.sendHydrated2(m.chat, str, oficial, pp, 'https://github.com/ahme7', 'ELGAZARBOT-MD', 'https://youtube.com/@ABDALLAH_MOHAMED', 'يوتيوب', [
['☘ قائمة ', '/menu'],
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|المطور|المالك|dueña|مالك|dueño|creadora|creador)$/i
export default handler  
