/*Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30
*/


const skaiciai = [0, 1, 2, 3, 4];
const kiekis = skaiciai.length;
let suma = 0;

let index = 0;
for (let i=0; i <5; i++) {
    if (i +=1)
console.log('suma', i);}