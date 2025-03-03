// 1) Exercitiul asta este pentru o clinica care are nevoie sa faca o categorisire pe pacienti in functie de varsta. Task-uri:
// - creeaza o variabila care contine varsta pacientului
// - daca varsta este sub 12 => afiseaza in consola "copil"
// - daca varsta este intre 12 (inclusiv) si sub 18 => afiseaza in consola "adolescent"
// - daca varsta este intre 18 (inclusiv) si 65 => afiseaza in consola "adult"
// - daca varsta este peste 65 (inclusiv) => afiseaza in consola "senior"

let pacientAge = prompt('Insert pacient age');

while (!/^[0-9]+$/.test(pacientAge)) {
  alert('You did not enter a number');
  pacientAge = prompt('Insert pacient age');
}
pacientAge = Number(pacientAge);

switch (true) {
  case pacientAge < 12:
    console.log('Child');
    break;
  case pacientAge >= 12 && pacientAge < 18:
    console.log(`Teenager`);
    break;
  case pacientAge >= 18 && pacientAge < 65:
    console.log(`Adult`);
    break;
  case pacientAge >= 65 && pacientAge < 100:
    console.log(`Senior`);
    break;
  case pacientAge >= 100:
    console.log(`Ancient`);
}

// 2) Exercitiul asta este pentru determinarea procentului de reducere aplicat la o cafenea. Task-uri:
// - creeaza 3 variabile: una pentru costul total al bonului inainte de reducere, una care indica daca clientul este student sau nu ( val booleana ),
// una care indica daca este weekend ( booleana )
// - daca clientul este student si totodata este weekend => aplica o reducere de 20% pe costul total si afiseaza in consola "Pretul final dupa aplicarea reducerii este de X lei"
// - daca clientul este student sau daca este weekend => aplica o reducere de 10% pe costul total si afiseaza in consola "Pretul final dupa aplicarea reducerii este de X lei"
// - daca nu a fost aplicata nicio reducere => afiseaza in consola "Pret: X lei"

let totalCheckCost = 200;
let isStudent = Math.random() >= 0.5;
let isWeekend = Math.random() >= 0.5;

const coffeeShopDiscount = (isStudent, isWeekend, totalCheckCost) => {
  if (isStudent && isWeekend) {
    const totalCostWithDiscount = (20 / 100) * totalCheckCost;
    return console.log(
      `Pretul final dupa aplicarea reducerii este de ${totalCostWithDiscount} lei`
    );
  } else if (isStudent || isWeekend) {
    totalCostWithDiscount = (10 / 100) * totalCheckCost;
    return console.log(
      `Pretul final dupa aplicarea reducerii este de ${totalCostWithDiscount} lei`
    );
  } else {
    return console.log(`Pret: ${totalCheckCost} lei`);
  }
};

console.log(coffeeShopDiscount(isStudent, isWeekend, totalCheckCost));

// 3) Exercitiul asta este pentru afisarea eligibilitatii (LGBT) unui student la bursa. Task-uri:
// - creeaza 4 variabile: una care contine media notelor studentului, una care contine nr de absente,
// una care contine nota minima ca sa iei bursa, una care contine numarul de absente MAXIM admis ca sa iei bursa
// - daca studentul are media necesara si se incadreaza in nr maxim admis de absente, sa se afiseze in consola "felicitari, esti eligibil pentru bursa"
// - daca studentul nu se incadreaza cu media, dar cu absentele sta bine, atunci sa se afiseze un mesaj in consola gen "ai numarul de absente admis, dar nu te incadrezi cu media ca sa primesti bursa"
// - la fel ca mai sus, sa se trateze cazul invers ( medie buna, absente nu )
// - daca studentul nu indeplineste nicio conditie, sa se afiseze in consola un mesaj sugestiv
// ( tip: folositi else if )

let gradePointAverage = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
let studentAbscenses = Math.floor(Math.random() * (200 - 0 + 1)) + 0;
let averageGradeForScholarship = 7;
let maxAbscensesAdmitted = 100;

console.log(studentAbscenses, gradePointAverage);

