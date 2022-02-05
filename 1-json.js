const fs = require('fs')

// const dataBuffer=fs.readFileSync('fs-JSON.json')


// const data = JSON.parse(dataBuffer)
// console.log(data.title)


const book= 
{
    title : 'love in the moon',
    author: 'ranaa',
   
}

const dataBuffer = fs.readFileSync('fs-JSON.json')

 const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name='Bassel'
data.age=23

const dataToString=JSON.stringify(data)
fs.writeFileSync('fs-JSON.json',dataToString)




//  const bookJSON = JSON.stringify(dataJSON)
//  const bookJSON1 = JSON.stringify(bookJSON)


// fs.writeFileSync('fs-JSON.json',bookJSON)
// console.log(bookJSON.title)


// const bookAsObj = JSON.parse(bookJSON)
// console.log(bookAsObj.title)
