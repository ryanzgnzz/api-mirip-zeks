const fs = require('fs')

global.creator = 'RyanzOfc' 
global.apikey = ["YanzBotz", "iyangamteng", "RyanzKintil","ryanzbot"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
