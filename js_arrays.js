var x = ["sudipto", "shahin", "20", "5.5"];

console.log(x[0]);
console.log(x[1]);
console.log(x[2]);
console.log(x[3]);

for(var i=0; i<x.length; i++) {
    console.log("\n", x[i]);
}

for(var i=x.length; i>=0; i--) {
    console.log("\t"+ x[i]);
}