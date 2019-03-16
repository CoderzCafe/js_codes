var str1 = "Please locate where to \'locate\' occurs.!";
console.log(str1);
var pos = str1.search('locate');
console.log(pos);

//  trim method
var str = "    Hello world";
console.log(str.trim());

if(!String.prototype.trim) {
    String.prototype.toLocaleLowerCase = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    }
    var str = "     h e   ll o  o  wor  l d";
    console.log(str);
}