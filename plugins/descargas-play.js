import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `عن ماذا تبحث؟ الرجاء إدخال الأمر بالإضافة إلى اسم الأغنية\n\n*—◉ مثال:\n#شغل انمي ناروتو*`
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `📌 *العنوان:*: ${title}\n📆 *وقت النشر:* ${published}\n👀 *المشاهدات:* ${views}`
const buttons = [{buttonId: `#menu`, buttonText: {displayText: '🎶 الاوامر 🎶'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*انتظر لحظه يتم ارسال الصوت...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})

if (command == 'play2') {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let vid = await jsonn.result.video
let capt = `📌 *العنوان:*: ${title}\n📆 *وقت النشر:* ${published}\n👀 *المشاهدات:* ${views}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '𓃠 كل النتائج'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*انتظر لحظه يتم ارسال الفيديو...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `🔰 ها هو الفيديو الخاص بك`, m)}
} catch (e) {
m.reply('*❗خطأ ، الخادم لأسفل ، حاول جديد من فضلك*')
}}
handler.help = ['play', 'play2', 'شغل'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = ['play', 'play2', 'شغل']
export default handler
