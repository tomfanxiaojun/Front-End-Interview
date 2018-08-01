const fs = require('fs');
// import fs from 'fs'
fs.readFile('./fileForRead.txt', 'utf8', (err, data) => {
  if (err){
    console.log(`Read File fail: ${err.message}`);
    return ;
  }
  console.log(data)
})