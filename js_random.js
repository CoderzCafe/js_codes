
// console.log(Math.floor(Math.random() * 10));
var x = Math.random() * 10;
// while(x < 10) {
//     console.log(x);
//     x = Math.random() * 10;
//     if(x > 9) {
//         break;
//     }
// }

// var a = Math.random() * 10;

// while(x < 100) {
//     console.log(x);
//     a = Math.random() * 10 +1;
//     if(x == 100) {
//         break;
//     }
    
// }


// for(var i=0; i<3; i++) {
//     var x = Math.floor((Math.random() * 10) + 1);
//     while(x < 10) {
//         console.log(x);
//         x = Math.floor((Math.random() * 10) + 1);
//     }
// }

//  break
// for(var x=0; x<10; x++) {
//     if(x == 3) {
//         break;
//     }
//     console.log(x);
// }

//  continue
for(var i=0; i<10; i++) {
    if(i == 3) {
        continue;
    }
    console.log(i);
}

var str = "please visti coderzcafe.com";
var n = str.search("coderzcafe");
console.log("\n Search result on : " +n);
