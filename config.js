import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['522431284029', 'ᴀsᴀʜɪɴᴀ ᴛᴀᴋᴛ', true], 
  ['522431067355', '✯𝐂𝐨𝐬𝐞𝐭𝐭𝐞✯', true],
  ['17146121800', ':𝓐𝓻𝓭 𝓜𝓮𝓽𝓮𝓸𝓻', true],
 ['522431268546'] 
  
] //Numeros de owner 

global.mods = [] // Moderadores
global.prems = ['50489079501', '5219631769130', '573125484672']  // El usuario Premium tiene diamantes ilimitado
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  zenz: 'https://zenzapis.xyz',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = '✯𝐂𝐨𝐬𝐞𝐭𝐭𝐞 -𝗕𝗢𝗧'
global.author = '𝔸ℕ𝕀𝕄𝔼𝕊 𝟚.𝟘'
global.igfg = '\n▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98._\n' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'

global.wait = '*⌛ _Cargando..._ ▬▬▬▭*'

global.multiplier = 999 // Cuanto más alto, más difícil subir de nivel


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
