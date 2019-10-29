// for (var i = 0, count = 0;; i++) {
//     for (var j = 0; j < i; j++) {
//         for (var k = 0; k < i; k++) {
//             if (j * j === i + 100 && k * k === i + 268) {
//                 console.log(i)
//                 count++
//                 break
//             }

//         }
//     }
//     if (count === 1) {
//         break
//     }
// }

for (var i = 1;; i++) {
    if (wqpfs(i + 100) && wqpfs(i + 268)) {
        console.log(i);
        break
    }
}

function wqpfs(n) {
    for (var j = 1; j <= n; j++) {
        if (j * j - n == 0) {
            return true;
        }
    }
}