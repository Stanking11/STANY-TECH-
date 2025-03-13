const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: '' + b64data });

               let GIFTED_MD_TEXT = `

┏━━━━━━━━━━━━━━
┃𝚂𝚃𝙰𝙽𝚈-𝚃𝙴𝙲𝙷-𝚇𝙼𝙳❤️
┃𝙰𝙻𝚁𝙴𝙳𝚈 𝙻𝙸𝙽𝙺𝙴𝙳✅
┃𝚂𝙰𝙵𝙴 𝚃𝙾 𝙳𝙴𝙿𝙻𝙾𝚈💯
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
1®|| DEVELOPER 
©𝚂𝚃𝙰𝙽𝚈-𝚃𝙴𝙲𝙷™
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
2®|| OUR FAMILY  
https://whatsapp.com/channel/0029Vb8ixZ6DOQIPoX014p1k
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Please Subscribe My YouTube Channel
<https://youtube.com/@stanleytechnology?si=FRItJCOs0nWSADoq>
-------------------------
Chart with me 
https://wa.link/7pacy2
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Join our Crayz family 
chat.whatsapp.com/FDPHwoJOH56BuNF5pWKXWo
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©STANY-TECH™ 𝟸𝟶𝟸𝟻 𝙰𝙸 𝚆𝙾𝚁𝙻𝙳

_Thank you For Choosing Us Welcome Back_`
 await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id,{text:GIFTED_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Gifted_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await GIFTED_MD_PAIR_CODE()
});
module.exports = router
