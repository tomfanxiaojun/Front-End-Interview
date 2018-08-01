const fs = require('fs');
const readStream = fs.createReadStream('./fileForRead.txt', 'utf8');

readStream.on('data', (chunk) => {
    console.log(chunk);
    console.log('===========>')
})