import FileSystem from 'fs'


var yarHar = []
const fileToRead = "C:\Assignment8\sample.txt"

FileSystem.readFileSync('fileToRead', 'utf-8', (err, data) => {
    console.log(data)
})