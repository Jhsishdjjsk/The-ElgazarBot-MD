import fs from 'fs'

let timeout = 60000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekatek = conn.tekatek ? conn.tekatek : {}
    let id = m.chat
    if (id in conn.tekatek) {
        conn.reply(m.chat, 'لا تزال هناك ألغاز لم تتم الإجابة عليها في هذه الدردشة ', conn.tekatek[id][0])
        throw false
    }
    let tekatek = JSON.parse(fs.readFileSync(`./src/game/tap.json`))
    let json = tekatek[Math.floor(Math.random() * tekatek.length)]
    let _clue = json.جواب
    let clue = _clue.replace(/[A-Za-z]/g, '_')
    let caption = `
ⷮ *${json.سوال}*

*• الوقت:* ${(timeout / 1000).toFixed(2)} ثانيه
*• بونو:* +${poin} Exp
`.trim()
    conn.tekatek[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekatek[id]) await conn.reply(m.chat, `انتهى الوقت !\n*جواب:* ${json.جواب}`, conn.tekatek[id][0])
            delete conn.tekatek[id]
        }, timeout)
    ]
}

handler.help = ['tap']
handler.tags = ['game']
handler.command = /^(tap|رتب|pregunta|adivinanza|tekatek)$/i

export default handler