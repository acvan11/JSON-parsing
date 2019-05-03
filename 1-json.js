const fs = require('fs')

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json') // read json file into binary data

// const dataJSON = dataBuffer.toString() // convert the binary data into string
// const data = JSON.parse(dataJSON) // convert data into object data
// console.log(data.title)

const dataJSON = fs.readFileSync('1-json.json') // read json file into binary data
const data = dataJSON.toString() // convert that binary data into string
const dataObject = JSON.parse(data) // convert the string into Object data
dataObject.age = 13 // change the value of object property
dataObject.name = 'Andy Cool'

const newJSONData = JSON.stringify(dataObject) // convert the object into json data
console.log(data)
fs.writeFileSync('1-json.json', newJSONData) // overwrite the json file