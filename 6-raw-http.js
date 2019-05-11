const https = require('https')
const url = "https://api.darksky.net/forecast/675deefcf6a6e9267bfffb9034447ff7/40e,-75e" 

const request = https.request(url, (response)=>{
	let data = ''

	response.on('data', (chunk)=> {
		data = data + chunk.toString()
	})

	response.on('end', () => {
		const body = JSON.parse(data)
		console.log(body)
	})
})

request.on('error', (error)=>{
	console.log('An error', error)
})

request.end()