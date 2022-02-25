//1.导入fs模块 来操作文件
const fs = require('fs')

//2.调用readFile方法读取文件
fs.readFile('./files/1.txt', 'utf-8', function(err, dataStr) {
    console.log(err);
    console.log('-----------');
    console.log(dataStr);
})