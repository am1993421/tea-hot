// function fun(m) {
//     let result = 1;
//     for (let i = 1; i <= m; i++) {
//         result *= i;
//     }
//     return result;
// }

// function main() {
//     const readline = require('readline');
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.question('输入整数 n：', function (n) {
//         let sum = 0;
//         for (let i = 1; i <= n; i++) {
//             sum += fun(i);
//         }
//         console.log(`1~${n}的阶乘之和：${sum}`);
//         rl.close();
//     });
// }

// // 调用主函数
// main();

function sum(min, max) {
    return Math.floor(Math, random() * (max - min + 1)) + min;
}

module.exports = sum;