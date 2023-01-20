import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*عن ماذا تبحث الرجاء إدخال الأمر بالإضافة إلى اسم الأغنية*\n\n* مثال:*\n*${usedPrefix + command} انمي ناروتو*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: '🎵 ملف صوتي 🎵' }, type: 1 },
{ buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: '🎥 ملف فيديو 🎥' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '📋 كل النتائج 📋' }, type: 1 }, ] 
let texto1 = `*╭───≪~*╌◌ᰱ•••⃙❨͟͞تشغيل يوتيوب❩⃘•••ᰱ◌╌*~*
│║📌 *العنوان:* ${title}
│║📆 *مده النشر:* ${publishedTime}
│║⌚ *المده:* ${durationH}
│║👀 *المشاهدات:* ${viewH}
│║📇 *الوصف:* ${description}
│║🔗 *الرابط:* ${urll}
│║
│║        *████████████┃%100*
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤`.trim()
let buttonMessage = { "document": { url: "https://wa.me/5219992095479" }, "fileName": '❏ 🌿 تشغيل يوتيوب', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `*╭───≪~*╌◌ᰱ•••⃙❨͟͞تشغيل يوتيوب❩⃘•••ᰱ◌╌*~*
│║📌 *العنوان:* ${title}
│║📆 *وقت النشر:* ${published}
│║👀 *المشاهدات:* ${views}
│║🔗 *الرابط:* ${url}
│║
│║        *████████████┃%100*
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '📋 كل النتائج 📋'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*انتظر لحظه يتم ارسال المقطع الصوتي...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*❗خطأ حاول مره اخري*'}}}
handler.help = ['playdoc', 'play3', 'تشغيل'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|تشغيل|playdoc?$/i
handler.money = 50
handler.register = true
export default handler
