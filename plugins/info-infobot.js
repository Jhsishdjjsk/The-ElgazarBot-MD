import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let pp = './media/menus/Menu1.jpg'
let old = performance.now()
let neww = performance.now()
let speed = neww - old

let info = `
╭━━━━[ ${gt} ]━━━━━⬣
┃
┃➥ *المالك*
┃ღ *abdallah (ELGAZAR) 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *انستغرام* 
┃ღ *${ig}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃𓃠 *اسضار*
┃ღ ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *بادئه*
┃ღ *${usedPrefix}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ * | دردشة خاصة*
┃ღ *${chats.length - groups.length}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *| قروبات*
┃ღ *${groups.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *جميع للمحادثات *
┃ღ *${chats.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *نشاط*
┃ღ *${uptime}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *المستعملون*
┃ღ *${totalreg}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *سرعة*
┃ღ  *${speed}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *قراءة تلقائية*
┃ღ ${autoread ? '*تنشيط ✔*' : '*الغاء تنشيط ✘*'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *تقيد* 
┃ღ ${restrict ? '*تنشيط ✔*' : '*الغاء تنشيط ✘*'} 
┃
╰━━━[ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 ]━━⬣`.trim()

conn.sendHydrated(m.chat, info, wm, pp, 'https://github.com/ahmed1p7', 'YUNA BOT', null, null, [
['𝙑𝙚𝙧 𝙂𝙧𝙪𝙥𝙤𝙨 | 𝙎𝙚𝙚 𝙂𝙧𝙤𝙪𝙥𝙨', '#grupolista'],
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨', '/cuentasgb'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '.menu']
], m,)
//conn.reply(m.chat, info, m)
}
handler.help = ['infobot']
handler.tags = ['info', 'tools']
handler.command = /^(infobot|informacionbot|infogata|informacióngata|informaciongata)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
