var a =  15;
var value1 = a++ + ++a  -  --a;
console.log(value1);

var value2 = ++a + ++a - --a + a-- + a - a - a++ - --a;
console.log(value2);
