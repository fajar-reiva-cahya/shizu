/*
Base By: Lezz DcodeR
Recode By: Your Name

Sosmed Creator Base:
- Tiktok Creator: https://tiktok.com/@lezzzcoder
- Github Creator: https://github.com/kyxle21
- YouTube Creator: https://youtube.com/@lezzdcoder

Jangan Lupa Untuk Menyebarkan Cinta [ ♥️ ] Dengan Membiarkan Credit Ini Tetap Ada
*/

const fs = require('fs')
const chalk = require('chalk')

//Settings
global.owner = "6281915843156"
global.namabot = "Base"

/*
global.img = fs.readFileSync('./tempat/gambar/anda.jpg')
global.aud = fs.readFileSync('./tempat/audio/anda.mp3')
*/
global.msg = {
Group: "Fitur ini hanya bisa di gunakan di group chat",
Owner: "Fitur ini hanya bisa di gunakan oleh owner bot",
Premium: "Fitur ini hanya bisa di gunakan oleh user premium, buy premium?chat me",
Proses: "Tunggu sebentar, permintaan anda sedang di proses..."
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})