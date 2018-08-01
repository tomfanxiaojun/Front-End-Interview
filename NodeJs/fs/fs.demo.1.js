var fs = require('fs');
try{
  let data = fs.readFileSync('./fileForRead.txt', 'utf8');
  console.log(data)
}catch(err) {
  console.log('读取文件失败: ' + err.message)
}