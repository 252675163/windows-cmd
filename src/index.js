const child_process = require('child_process')
const colors = require('colors')
const iconv = require('iconv-lite');
const encoding = 'gbk';
// let std1 = child_process.exec('node -v',[],(err,stdout)=>{
//     // console.log(stdout)
// })

// std1.kill(0)
// console.log(std1)
// console.log(1)

let subProcess = child_process.spawn('cmd', [], {})
//消息监听，监听子进程的输出。并在主进程中打印出来。
let onData = (data) => {
    let encodeDagta = iconv.decode(data, encoding)
    process.stdout.write(encodeDagta); //获取当前进程，并在输出中写入某内容。关键是process表示的是当前进程
    console.log(encodeDagta)
}
let onError = (data) => {
    let encodeDagta = iconv.decode(data, encoding)
    process.stdout.write('12'); //获取当前进程，并在输出中写入某内容。关键是process表示的是当前进程
    console.log(encodeDagta)
}
//整个进程的错误监听
subProcess.on('error', function () {
    console.log("error");
    console.log(arguments);
});
//设置消息监听
subProcess.stdout.on('data', onData);
subProcess.stderr.on('data', onError);
subProcess.on('close', (code) => {
    console.log(colors.blue(`子进程退出码：${code}`));
}); // 监听进程退出
//向子进程发送命令
subProcess.stdin.write('asdasdasdas \n')
console.log(2)
// setTimeout(() => {
//     subProcess.stdin.end();
// }, 4000)