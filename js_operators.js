
var a = 10, b = 5, c = 10;

//  exponential
console.log("10 ^ 3 = ",a ** 3);

for(var i=b; i>0; i--) {
    console.log(i);
}

console.log(b **= a);

/**
 * comparison operators
 * === -> equal value and equal type
 * !== not equal value and not equal type
 * ? -> ternary operators
 */


 /**
  * Type of operators
  * 
  * typeof ->  returns the value of a variable
  * 
  * instanceof -> returns true if an object is an instance of an object type
  */

  var num = 10;
  var str = "Hello World";
  var chr = 'a';
  var doubleValue = 10.0020202;
  var obj = new Array();
  
  console.log(typeof(num));
  console.log(typeof(str));
  console.log(typeof(chr));
  console.log(typeof(doubleValue));
  console.log(typeof(obj));

  /**
   * BitWise operators
   * AND -> &
   * OR -> |
   * NOT -> ~
   * XOR -> ^
   * ZERO FILL LEFT SHIFT -> <<
   * SIGNED RIGHT SHIFT -> >>
   * ZERO FILL RIGHT SHIFT -> >>>
   */

   console.log(a<<b);