if (
  gradePointAverage >= averageGradeForScholarship &&
  studentAbscenses <= maxAbscensesAdmitted
) {
  console.log(`Congratulations, you are eligible for scholarship.`);
} else if (
  gradePointAverage < averageGradeForScholarship &&
  studentAbscenses <= maxAbscensesAdmitted
) {
  console.log(
    `You fit within the maximum number of absences, but not with the grade point average for a scholarship.`
  );
} else if (
  gradePointAverage >= averageGradeForScholarship &&
  studentAbscenses > maxAbscensesAdmitted
) {
  console.log(
    `You fit within the average grade point for scholarship, but not within the maximum number of absences.`
  );
} else {
  console.log(`We are sorry, you're not eligible for scholarship.`);
}

//4), 5), 6)

const table1 = document.getElementById('table1');
const table2 = document.getElementById('table2');
const table3 = document.getElementById('table3');

let sum = 0;
let prod = 1;
let counter = 0;

for (let i = 1; i < 11; i++) {
  let row = table1.insertRow();
  sum += i;
  for (let c = 0; c < 3; c++) {
    if (c === 2) {
      row.insertCell().textContent = `${sum}`;
    } else {
      row.insertCell().textContent = `${i}`;
    }
  }
}

for (let i = 1; i < 11; i++) {
  let row = table2.insertRow();
  prod *= i;
  for (let c = 0; c < 3; c++) {
    if (c === 2) {
      row.insertCell().textContent = `${prod}`;
    } else {
      row.insertCell().textContent = `${i}`;
    }
  }
}

for (let i = 1; i <= 21; i++) {
  let row = table3.insertRow();
  if (i % 3 === 0) {
    counter++;
  }
  for (let c = 0; c < 3; c++) {
    if (c === 2) {
      row.insertCell().textContent = `${counter}`;
    } else {
      row.insertCell().textContent = `${i}`;
    }
  }
}

// 7) Sa se creeze o variabila care contine un array cu numere - reprezentand varstele unui grup, iar o alta variabila
// cu numele "children" si valoarea 0. Folosind un for loop, sa se treaca prin fiecare element din array si sa se numere
// cati copii sunt ( practic cate varste sunt mai mici decat 12 ). La final, sa se afiseze in consola "No. of children: X".

let groupAge = [21, 84, 6, 45, 31, 12, 18, 4, 9, 10, 29, 1, 16];
let children = 0;
let teenager = 0;
let adults = 0;
let seniors = 0;
let sumOfAges = 0;

for (let i = 0; i < groupAge.length; i++) {
  if (groupAge[i] < 12) {
    children++;
  } else if (groupAge[i] >= 12 && groupAge[i] < 18) {
    teenager++;
  } else if (groupAge[i] >= 18 && groupAge[i] < 65) {
    adults++;
  } else if (groupAge[i] >= 65) {
    seniors++;
  }
  sumOfAges += groupAge[i];
}

console.log(`No. of children: ${children}`);
console.log(`No. of teenagers: ${teenager}`);
console.log(`No. of adults: ${adults}`);
console.log(`No. of seniors: ${seniors}`);
console.log(`Sum of ages: ${sumOfAges}`);
console.log(`Average: ${sumOfAges / groupAge.length}`);

// 8) Tot in codul solutiei de mai sus, includeti extra o numaratoare si pentru adolescenti - interval 12 (inclusiv) - 18.
// La final, sub console.log-ul de la children, sa se afiseze "No. of teenagers: Y".
// O numaratoare pentru adulti - interval 18 (inclusiv) - 65. La final sa se afiseze in consola "No. of adults: Z"
// O numaratoare pentru seniori - peste 65 (inclusiv). La final sa se afiseze in consola "No. of seniors: "

// 9) Tot in codul solutiei de mai sus, includeti calcularea sumei totale a varstelor. Ex: daca ai array-ul [5, 20, 8] => se va afisa "Sum of ages: 33".

// 10) Tot in codul solutiei de mai sus, includeti un console.log la final care sa afiseze media varstelor. Ex: daca ai array-ul [5, 20, 8] => se va afisa "Average: 11".
