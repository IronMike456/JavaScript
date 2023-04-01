let a=2, b=3, c=4, v="16", v2=16; 

let z = a*b + c; 
console.log(z);
//--> izquierdfa a derecha
let z1 = c+a*b; 
console.log(z1); 

let z2 = a +b*c/a;
console.log(z2) 

//asognacion de operadores

a *= 4; 
console.log(a)

a /= 4; 
console.log(a)

a %= 4; 
console.log(a)

a **= 4; 
console.log(a)

//operadores de comparacion

let z4 = a==b; // revisa el valor sin considerar el tipo
console.log(z4)
let z5 = a===v; // revisa el valor considerando el tipo
console.log(z5)
let z6 = a===v2; // revisa el valor considerando el tipo
console.log(z6)