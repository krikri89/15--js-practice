/*Funkcija pavadinimu “tusciaFunkcija”:
nepriima jokių kintamųjų
neatlieka jokios vidinės logikos
gražina boolean tipo reikšmę “false”
TESTAS:
console.log( tusciaFunkcija() );
rezultatas: false
*/

function tusciaFunkcija(a) {
  return a % 0;
}
let num = tusciaFunkcija(99999);
console.log("rezultatas", Boolean(num < 0));
console.log("-----------------------------------------");
/*Funkcija pavadinimu “daugyba”: priima du skaičiaus tipo kintamuosius; atskirame kintamajame įsimena sandaugos reikšmę; gražina saudaugos rezultatą
TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės;*/

function daugyba(a, b) {
  return a * b * a;
}

let s2 = daugyba(4, 3);
console.log(s2);

function daugyba2(skaicius1, skaicius2) {
  return skaicius1 * skaicius2 * skaicius1;
}

let s1 = daugyba2(2, 6);
console.log(s1);

console.log("-----------------------------------------");
/*Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
a) priima vieną kintamąjį
b) jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
c) priešingu atveju, funkcija tęsia darbą
d) į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
e) gražina skaitmenų kiekį
TESTAI:
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”*/

function mazdaug(a){
    let kiekis;
    if (a ) = typeof NaN{
    kiekis = 'Pateikta netinkamo tipo reikšmė.' }
 else {kiekis = 'ilgis', a.length}
  return kiekis; 
}
let bla = mazdaug(3);
console.log(bla);