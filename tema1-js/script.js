//1) Sa se creeze o variabila x care sa contina un numar. Daca valoarea variabilei este mai mare sau egala cu 0 sa se afiseze in consola "The number is positive",
// in caz contrar "The number is negative"

let x = -4;

if (x >= 0) {
  console.log('The number is positive');
} else {
  console.log('The number is negative');
}

//2) Sa se repete exercitiul de mai sus, dar folosindu-se functia prompt din javascript.
//dupa scrieti logica de comparare cu if, else

let inputNumber = prompt('Enter a number');
console.log(typeof inputNumber);
console.log(inputNumber);

inputNumber = Number(inputNumber);
console.log(typeof inputNumber);

if (inputNumber >= 18) {
  alert('Felicitari! Esti major');
} else {
  alert('Aici au voie doar 18+');
}

//3) Sa se creeze doua variabile a si b care contin doua numere ( le puneti voi manual ). Daca a este mai mare sau egal cu b => afiseaza in consola "cele doua numere sunt egale",
//  in caz contrar "cele doua numere sunt diferite

let a = prompt('Insereaza prima variabila');
let b = prompt('Insereaza a doua variabila');

a = Number(a);
b = Number(b);

if (a === b) {
  console.log('Cele doua numere sunt egale');
  alert('Cele doua numere sunt egale');
} else if (a > b) {
  console.log('Prima variabila este mai mare');
  alert('Prima variabila este mai mare');
} else {
  console.log('Cele doua numere sunt diferite');
  alert('Cele doua numere sunt diferite');
}

//4) Sa se creeze o variabila care contine nota unui student la un examen ( va fi intre 1-10 ). Daca nota este mai mica decat 5, sa se afiseze in consola "Picat", altfel "Promovat"

let notaExamen = 5;

if (notaExamen < 5) {
  console.log('Picat');
} else {
  console.log('Promovat');
}

//5) Sa se foloseasca prompt ( ca la ex 2 ) si sa se preia de la user numele lui. Daca lungimea numelui este mai mare decat 15, atunci sa se afiseze mesajul "Too long", altfel "Ok"

let userName = prompt('Enter your name here');

if (userName.length > 15) {
  console.log('Too long');
  alert('Too long');
} else {
  console.log('Ok');
  alert('Ok');
}
