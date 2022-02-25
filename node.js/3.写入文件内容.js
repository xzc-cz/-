//1.导入文件系统模块
const fs = require('fs')

//2.调用fs.writeFile方法写入文件内容
fs.writeFile('./files/2.txt', 'abcd', function(err) {
    //若文件写入成功,err值为null
    //若失败err值等于一个错误对象
    console.log(err);
})