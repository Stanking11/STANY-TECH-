const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Wasi_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function WASI_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Wasi_Tech = Wasi_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Wasi_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Wasi_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Wasi_Tech.sendMessage(Qr_Code_By_Wasi_Tech.user.id, { text: '' + b64data });
	
				   let WASI_MD_TEXT = `

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
https://youtube.com/@stanleytechnology?si=FRItJCOs0nWSADoq
-------------------------
Chart with me 
https://wa.link/7pacy2
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Join our Crayz family 
chat.whatsapp.com/FDPHwoJOH56BuNF5pWKXWo
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©STANY-TECH™ 𝟸𝟶𝟸𝟻 𝙰𝙸 𝚆𝙾𝚁𝙻𝙳

_Thanks For Choosing Us Welcome Back_`
	 await Qr_Code_By_Wasi_Tech.sendMessage(Qr_Code_By_Wasi_Tech.user.id,{text:WASI_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Wasi_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					WASI_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await WASI_MD_QR_CODE()
});
module.exports = router
